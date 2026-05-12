---
title: "Deep Learning Specialization — The Big Picture"
date: 2026-05-12 13:00:00
tags:
  - deep-learning
  - learning-notes
  - blog
categories:
  - Coursera Deep Learning Specialization
index_img: /img/posts/coursera-deep-learning-overview.svg
excerpt: >
  Three courses down, one to go. A visual overview of how Courses 1–3 of Andrew Ng's Deep Learning Specialization connect — and a preview of Course 4 on Convolutional Neural Networks.
---

Three courses down, one to go. Here's how they build on each other and connect into a coherent progression — from building networks by hand, to making them train well, to making smart decisions about what to fix next.

<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=IBM+Plex+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600&display=swap');

.dlo {
  --dlo-bg2:          #F2F0EC;
  --dlo-bg3:          #E8E5DF;
  --dlo-surface:      #FFFFFF;
  --dlo-border:       rgba(28,28,26,0.10);
  --dlo-border2:      rgba(28,28,26,0.18);
  --dlo-text:         #1C1C1A;
  --dlo-text2:        #5C5B56;
  --dlo-text3:        #9A9890;
  --dlo-teal:         #0F6E56;
  --dlo-teal-light:   #E1F5EE;
  --dlo-teal-mid:     #C0EAD9;
  --dlo-coral:        #D97B52;
  --dlo-coral-light:  #FAECE7;
  --dlo-coral-mid:    #F2CABC;
  --dlo-purple:       #534AB7;
  --dlo-purple-light: #ECEAFF;
  --dlo-purple-mid:   #CEC9F5;
  --dlo-amber:        #854F0B;
  --dlo-amber-light:  #FEF3E2;
  --dlo-amber-mid:    #F8D9A0;
  --dlo-radius:       12px;
  --dlo-radius-sm:    7px;
  --dlo-shadow:       0 1px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --dlo-shadow-md:    0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  line-height: 1.65;
}

.dlo .dlo-hero {
  text-align: center;
  margin: 0.5rem 0 2.5rem;
}
.dlo .dlo-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dlo-text3);
  margin-bottom: 0.5rem;
}
.dlo .dlo-sub {
  font-size: 14px;
  color: var(--dlo-text2);
  margin-bottom: 1.5rem;
}
.dlo .dlo-progress-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.dlo .dlo-progress-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: var(--dlo-text3);
  letter-spacing: 0.05em;
}
.dlo .dlo-progress-track {
  width: 260px;
  height: 8px;
  background: var(--dlo-bg3);
  border-radius: 99px;
  overflow: hidden;
}
.dlo .dlo-progress-fill {
  height: 100%;
  width: 75%;
  background: linear-gradient(90deg, var(--dlo-teal) 0%, var(--dlo-coral) 45%, var(--dlo-purple) 100%);
  border-radius: 99px;
}
.dlo .dlo-progress-dots {
  display: flex;
  gap: 6px;
  align-items: center;
}
.dlo .dlo-progress-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dlo .dlo-progress-dot.done { background: var(--dlo-text); }
.dlo .dlo-progress-dot.next { background: var(--dlo-bg3); border: 2px solid var(--dlo-border2); }

.dlo .dlo-section-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dlo-text3);
  margin-bottom: 1.25rem;
}

.dlo .dlo-roadmap {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0;
  margin-bottom: 3rem;
}
.dlo .dlo-course-card {
  background: var(--dlo-surface);
  border: 1.5px solid var(--dlo-border);
  border-radius: var(--dlo-radius);
  padding: 1.1rem 1.1rem 1rem;
  box-shadow: var(--dlo-shadow);
  transition: box-shadow 0.15s;
}
.dlo .dlo-course-card:hover { box-shadow: var(--dlo-shadow-md); }
.dlo .dlo-course-card.teal   { border-top: 3px solid var(--dlo-teal); }
.dlo .dlo-course-card.coral  { border-top: 3px solid var(--dlo-coral); }
.dlo .dlo-course-card.purple { border-top: 3px solid var(--dlo-purple); }
.dlo .dlo-course-card.amber  { border-top: 3px solid var(--dlo-amber-mid); opacity: 0.72; }

.dlo .dlo-course-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 99px;
  display: inline-block;
  margin-bottom: 7px;
}
.dlo .dlo-course-card.teal   .dlo-course-badge { background: var(--dlo-teal-light);   color: var(--dlo-teal); }
.dlo .dlo-course-card.coral  .dlo-course-badge { background: var(--dlo-coral-light);  color: var(--dlo-coral); }
.dlo .dlo-course-card.purple .dlo-course-badge { background: var(--dlo-purple-light); color: var(--dlo-purple); }
.dlo .dlo-course-card.amber  .dlo-course-badge { background: var(--dlo-amber-light);  color: var(--dlo-amber); }

.dlo .dlo-course-title {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--dlo-text);
  line-height: 1.3;
  margin-bottom: 6px;
}
.dlo .dlo-course-desc {
  font-size: 11.5px;
  color: var(--dlo-text2);
  line-height: 1.5;
  margin-bottom: 10px;
}
.dlo .dlo-status-chip {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 99px;
  display: inline-block;
  margin-bottom: 8px;
}
.dlo .dlo-status-chip.done { background: #E6F4F0; color: #0A6648; }
.dlo .dlo-status-chip.next { background: var(--dlo-bg2); color: var(--dlo-text3); }

.dlo .dlo-card-link {
  font-family: 'Outfit', sans-serif;
  font-size: 11.5px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  opacity: 0.75;
  transition: opacity 0.12s;
}
.dlo .dlo-course-card.teal   .dlo-card-link { color: var(--dlo-teal); }
.dlo .dlo-course-card.coral  .dlo-card-link { color: var(--dlo-coral); }
.dlo .dlo-course-card.purple .dlo-card-link { color: var(--dlo-purple); }
.dlo .dlo-card-link:hover { opacity: 1; }

.dlo .dlo-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 6px;
}
.dlo .dlo-connector-line {
  width: 28px;
  height: 2px;
  background: var(--dlo-border2);
  position: relative;
}
.dlo .dlo-connector-line::after {
  content: '▸';
  position: absolute;
  right: -7px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: var(--dlo-text3);
  line-height: 1;
}
.dlo .dlo-connector-label {
  font-size: 9.5px;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--dlo-text3);
  text-align: center;
  white-space: nowrap;
  max-width: 72px;
  line-height: 1.4;
}

.dlo .dlo-panels-section { margin-bottom: 3rem; }
.dlo .dlo-panel {
  background: var(--dlo-surface);
  border: 1px solid var(--dlo-border);
  border-radius: var(--dlo-radius);
  box-shadow: var(--dlo-shadow);
  margin-bottom: 1rem;
  overflow: hidden;
}
.dlo .dlo-panel-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  transition: background 0.12s;
}
.dlo .dlo-panel-header:hover { background: var(--dlo-bg2); }
.dlo .dlo-panel-accent {
  width: 4px;
  height: 36px;
  border-radius: 2px;
  flex-shrink: 0;
}
.dlo .dlo-panel-accent.teal   { background: var(--dlo-teal); }
.dlo .dlo-panel-accent.coral  { background: var(--dlo-coral); }
.dlo .dlo-panel-accent.purple { background: var(--dlo-purple); }
.dlo .dlo-panel-header-text { flex: 1; }
.dlo .dlo-panel-course-num {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  color: var(--dlo-text3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.dlo .dlo-panel-course-title {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dlo-text);
  letter-spacing: -0.01em;
}
.dlo .dlo-panel-toggle {
  font-size: 14px;
  color: var(--dlo-text3);
  transition: transform 0.2s;
}
.dlo .dlo-panel.open .dlo-panel-toggle { transform: rotate(180deg); }
.dlo .dlo-panel-body {
  display: none;
  padding: 0 1.25rem 1.25rem;
  border-top: 1px solid var(--dlo-border);
}
.dlo .dlo-panel.open .dlo-panel-body { display: block; }
.dlo .dlo-panel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  padding-top: 1.1rem;
}
.dlo .dlo-panel-section-title {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--dlo-text3);
  margin-bottom: 0.6rem;
}
.dlo .dlo-weeks-list { list-style: none; padding: 0; margin: 0; }
.dlo .dlo-weeks-list li {
  display: flex;
  gap: 10px;
  align-items: baseline;
  font-size: 13px;
  color: var(--dlo-text2);
  padding: 5px 0;
  border-bottom: 1px solid var(--dlo-border);
  line-height: 1.4;
}
.dlo .dlo-weeks-list li:last-child { border-bottom: none; }
.dlo .dlo-week-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
  padding: 1px 6px;
  border-radius: 4px;
}
.dlo .dlo-big-idea {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1rem;
  font-style: italic;
  color: var(--dlo-text2);
  line-height: 1.6;
  margin-bottom: 1rem;
}
.dlo .dlo-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1rem; }
.dlo .dlo-chip {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10.5px;
  padding: 3px 10px;
  border-radius: 99px;
  border: 1px solid;
}
.dlo .dlo-chip.teal   { background: var(--dlo-teal-light);   color: var(--dlo-teal);   border-color: var(--dlo-teal-mid); }
.dlo .dlo-chip.coral  { background: var(--dlo-coral-light);  color: var(--dlo-coral);  border-color: var(--dlo-coral-mid); }
.dlo .dlo-chip.purple { background: var(--dlo-purple-light); color: var(--dlo-purple); border-color: var(--dlo-purple-mid); }

.dlo .dlo-panel-links { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 0.9rem; }
.dlo .dlo-panel-link {
  font-family: 'Outfit', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: var(--dlo-radius-sm);
  text-decoration: none;
  transition: all 0.15s;
  border: 1px solid;
}
.dlo .dlo-panel-link.primary.teal   { background: var(--dlo-teal);   color: #fff; border-color: var(--dlo-teal); }
.dlo .dlo-panel-link.primary.coral  { background: var(--dlo-coral);  color: #fff; border-color: var(--dlo-coral); }
.dlo .dlo-panel-link.primary.purple { background: var(--dlo-purple); color: #fff; border-color: var(--dlo-purple); }
.dlo .dlo-panel-link.secondary { background: var(--dlo-bg2); color: var(--dlo-text2); border-color: var(--dlo-border2); }
.dlo .dlo-panel-link.secondary:hover { background: var(--dlo-bg3); color: var(--dlo-text); }

.dlo .dlo-preview-section { margin-bottom: 2rem; }
.dlo .dlo-preview-card {
  background: var(--dlo-surface);
  border: 1.5px dashed var(--dlo-border2);
  border-radius: var(--dlo-radius);
  padding: 1.5rem 1.75rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.5rem;
  align-items: center;
  opacity: 0.8;
}
.dlo .dlo-preview-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 99px;
  background: var(--dlo-amber-light);
  color: var(--dlo-amber);
  display: inline-block;
  margin-bottom: 8px;
}
.dlo .dlo-preview-title {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--dlo-text);
  margin-bottom: 6px;
}
.dlo .dlo-preview-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 0.75rem;
}
.dlo .dlo-preview-topic {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10.5px;
  padding: 3px 10px;
  border-radius: 99px;
  background: var(--dlo-amber-light);
  color: var(--dlo-amber);
  border: 1px solid var(--dlo-amber-mid);
}
.dlo .dlo-preview-status { text-align: center; }
.dlo .dlo-preview-status-ring {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px dashed var(--dlo-amber-mid);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--dlo-amber);
  margin: 0 auto 6px;
}
.dlo .dlo-preview-status-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  color: var(--dlo-amber);
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

@media (max-width: 720px) {
  .dlo .dlo-roadmap {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  .dlo .dlo-connector {
    flex-direction: row;
    padding: 0 0 0 1rem;
    justify-content: flex-start;
  }
  .dlo .dlo-connector-line { width: 2px; height: 20px; }
  .dlo .dlo-connector-line::after { display: none; }
  .dlo .dlo-connector-label { display: none; }
  .dlo .dlo-panel-grid { grid-template-columns: 1fr; }
  .dlo .dlo-preview-card { grid-template-columns: 1fr; }
}
</style>

<div class="dlo">

<div class="dlo-hero">
  <p class="dlo-eyebrow">Andrew Ng · Coursera · Deep Learning Specialization</p>
  <p class="dlo-sub">How the four courses connect — and where I am in the journey.</p>
  <div class="dlo-progress-wrap">
    <div class="dlo-progress-track"><div class="dlo-progress-fill"></div></div>
    <div class="dlo-progress-dots">
      <span class="dlo-progress-dot done"></span>
      <span class="dlo-progress-dot done"></span>
      <span class="dlo-progress-dot done"></span>
      <span class="dlo-progress-dot next"></span>
    </div>
    <div class="dlo-progress-label">3 of 4 courses complete · 75%</div>
  </div>
</div>

<p class="dlo-section-label">Course roadmap</p>
<div class="dlo-roadmap">

  <div class="dlo-course-card teal">
    <div class="dlo-course-badge">Course 1</div>
    <div class="dlo-course-title">Neural Networks &amp; Deep Learning</div>
    <div class="dlo-course-desc">Build networks from scratch. Forward pass, backprop, activation functions, L-layer architecture.</div>
    <span class="dlo-status-chip done">✓ Complete</span><br>
    <a class="dlo-card-link" href="/2026/04/14/neural-networks-deep-learning-coursera/">Blog post →</a>
  </div>

  <div class="dlo-connector">
    <div class="dlo-connector-line"></div>
    <div class="dlo-connector-label">Built it → make it train well</div>
  </div>

  <div class="dlo-course-card coral">
    <div class="dlo-course-badge">Course 2</div>
    <div class="dlo-course-title">Improving Deep Neural Networks</div>
    <div class="dlo-course-desc">Regularization, optimization algorithms, hyperparameter tuning, batch normalization, TensorFlow.</div>
    <span class="dlo-status-chip done">✓ Complete</span><br>
    <a class="dlo-card-link" href="/2026/04/23/improving-deep-neural-networks-coursera/">Blog post →</a>
  </div>

  <div class="dlo-connector">
    <div class="dlo-connector-line"></div>
    <div class="dlo-connector-label">Tuned it → make smart decisions</div>
  </div>

  <div class="dlo-course-card purple">
    <div class="dlo-course-badge">Course 3</div>
    <div class="dlo-course-title">Structuring ML Projects</div>
    <div class="dlo-course-desc">ML strategy, error analysis, bias-variance diagnosis, transfer learning, end-to-end deep learning.</div>
    <span class="dlo-status-chip done">✓ Complete</span><br>
    <a class="dlo-card-link" href="/2026/05/12/structuring-machine-learning-projects-coursera/">Blog post →</a>
  </div>

  <div class="dlo-connector">
    <div class="dlo-connector-line"></div>
    <div class="dlo-connector-label">Strategised → specialise to vision</div>
  </div>

  <div class="dlo-course-card amber">
    <div class="dlo-course-badge">Course 4</div>
    <div class="dlo-course-title">Convolutional Neural Networks</div>
    <div class="dlo-course-desc">ConvNets, ResNets, object detection (YOLO), face recognition, neural style transfer.</div>
    <span class="dlo-status-chip next">→ Next</span>
  </div>

</div>

<p class="dlo-section-label">Course details</p>
<div class="dlo-panels-section">

  <div class="dlo-panel open" id="dlo-panel-c1">
    <div class="dlo-panel-header" onclick="dloTogglePanel('dlo-panel-c1')">
      <div class="dlo-panel-accent teal"></div>
      <div class="dlo-panel-header-text">
        <div class="dlo-panel-course-num">Course 1</div>
        <div class="dlo-panel-course-title">Neural Networks &amp; Deep Learning</div>
      </div>
      <div class="dlo-panel-toggle">▾</div>
    </div>
    <div class="dlo-panel-body">
      <div class="dlo-panel-grid">
        <div>
          <div class="dlo-panel-section-title">Week by week</div>
          <ul class="dlo-weeks-list">
            <li>
              <span class="dlo-week-tag" style="background:var(--dlo-teal-light);color:var(--dlo-teal)">Wk 2</span>
              Neural network programming basics — logistic regression, vectorization, forward &amp; backward propagation
            </li>
            <li>
              <span class="dlo-week-tag" style="background:var(--dlo-teal-light);color:var(--dlo-teal)">Wk 3</span>
              Shallow networks — tanh/ReLU activation functions, two-layer network, backprop by hand
            </li>
            <li>
              <span class="dlo-week-tag" style="background:var(--dlo-teal-light);color:var(--dlo-teal)">Wk 4</span>
              Deep networks — L-layer architecture, why depth matters, systematic forward/backward pass
            </li>
          </ul>
        </div>
        <div>
          <div class="dlo-panel-section-title">Big idea</div>
          <p class="dlo-big-idea">"A neural network is just logistic regression stacked and made non-linear. Once you can derive backprop for two layers, generalising to L layers is notation, not new insight."</p>
          <div class="dlo-panel-section-title">Key concepts</div>
          <div class="dlo-chips">
            <span class="dlo-chip teal">Forward pass</span>
            <span class="dlo-chip teal">Backprop</span>
            <span class="dlo-chip teal">ReLU / tanh</span>
            <span class="dlo-chip teal">Vectorization</span>
            <span class="dlo-chip teal">L-layer network</span>
            <span class="dlo-chip teal">Computation graph</span>
          </div>
          <div class="dlo-panel-links">
            <a class="dlo-panel-link primary teal" href="/2026/04/14/neural-networks-deep-learning-coursera/">Blog post</a>
            <a class="dlo-panel-link secondary" href="https://yanqihuang.notion.site/Week-2-Basics-of-Neural-Network-Programming-Complete-Guide-32853115b8b8812cb7e3fe9e2f0136ed" target="_blank">Week 2 Notion</a>
            <a class="dlo-panel-link secondary" href="https://www.notion.so/yanqihuang/Week-3-Shallow-Neural-Networks-Complete-Guide-32d53115b8b880dea091df09e8db5ebb" target="_blank">Week 3 Notion</a>
            <a class="dlo-panel-link secondary" href="https://www.notion.so/yanqihuang/Week-4-deep-neural-networks-33d53115b8b880ad9434ffee80234d4c" target="_blank">Week 4 Notion</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="dlo-panel" id="dlo-panel-c2">
    <div class="dlo-panel-header" onclick="dloTogglePanel('dlo-panel-c2')">
      <div class="dlo-panel-accent coral"></div>
      <div class="dlo-panel-header-text">
        <div class="dlo-panel-course-num">Course 2</div>
        <div class="dlo-panel-course-title">Improving Deep Neural Networks</div>
      </div>
      <div class="dlo-panel-toggle">▾</div>
    </div>
    <div class="dlo-panel-body">
      <div class="dlo-panel-grid">
        <div>
          <div class="dlo-panel-section-title">Week by week</div>
          <ul class="dlo-weeks-list">
            <li>
              <span class="dlo-week-tag" style="background:var(--dlo-coral-light);color:var(--dlo-coral)">Wk 1</span>
              Practical deep learning — train/dev/test splits, bias-variance, L2 regularization, dropout, gradient checking
            </li>
            <li>
              <span class="dlo-week-tag" style="background:var(--dlo-coral-light);color:var(--dlo-coral)">Wk 2</span>
              Optimization — mini-batch gradient descent, momentum, RMSprop, Adam optimizer
            </li>
            <li>
              <span class="dlo-week-tag" style="background:var(--dlo-coral-light);color:var(--dlo-coral)">Wk 3</span>
              Tuning &amp; frameworks — hyperparameter search, batch normalization, TensorFlow introduction
            </li>
          </ul>
        </div>
        <div>
          <div class="dlo-panel-section-title">Big idea</div>
          <p class="dlo-big-idea">"Getting a network to converge is one problem; getting it to generalize well is another. Regularization and optimization are the two knobs that separate working models from great ones."</p>
          <div class="dlo-panel-section-title">Key concepts</div>
          <div class="dlo-chips">
            <span class="dlo-chip coral">Bias-Variance</span>
            <span class="dlo-chip coral">L2 / Dropout</span>
            <span class="dlo-chip coral">Adam</span>
            <span class="dlo-chip coral">Mini-batch GD</span>
            <span class="dlo-chip coral">Batch Norm</span>
            <span class="dlo-chip coral">Hyperparameter tuning</span>
          </div>
          <div class="dlo-panel-links">
            <a class="dlo-panel-link primary coral" href="/2026/04/23/improving-deep-neural-networks-coursera/">Blog post</a>
            <a class="dlo-panel-link secondary" href="https://yanqihuang.notion.site/C2W1-Regularizing-Your-Neural-Network-Complete-Guide-34653115b8b881fab896d19eb7e306dd?source=copy_link" target="_blank">Week 1 Notion</a>
            <a class="dlo-panel-link secondary" href="https://www.notion.so/yanqihuang/Week-2-Optimization-Algorithms-Complete-Guide-35853115b8b880a3b46ad5003d1b8e7e?source=copy_link" target="_blank">Week 2 Notion</a>
            <a class="dlo-panel-link secondary" href="https://www.notion.so/yanqihuang/Week-3-Hyperparameter-Tuning-Batch-Normalization-Frameworks-Complete-Guide-35953115b8b880558da1f226ead40cd7?source=copy_link" target="_blank">Week 3 Notion</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="dlo-panel" id="dlo-panel-c3">
    <div class="dlo-panel-header" onclick="dloTogglePanel('dlo-panel-c3')">
      <div class="dlo-panel-accent purple"></div>
      <div class="dlo-panel-header-text">
        <div class="dlo-panel-course-num">Course 3</div>
        <div class="dlo-panel-course-title">Structuring Machine Learning Projects</div>
      </div>
      <div class="dlo-panel-toggle">▾</div>
    </div>
    <div class="dlo-panel-body">
      <div class="dlo-panel-grid">
        <div>
          <div class="dlo-panel-section-title">Week by week</div>
          <ul class="dlo-weeks-list">
            <li>
              <span class="dlo-week-tag" style="background:var(--dlo-purple-light);color:var(--dlo-purple)">Wk 1</span>
              ML strategy — orthogonalization, evaluation metrics, train/dev/test distributions, human-level performance, avoidable bias
            </li>
            <li>
              <span class="dlo-week-tag" style="background:var(--dlo-purple-light);color:var(--dlo-purple)">Wk 2</span>
              Strategy II — error analysis, mismatched distributions, transfer learning, multi-task learning, end-to-end deep learning
            </li>
          </ul>
        </div>
        <div>
          <div class="dlo-panel-section-title">Big idea</div>
          <p class="dlo-big-idea">"Knowing how to build a model is not enough — you need a systematic framework for diagnosing what's wrong and deciding what to fix next. Strategy is what turns iteration into progress."</p>
          <div class="dlo-panel-section-title">Key concepts</div>
          <div class="dlo-chips">
            <span class="dlo-chip purple">Orthogonalization</span>
            <span class="dlo-chip purple">Avoidable bias</span>
            <span class="dlo-chip purple">Error analysis</span>
            <span class="dlo-chip purple">Transfer learning</span>
            <span class="dlo-chip purple">Multi-task learning</span>
            <span class="dlo-chip purple">End-to-end DL</span>
          </div>
          <div class="dlo-panel-links">
            <a class="dlo-panel-link primary purple" href="/2026/05/12/structuring-machine-learning-projects-coursera/">Blog post</a>
            <a class="dlo-panel-link secondary" href="https://yanqihuang.notion.site/Week-1-Introduction-to-ML-Strategy-Complete-Guide-35a53115b8b88018964ddbd90b92ec26?source=copy_link" target="_blank">Week 1 Notion</a>
            <a class="dlo-panel-link secondary" href="https://yanqihuang.notion.site/week2-ML-Strategy-II-Complete-Guide-35d53115b8b881778572c364b7711ceb?source=copy_link" target="_blank">Week 2 Notion</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<p class="dlo-section-label">What's next</p>
<div class="dlo-preview-section">
  <div class="dlo-preview-card">
    <div>
      <div class="dlo-preview-badge">Course 4 — Coming up</div>
      <div class="dlo-preview-title">Convolutional Neural Networks</div>
      <p style="font-size:13px;color:var(--dlo-text2);line-height:1.6;margin-bottom:0.5rem">
        Courses 1–3 built the foundation — how networks learn, how to make them work well, and how to make good decisions. Course 4 applies all of that to computer vision: a domain where deep learning has been transformative.
      </p>
      <div class="dlo-preview-topics">
        <span class="dlo-preview-topic">ConvNets</span>
        <span class="dlo-preview-topic">Pooling</span>
        <span class="dlo-preview-topic">ResNets</span>
        <span class="dlo-preview-topic">Inception</span>
        <span class="dlo-preview-topic">Object detection</span>
        <span class="dlo-preview-topic">YOLO</span>
        <span class="dlo-preview-topic">Face recognition</span>
        <span class="dlo-preview-topic">Neural style transfer</span>
      </div>
    </div>
    <div class="dlo-preview-status">
      <div class="dlo-preview-status-ring">C4</div>
      <div class="dlo-preview-status-label">Up next</div>
    </div>
  </div>
</div>

</div>

<script>
function dloTogglePanel(id) {
  var panel = document.getElementById(id);
  panel.classList.toggle('open');
}
</script>
