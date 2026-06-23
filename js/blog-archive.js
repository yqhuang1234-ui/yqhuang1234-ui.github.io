(function () {
  /* Only run on the blog archive pages */
  if (!/^\/blog(\/page\/\d+)?\/?$/.test(window.location.pathname)) return;

  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function parsePosts(xmlText) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(xmlText, 'text/xml');
    return Array.from(doc.querySelectorAll('entry')).map(function (e) {
      var rawUrl = (e.querySelector('url') || {}).textContent || '#';
      var url = rawUrl.replace(/^https?:\/\/[^\/]+/, '') || rawUrl;
      var content = (e.querySelector('content') || {}).textContent || '';
      var desc = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
      var tags = Array.from(e.querySelectorAll('tags tag')).map(function (t) { return t.textContent.trim(); });
      var img = (e.querySelector('img') || {}).textContent || null;
      var dateRaw = (e.querySelector('date') || {}).textContent || '';
      var dateStr = dateRaw ? new Date(dateRaw).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
      return {
        title: (e.querySelector('title') || {}).textContent || 'Untitled',
        url: url,
        img: img,
        desc: desc,
        tags: tags,
        date: dateStr
      };
    });
  }

  function render(posts) {
    var listGroup = document.querySelector('.list-group');
    if (!listGroup) return;

    var wrapper = document.createElement('div');
    wrapper.className = 'ba-wrap';

    var grid = document.createElement('div');
    grid.className = 'ba-grid';

    posts.forEach(function (post) {
      var card = document.createElement('a');
      card.href = post.url;
      card.className = 'ba-card';

      var imgHtml = post.img
        ? '<img class="ba-card-img" src="' + escHtml(post.img) + '" alt="' + escHtml(post.title) + '" loading="lazy">'
        : '';
      var tagsHtml = post.tags.length
        ? '<div class="ba-card-tags">' + post.tags.map(function (t) { return '<span class="ba-card-tag">' + escHtml(t) + '</span>'; }).join('') + '</div>'
        : '';

      card.innerHTML =
        imgHtml +
        '<div class="ba-card-body">' +
          '<p class="ba-card-date">' + escHtml(post.date) + '</p>' +
          '<p class="ba-card-title">' + escHtml(post.title) + '</p>' +
          '<p class="ba-card-desc">' + escHtml(post.desc) + '</p>' +
          tagsHtml +
        '</div>';

      grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    listGroup.parentNode.replaceChild(wrapper, listGroup);
  }

  function init() {
    fetch('/local-search.xml')
      .then(function (r) { return r.text(); })
      .then(function (xml) { render(parsePosts(xml)); })
      .catch(function () {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
