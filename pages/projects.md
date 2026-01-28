---
layout: page
title: Projects
permalink: projects
---

<div style="text-align: justify">
  <img id="clickableImage" class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/card.PNG" alt="Card Image" style="max-width:100%;cursor:pointer;">
  <p class="!py-0 !mb-0 dark:text-slate-300">Transformer Architecture visual of: "Jimmy is a great Machine Learning Engineer"</p>
  <p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">
    Greatness is not achieved overnight; the only way to get there is by providing yourself all manners to hit your best potential.
  </p>
</div>

<!-- Modal Structure -->
<div id="imageModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="modalImage">
</div>

<section id="filters" class="my-8">
  <label for="tech-filter" class="text-gray-700 dark:text-white">Filter by Technology:</label>
  <select id="tech-filter" class="filter-dropdown" onchange="filterProjects()">
    <option value="all">All</option>
    <option value="python">Python</option>
    <option value="devops">DevOps</option>
    <option value="pytorch">Pytorch</option>
    <option value="llm">LLM</option>
    <option value="rag">RAG</option>
    <option value="aws">AWS</option>
    <option value="gcp">GCP</option>
    <option value="yolo">YOLO</option>
    <option value="opencv">OpenCV</option>
    <option value="datavisualization">Dataviz</option>
  </select>
</section>

<section id="experience" class="my-8">
  <div class="timeline-line"></div> <!-- Blue timeline line -->

  {% for exp in site.data.experience %}
    {% include experience-item.html exp=exp %}
  {% endfor %}
</section>
