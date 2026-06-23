(function () {
  /* Only run on the home/index page */
  var path = window.location.pathname;
  if (path !== '/' && !/^\/page\/\d+\/$/.test(path)) return;

  /* Wait for DOM ready */
  function init() {
    var board = document.getElementById('board');
    if (!board) return;
    var target = board.querySelector('.col-md-10') || board;

    /* ── Recent Blog heading ─────────────────────────────────────── */
    var firstCard = target.querySelector('.index-card');
    if (firstCard) {
      var recentHeading = document.createElement('h2');
      recentHeading.className = 'ex-recent-heading';
      recentHeading.textContent = 'Recent Blog';
      target.insertBefore(recentHeading, firstCard);
    }

    /* Build section HTML */
    var section = document.createElement('div');
    section.className = 'ex-home-section';
    section.innerHTML =
      '<div class="ex-explore-header">' +
        '<h2>Explore</h2>' +
        '<button class="ex-mode-toggle" id="ex-mode-toggle" title="Switch to multi-select">Multi-select</button>' +
      '</div>' +
      '<p class="ex-intro" id="ex-intro-text">Browse all posts and projects by tag. Click a tag to filter.</p>' +
      '<div class="ex-tag-bar" id="ex-tag-bar-home"><span class="ex-loading">Loading tags\u2026</span></div>' +
      '<div class="ex-grid" id="ex-grid-home"><div class="ex-loading">Loading content\u2026</div></div>';

    target.appendChild(section);

    /* ── Comments section ────────────────────────────────────────── */
    var commentsSection = document.createElement('div');
    commentsSection.className = 'ex-home-section';
    commentsSection.innerHTML =
      '<h2>Comments</h2>' +
      '<article id="home-comments"></article>';
    target.appendChild(commentsSection);

    window.UtterancesThemeLight = 'github-light';
    window.UtterancesThemeDark = 'github-dark';
    var utterTheme = document.documentElement.getAttribute('data-user-color-scheme') === 'dark'
      ? 'github-dark' : 'github-light';
    var utterScript = document.createElement('script');
    utterScript.setAttribute('src', 'https://utteranc.es/client.js');
    utterScript.setAttribute('repo', 'yqhuang1234-ui/yqhuang1234-ui.github.io');
    utterScript.setAttribute('issue-term', 'pathname');
    utterScript.setAttribute('label', 'utterances');
    utterScript.setAttribute('theme', utterTheme);
    utterScript.setAttribute('crossorigin', 'anonymous');
    document.getElementById('home-comments').appendChild(utterScript);

    /* ── Parse local-search.xml → post items ────────────────────── */
    function parsePosts(xmlText) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(xmlText, 'text/xml');
      var entries = Array.from(doc.querySelectorAll('entry'));
      return entries.map(function (e) {
        var tags = Array.from(e.querySelectorAll('tags tag')).map(function (t) { return t.textContent.trim(); });
        var cats = Array.from(e.querySelectorAll('categories category')).map(function (c) { return c.textContent.trim().toLowerCase().replace(/\s+/g, '-'); });
        tags = tags.concat(cats.filter(function (c) { return !tags.includes(c); }));
        var content = (e.querySelector('content') || {}).textContent || '';
        var desc = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
        var rawUrl = (e.querySelector('url') || {}).textContent || '#';
        var url = rawUrl.replace(/^https?:\/\/[^\/]+/, '') || rawUrl;
        var img = (e.querySelector('img') || {}).textContent || null;
        return {
          type: 'blog',
          title: (e.querySelector('title') || {}).textContent || 'Untitled',
          url: url,
          img: img,
          desc: desc,
          tags: tags
        };
      });
    }

    /* ── Build tag frequency map ─────────────────────────────────── */
    function buildTagMap(items) {
      var map = {};
      items.forEach(function (item) {
        (item.tags || []).forEach(function (t) { map[t] = (map[t] || 0) + 1; });
      });
      return map;
    }

    /* ── Helpers ─────────────────────────────────────────────────── */
    function escHtml(s) {
      return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    /* ── Filter state ────────────────────────────────────────────── */
    var PREVIEW_COUNT = 4;
    var multiMode = false;
    var previewMode = true;
    var activeTags = new Set();

    /* ── Apply filter (show/hide cards + update pills) ───────────── */
    function applyFilter() {
      var allBtn = document.querySelector('#ex-tag-bar-home .ex-pill[data-tag=""]');
      if (allBtn) allBtn.classList.toggle('ex-active', activeTags.size === 0);

      var cards = Array.from(document.querySelectorAll('#ex-grid-home .ex-card'));

      /* Tag filter */
      cards.forEach(function (card) {
        var tags = JSON.parse(card.dataset.tags || '[]');
        var hide = activeTags.size > 0 && !tags.some(function (t) { return activeTags.has(t); });
        card.classList.toggle('ex-hidden', hide);
      });

      /* Preview limit — only when no tag active AND not in multi-select mode */
      if (activeTags.size === 0 && previewMode && !multiMode) {
        var shown = 0;
        cards.forEach(function (card) {
          if (!card.classList.contains('ex-hidden')) {
            shown++;
            card.classList.toggle('ex-preview-hidden', shown > PREVIEW_COUNT);
          } else {
            card.classList.remove('ex-preview-hidden');
          }
        });
      } else {
        cards.forEach(function (card) { card.classList.remove('ex-preview-hidden'); });
      }

      /* Show-all button */
      var showAllBtn = document.getElementById('ex-show-all-btn');
      if (showAllBtn) {
        var visibleTotal = cards.filter(function (c) { return !c.classList.contains('ex-hidden'); }).length;
        var show = activeTags.size === 0 && previewMode && visibleTotal > PREVIEW_COUNT;
        showAllBtn.style.display = show ? 'block' : 'none';
        if (show) showAllBtn.textContent = 'Show all ' + visibleTotal + ' \u2192';
      }
    }

    /* ── Toggle select mode ──────────────────────────────────────── */
    function initModeToggle() {
      var btn = document.getElementById('ex-mode-toggle');
      var intro = document.getElementById('ex-intro-text');
      if (!btn) return;
      btn.addEventListener('click', function () {
        multiMode = !multiMode;
        if (multiMode) {
          btn.textContent = 'Single-select';
          btn.title = 'Switch to single-select';
          btn.classList.add('ex-mode-active');
          intro.textContent = 'Multi-select mode: click multiple tags to filter by any of them.';
        } else {
          btn.textContent = 'Multi-select';
          btn.title = 'Switch to multi-select';
          btn.classList.remove('ex-mode-active');
          intro.textContent = 'Browse all posts and projects by tag. Click a tag to filter.';
          /* Reset to single selection — keep first active tag if any */
          var first = activeTags.size > 0 ? Array.from(activeTags)[0] : null;
          activeTags.clear();
          document.querySelectorAll('#ex-tag-bar-home .ex-pill').forEach(function (p) { p.classList.remove('ex-active'); });
          if (first) {
            activeTags.add(first);
            var pill = document.querySelector('#ex-tag-bar-home .ex-pill[data-tag="' + first + '"]');
            if (pill) pill.classList.add('ex-active');
          }
          applyFilter();
        }
      });
    }

    /* ── Render tag bar ──────────────────────────────────────────── */
    function renderTagBar(tagMap, totalCount) {
      var bar = document.getElementById('ex-tag-bar-home');
      var sorted = Object.entries(tagMap).sort(function (a, b) { return b[1] - a[1]; });
      var allCount = totalCount;
      bar.innerHTML = '';
      var allBtn = document.createElement('span');
      allBtn.className = 'ex-pill ex-active';
      allBtn.dataset.tag = '';
      allBtn.innerHTML = 'All <span class="ex-pill-sep">\u00b7</span><span class="ex-pill-count">' + allCount + '</span>';
      allBtn.addEventListener('click', function () {
        activeTags.clear();
        previewMode = true;
        document.querySelectorAll('#ex-tag-bar-home .ex-pill').forEach(function (p) { p.classList.remove('ex-active'); });
        allBtn.classList.add('ex-active');
        applyFilter();
      });
      bar.appendChild(allBtn);
      sorted.forEach(function (entry) {
        var tag = entry[0], count = entry[1];
        var pill = document.createElement('span');
        pill.className = 'ex-pill';
        pill.dataset.tag = tag;
        pill.innerHTML = escHtml(tag) + ' <span class="ex-pill-sep">\u00b7</span><span class="ex-pill-count">' + count + '</span>';
        pill.addEventListener('click', function () {
          if (multiMode) {
            if (activeTags.has(tag)) {
              activeTags.delete(tag);
              pill.classList.remove('ex-active');
            } else {
              activeTags.add(tag);
              pill.classList.add('ex-active');
            }
          } else {
            activeTags.clear();
            document.querySelectorAll('#ex-tag-bar-home .ex-pill').forEach(function (p) { p.classList.remove('ex-active'); });
            activeTags.add(tag);
            pill.classList.add('ex-active');
          }
          applyFilter();
        });
        bar.appendChild(pill);
      });
      initModeToggle();
    }

    /* ── Render cards ────────────────────────────────────────────── */
    function renderCards(items) {
      var grid = document.getElementById('ex-grid-home');
      grid.innerHTML = '';
      items.forEach(function (item) {
        var card = document.createElement('a');
        card.href = item.url;
        card.className = 'ex-card';
        card.dataset.tags = JSON.stringify(item.tags || []);
        var imgHtml = item.img
          ? '<img class="ex-card-img" src="' + escHtml(item.img) + '" alt="' + escHtml(item.title) + '" loading="lazy" onerror="this.style.display=\'none\'">'
          : '';
        card.innerHTML =
          imgHtml +
          '<span class="ex-badge ex-badge-' + item.type + '">' + (item.type === 'blog' ? 'Blog' : 'Project') + '</span>' +
          '<p class="ex-card-title">' + escHtml(item.title) + '</p>' +
          '<p class="ex-card-desc">' + escHtml(item.desc) + '</p>' +
          '<div class="ex-card-tags">' + (item.tags || []).map(function (t) { return '<span class="ex-card-tag">' + escHtml(t) + '</span>'; }).join('') + '</div>';
        grid.appendChild(card);
      });
      if (grid.children.length === 0) {
        grid.innerHTML = '<div class="ex-loading">No results.</div>';
      }

      /* "Show all" button — inserted once after the grid */
      if (!document.getElementById('ex-show-all-btn')) {
        var showAllBtn = document.createElement('button');
        showAllBtn.id = 'ex-show-all-btn';
        showAllBtn.className = 'ex-show-all-btn';
        showAllBtn.style.display = 'none';
        showAllBtn.addEventListener('click', function () {
          previewMode = false;
          applyFilter();
        });
        grid.parentNode.insertBefore(showAllBtn, grid.nextSibling);
      }
    }

    /* ── Bootstrap ───────────────────────────────────────────────── */
    Promise.all([
      fetch('/local-search.xml').then(function (r) { return r.text(); }).catch(function () { return null; }),
      fetch('/projects-data.json').then(function (r) { return r.json(); }).catch(function () { return []; })
    ]).then(function (results) {
      var posts = results[0] ? parsePosts(results[0]) : [];
      var projectItems = (results[1] || []).map(function (p) {
        return {
          type: 'project',
          title: p.title,
          url: '/projects/',
          img: p.img || null,
          desc: p.desc,
          tags: (p.tags || []).concat(['projects'])
        };
      });
      var allItems = posts.concat(projectItems);
      renderTagBar(buildTagMap(allItems), allItems.length);
      renderCards(allItems);
      applyFilter();
    });

    /* ── Recent Blog preview (4 posts, then Show all) ────────────── */
    (function () {
      var blogCards = Array.from(target.querySelectorAll('.index-card'));
      if (blogCards.length <= PREVIEW_COUNT) return;

      blogCards.forEach(function (card, i) {
        if (i >= PREVIEW_COUNT) card.classList.add('ex-preview-hidden');
      });

      var btn = document.createElement('button');
      btn.className = 'ex-show-all-btn';
      btn.textContent = 'Show all ' + blogCards.length + ' posts \u2192';
      btn.addEventListener('click', function () {
        blogCards.forEach(function (card) { card.classList.remove('ex-preview-hidden'); });
        btn.style.display = 'none';
      });

      var lastCard = blogCards[blogCards.length - 1];
      lastCard.parentNode.insertBefore(btn, lastCard.nextSibling);
    }());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
