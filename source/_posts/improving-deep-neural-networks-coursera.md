---
title: "Coursera Course 2 - Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization"
date: 2026-04-23 12:00:00
tags:
  - deep-learning
  - learning-notes
  - blog
categories:
  - Coursera Deep Learning Specialization
index_img: /img/posts/coursera-deep-learning-2.svg
excerpt: >
  Notes from Course 2 of Andrew Ng's Deep Learning Specialization on Coursera — covering practical aspects of deep learning including regularization, optimization, and hyperparameter tuning.
---

I'm working through Course 2 of Andrew Ng's [Deep Learning Specialization on Coursera](https://www.coursera.org/learn/deep-neural-network). This course is where things get practical — it's less about building networks and more about making them actually work well. These are my notes as I go through each week.

---

## Week 1 — Practical Aspects of Deep Learning

Week 1 covers the core techniques that separate a working network from a well-tuned one: train/dev/test set splits, bias-variance tradeoff, L2 regularization, dropout, and gradient checking. The regularization section in particular does a good job explaining *why* these methods work, not just *how* to apply them.

📖 **[Full notes on Notion →](https://yanqihuang.notion.site/C2W1-Regularizing-Your-Neural-Network-Complete-Guide-34653115b8b881fab896d19eb7e306dd?source=copy_link)**

<div class="nb-card">
  <div class="nb-card-header">
    <span class="nb-label">Code · Week 1.1</span>
    <span class="nb-filename">Initialization.html</span>
  </div>
  <p class="nb-desc">Explores zero, random, and He initialization — and why initialization choice affects convergence speed and symmetry breaking.</p>
  <div class="nb-actions">
    <a class="nb-btn nb-btn-view" href="/files/course2_week1_code/week 1.1 Initialization.html" target="_blank">View in browser</a>
  </div>
</div>

<div class="nb-card">
  <div class="nb-card-header">
    <span class="nb-label">Code · Week 1.2</span>
    <span class="nb-filename">Regularization.html</span>
  </div>
  <p class="nb-desc">Implements L2 regularization and dropout, comparing their effects on overfitting and decision boundaries.</p>
  <div class="nb-actions">
    <a class="nb-btn nb-btn-view" href="/files/course2_week1_code/week 1.2 Regularization.html" target="_blank">View in browser</a>
  </div>
</div>

<div class="nb-card">
  <div class="nb-card-header">
    <span class="nb-label">Code · Week 1.3</span>
    <span class="nb-filename">Gradient_Checking.html</span>
  </div>
  <p class="nb-desc">Implements gradient checking to verify backpropagation correctness by comparing analytical and numerical gradients.</p>
  <div class="nb-actions">
    <a class="nb-btn nb-btn-view" href="/files/course2_week1_code/week 1.3 Gradient_Checking.html" target="_blank">View in browser</a>
  </div>
</div>

---

## Week 2 — Optimization Algorithms

Week 2 focuses on the algorithms that make training faster and more reliable: mini-batch gradient descent, momentum, RMSprop, and Adam. Understanding these methods is key to getting networks to converge quickly in practice rather than waiting hours for vanilla gradient descent to creep toward a solution.

📖 **[Full notes on Notion →](https://www.notion.so/yanqihuang/Week-2-Optimization-Algorithms-Complete-Guide-35853115b8b880a3b46ad5003d1b8e7e?source=copy_link)**

<div class="nb-card">
  <div class="nb-card-header">
    <span class="nb-label">Code · Week 2</span>
    <span class="nb-filename">Optimization_methods.html</span>
  </div>
  <p class="nb-desc">Implements mini-batch gradient descent, momentum, RMSprop, and Adam — comparing convergence behavior on a real classification task.</p>
  <div class="nb-actions">
    <a class="nb-btn nb-btn-view" href="/files/course2/week 2 Optimization_methods.html" target="_blank">View in browser</a>
  </div>
</div>

---

## Week 3 — Hyperparameter Tuning, Batch Normalization & Frameworks

Week 3 ties the course together: systematic hyperparameter search strategies, batch normalization (what it does and why it helps), and a practical introduction to TensorFlow. The TensorFlow section moves fast but gives enough to start building real models without writing everything from scratch.

📖 **[Full notes on Notion →](https://www.notion.so/yanqihuang/Week-3-Hyperparameter-Tuning-Batch-Normalization-Frameworks-Complete-Guide-35953115b8b880558da1f226ead40cd7?source=copy_link)**

<div class="nb-card">
  <div class="nb-card-header">
    <span class="nb-label">Code · Week 3</span>
    <span class="nb-filename">Tensorflow_introduction.html</span>
  </div>
  <p class="nb-desc">Hands-on introduction to TensorFlow — building and training a neural network using the framework's core APIs.</p>
  <div class="nb-actions">
    <a class="nb-btn nb-btn-view" href="/files/course2/week 3 Tensorflow_introduction.html" target="_blank">View in browser</a>
  </div>
</div>

---

---

## Certificate

<img src="/img/posts/coursera-certificate-2.png" alt="Coursera Certificate — Improving Deep Neural Networks" style="display:block; max-width:560px; width:100%; margin:0 auto; border:1px solid #E8E2D9; border-radius:10px; box-shadow:0 2px 12px rgba(0,0,0,0.08);">

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
</style>
