---
title: "Coursera Course 3 - Structuring Machine Learning Projects"
date: 2026-05-12 12:00:00
tags:
  - deep-learning
  - learning-notes
  - blog
categories:
  - Coursera Deep Learning Specialization
index_img: /img/posts/coursera-deep-learning-3.svg
excerpt: >
  Notes from Course 3 of Andrew Ng's Deep Learning Specialization on Coursera — covering ML strategy, orthogonalization, error analysis, transfer learning, and multi-task learning.
---

I'm working through Course 3 of Andrew Ng's [Deep Learning Specialization on Coursera](https://www.coursera.org/learn/machine-learning-projects). Unlike the previous two courses, this one has no coding assignments — it's entirely focused on the strategic decisions that determine whether a machine learning project succeeds or fails in practice. These are my notes for both weeks.

---

## Week 1 — Introduction to ML Strategy

Week 1 is about developing the intuition to diagnose what's wrong with a model and decide what to fix next. It introduces orthogonalization — the idea of tuning one knob at a time — along with how to set up a single evaluation metric, choose the right train/dev/test distributions, and use human-level performance as a concrete proxy for Bayes error. The avoidable bias concept alone is worth the week.

📖 **[Full notes on Notion →](https://yanqihuang.notion.site/Week-1-Introduction-to-ML-Strategy-Complete-Guide-35a53115b8b88018964ddbd90b92ec26?source=copy_link)**

---

## Week 2 — ML Strategy II

Week 2 goes deeper: error analysis by hand, handling mismatched train and dev/test distributions, and when transfer learning or multi-task learning actually makes sense. The end-to-end deep learning section is a good reality check — it explains why pipeline approaches often outperform end-to-end models when data is limited, and when to flip that logic.

📖 **[Full notes on Notion →](https://yanqihuang.notion.site/week2-ML-Strategy-II-Complete-Guide-35d53115b8b881778572c364b7711ceb?source=copy_link)**

---

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
