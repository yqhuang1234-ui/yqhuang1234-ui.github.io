---
title: "Coursera Course 1 - Neural Networks and Deep Learning"
date: 2026-04-14 12:00:00
tags:
  - deep-learning
  - learning-notes
  - blog
categories:
  - Coursera Deep Learning Specialization
index_img: /img/posts/coursera-deep-learning-1.svg
excerpt: >
  Notes from Course 1 of Andrew Ng's Deep Learning Specialization on Coursera — covering neural network programming basics, shallow networks, and deep network architecture across weeks 2–4.
---

I've been working through Andrew Ng's [Deep Learning Specialization on Coursera](https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning), and this first course does a surprisingly good job of building intuition before throwing equations at you. These are my notes for weeks 2 through 4 — the parts that actually get into building and training networks. I wrote them up in Notion as I went, so they're more of a living reference than a polished summary. Hopefully useful if you're going through the same material.

---

## Week 2 — Basics of Neural Network Programming

Week 2 is where things start clicking. It introduces logistic regression as a single neuron, then builds up the full computation graph with a forward pass and backpropagation. The key insight here is learning to think in vectorized operations instead of explicit loops — something that pays off immediately once you start writing real code.

📖 **[Full notes on Notion →](https://yanqihuang.notion.site/Week-2-Basics-of-Neural-Network-Programming-Complete-Guide-32853115b8b8812cb7e3fe9e2f0136ed)**

<div class="nb-card">
  <div class="nb-card-header">
    <span class="nb-label">Code · Week 2</span>
    <span class="nb-filename">Logistic_Regression_with_a_Neural_Network_mindset.html</span>
  </div>
  <p class="nb-desc">Builds a logistic regression classifier with a neural network mindset — implementing forward and backward propagation from scratch to recognize cat images.</p>
  <div class="nb-actions">
    <a class="nb-btn nb-btn-view" href="/files/course1/week 2 Logistic_Regression_with_a_Neural_Network_mindset.html" target="_blank">View in browser</a>
  </div>
</div>

---

## Week 3 — Shallow Neural Networks

Week 3 extends the single-neuron picture into a two-layer network. You work through how activation functions like tanh and ReLU change the gradient flow, why a hidden layer actually matters, and how to derive and implement the backprop equations by hand. It's one of those weeks where doing the math yourself — rather than just reading it — makes a real difference.

📖 **[Full notes on Notion →](https://www.notion.so/yanqihuang/Week-3-Shallow-Neural-Networks-Complete-Guide-32d53115b8b880dea091df09e8db5ebb)**

<div class="nb-card">
  <div class="nb-card-header">
    <span class="nb-label">Code · Week 3</span>
    <span class="nb-filename">Planar_data_classification_with_one_hidden_layer.html</span>
  </div>
  <p class="nb-desc">Implements a two-layer neural network to classify non-linearly separable planar data — demonstrating how a hidden layer learns features that logistic regression cannot.</p>
  <div class="nb-actions">
    <a class="nb-btn nb-btn-view" href="/files/course1/week 3 Planar_data_classification_with_one_hidden_layer.html" target="_blank">View in browser</a>
  </div>
</div>

---

## Week 4 — Deep Neural Networks

Week 4 generalizes everything to an L-layer network. The notation gets a bit heavy, but the underlying ideas follow the same pattern — forward pass, compute cost, backward pass, update weights. There's also a good section on why depth matters in practice and how to think about what each layer is learning.

📖 **[Full notes on Notion →](https://www.notion.so/yanqihuang/Week-4-deep-neural-networks-33d53115b8b880ad9434ffee80234d4c)**

<div class="nb-card">
  <div class="nb-card-header">
    <span class="nb-label">Code · Week 4</span>
    <span class="nb-filename">Building_your_Deep_Neural_Network_Step_by_Step.html</span>
  </div>
  <p class="nb-desc">Builds an L-layer deep neural network step by step — implementing initialization, linear forward/backward, and parameter updates for a full deep network from scratch.</p>
  <div class="nb-actions">
    <a class="nb-btn nb-btn-view" href="/files/course1/week 4 Building_your_Deep_Neural_Network_Step_by_Step.html" target="_blank">View in browser</a>
  </div>
</div>

<style>
.nb-card {
  border: 1px solid #E8E2D9;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: #FAFAF8;
  margin: 1rem 0 1.5rem;
}
.nb-card-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}
.nb-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #CC785C;
  white-space: nowrap;
}
.nb-filename {
  font-size: 0.8rem;
  font-family: monospace;
  color: #555;
}
.nb-desc {
  font-size: 0.875rem;
  color: #4A4A4A;
  line-height: 1.6;
  margin: 0 0 0.9rem;
}
.nb-actions {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.nb-btn {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.nb-btn-view {
  background: #CC785C;
  color: #fff;
}
.nb-btn-view:hover {
  background: #b5623e;
  color: #fff;
}
.nb-btn-dl {
  background: #F0EDE8;
  color: #333;
}
.nb-btn-dl:hover {
  background: #E2DDD6;
  color: #333;
}
.cw4-card {
  display: flex;
  border: 1px solid #E8E2D9;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  margin: 1.5rem 0 2rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.cw4-card:hover {
  transform: translateY(-3px);
  border-color: #CC785C;
  box-shadow: 0 8px 24px rgba(204,120,92,0.12);
}
.cw4-thumb {
  width: 220px;
  min-width: 220px;
  overflow: hidden;
  border-right: 1px solid #E8E2D9;
  flex-shrink: 0;
}
.cw4-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.cw4-body {
  padding: 1.1rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
}
.cw4-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #CC785C;
  margin: 0;
}
.cw4-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.35;
}
.cw4-desc {
  font-size: 0.85rem;
  color: #5F5F5F;
  margin: 0;
  line-height: 1.55;
}
.cw4-cta {
  font-size: 0.8rem;
  font-weight: 500;
  color: #CC785C;
  margin: 0.25rem 0 0;
}
@media (max-width: 600px) {
  .cw4-card { flex-direction: column; }
  .cw4-thumb { width: 100%; min-width: unset; height: 140px; border-right: none; border-bottom: 1px solid #E8E2D9; }
}
</style>

<a class="cw4-card" href="/deep-learning/backprop_dnn_complete.html">
  <div class="cw4-thumb">
    <img src="/img/posts/backprop-dnn-complete.svg" alt="Backpropagation — Code & Implementation">
  </div>
  <div class="cw4-body">
    <p class="cw4-label">Interactive Tool · Week 4</p>
    <p class="cw4-title">Backpropagation — Code & Implementation</p>
    <p class="cw4-desc">8-tab interactive reference — every formula, every dimension, every index. Covers notation, cheat sheet, linear/activation backward, L-model backward, and parameter update.</p>
    <p class="cw4-cta">Open →</p>
  </div>
</a>

---

If you want a more visual take on the fundamentals, I also put together an [Interactive Playground — Neural Networks and Deep Learning](https://yqhuang1234-ui.github.io/2026/04/03/neural-networks-deep-learning-notes/) with annotated diagrams and activation function visualizations.

These are personal study notes — written to help me remember, not as a textbook replacement. The Notion pages get updated as I revisit the material, so they should stay reasonably current. If something looks off or unclear, it probably means I'm still figuring it out too.

---

## Certificate

<img src="/img/posts/coursera-certificate.png" alt="Coursera Certificate — Neural Networks and Deep Learning" style="display:block; max-width:560px; width:100%; margin:0 auto; border:1px solid #E8E2D9; border-radius:10px; box-shadow:0 2px 12px rgba(0,0,0,0.08);">
