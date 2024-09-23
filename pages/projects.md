---
layout: page
title: Projects
permalink: projects
---

<div style="text-align: justify">
  <img class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/card.PNG">
  <p class="!py-0 !mb-0 dark:text-slate-300">Let's be in touch to achieve greatness together.</p>
  <p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">Greatness is not achieved overnight; the only way to get there is by providing yourself all means to reach your full potential.</p>
</div>

<section id="filters" class="my-8">
  <!-- Project-Specific Filters -->
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

  <!-- SERMA Safety & Security Experience -->
  <div class="experience-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" data-tech="yolo opencv llm ocr python kubernetes fuzzymatching rag devops">
    <div class="flex items-start">
      <a href="https://www.serma-safety-security.com/en/" target="_blank">
        <img src="{{ site.baseurl }}/assets/img/icons/serma.png" alt="SERMA Safety and Security Logo" class="icon w-12 h-12 mr-4">
      </a>
      <div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Machine Learning Engineer Intern</h3>
        <p class="text-gray-500 dark:text-slate-400 text-center">SERMA Safety & Security • Feb. 2024 - Aug. 2024 • Rennes, France</p>
      </div>
    </div>
    
    <ul class="task-list mt-4">
      <!-- PCB Component Recognition -->
      <li class="task-item">
        <strong class="task-title">PCB Component Recognition</strong>
        <span class="task-tech text-gray-500 dark:text-slate-400">(YOLO, OCR, Fuzzy Matching, OpenCV)</span>:
        <ul class="task-details text-gray-500 dark:text-slate-400">
          <li>Developed a system to recognize Printed Circuit Board (PCB) components using YOLO (object detection), OCR, and Fuzzy Matching techniques, reducing component misidentification by 35%.</li>
        </ul>
      </li>
      
      <!-- Reverse Engineering with LLM4Decompile -->
      <li class="task-item">
        <strong class="task-title">Reverse Engineering with LLM4Decompile</strong>
        <span class="task-tech text-gray-500 dark:text-slate-400">(LLM4Decompile, Assembly Code)</span>:
        <ul class="task-details text-gray-500 dark:text-slate-400">
          <li>Integrated LLM4Decompile to automate the reverse engineering of binary files from detected hardware components, streamlining the process of extracting and analyzing firmware from embedded chips.</li>
        </ul>
      </li>
      
      <!-- CI/CD Automation -->
      <li class="task-item">
        <strong class="task-title">Machine Clustering and CI/CD Automation</strong>
        <span class="task-tech text-gray-500 dark:text-slate-400">(GitLabCI, MLFlow, Ansible, Kubernetes)</span>:
        <ul class="task-details text-gray-500 dark:text-slate-400">
          <li>Clustered a set of 5 spare machines with Kubernetes and implemented fully automated CI/CD pipelines using GitLabCI and MLFlow, automating the deployment and monitoring of ML models.</li>
        </ul>
      </li>

      <!-- Graph RAG & LLM Proof of Concept -->
      <li class="task-item">
        <strong class="task-title">Graph RAG & LLM Proof of Concept</strong>
        <span class="task-tech text-gray-500 dark:text-slate-400">(GraphRAG, Neo4J, Llama3)</span>:
        <ul class="task-details text-gray-500 dark:text-slate-400">
          <li>Developed a proof of concept using Graph Retrieval-Augmented Generation (GraphRAG) for enhanced document retrieval and analysis, leveraging self-hosted Llama3 and Neo4J for local document integration.</li>
        </ul>
      </li>
    </ul>

    <div class="tech-icons flex justify-center space-x-4 mt-6">
      <img src="{{ site.baseurl }}/assets/img/icons/yolov8.png" alt="YOLO" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/opencv.png" alt="OpenCV" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/ocr.png" alt="OCR" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/neo4j.png" alt="Neo4J" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/llm.png" alt="LLM" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/pytorch.svg" alt="Pytorch" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/kubernetes.png" alt="Kubernetes" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/gitlab.png" alt="GitLab" class="icon w-10 h-10 hover-motion" loading="lazy">
    </div>
  </div>

  <!-- Additional experiences can be similarly updated and enhanced -->

</section>

<script>
  function filterProjects() {
    const selectedTech = document.getElementById("tech-filter").value;
    const experienceSections = document.querySelectorAll(".experience-section");

    experienceSections.forEach(section => {
      const techStack = section.getAttribute("data-tech");

      if (selectedTech === "all" || techStack.includes(selectedTech.toLowerCase())) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
</script>
