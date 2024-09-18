---
layout: page
title: Projects
permalink: projects
---

<div style="text-align: justify">
  <img class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/card.PNG">
  <p class="!py-0 !mb-0 dark:text-slate-300">Let's be in touch to achieve greatness together.</p>
  <p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">Greatness is not achieved overnight, the only way to get there is by providing yourself all manners to hit your best potential.</p>
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
  <div class="experience-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" data-tech="yolo llm ocr python kubernetes fuzzymatching rag devops">
    <div class="flex items-start">
      <a href="https://www.serma-safety-security.com/en/" target="_blank">
        <img src="{{ site.baseurl }}/assets/img/icons/serma.png" alt="SERMA Safety and Security Logo" class="icon w-12 h-12 mr-4">
      </a>
      <div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Machine Learning Engineer</h3>
        <p class="text-gray-500 dark:text-gray-400 text-center">SERMA Safety & Security • Feb. 2024 - Aug. 2024 • Rennes, France</p>
      </div>
    </div>
    
    <ul class="task-list mt-4">
      <li class="task-item">
        <strong class="task-title text-gray-500 dark:text-slate-400 ">PCB Component Recognition</strong> 
        <span class="task-tech">(Technologies: YOLO, OCR, Fuzzy Matching)</span>:
        <ul class="task-details">
          <li>Developed a system to detect PCB components using YOLO and OCR, reducing manual inspection time.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">Reverse Engineering with LLM4Decompile</strong> 
        <span class="task-tech">(Technologies: LLM4Decompile)</span>:
        <ul class="task-details">
          <li>Implemented LLM4Decompile to assist in reverse engineering binary files from detected chips.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">CI/CD Automation</strong> 
        <span class="task-tech">(Technologies: GitLab CI, MLFlow)</span>:
        <ul class="task-details">
          <li>Designed and implemented fully automated CI/CD pipelines using GitLab CI and MLFlow for scalable model deployment.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">Graph RAG & LLM Exploration</strong> 
        <span class="task-tech">(Technologies: GraphRAG, Neo4J, Llama3)</span>:
        <ul class="task-details">
          <li>Developed a POC using GraphRAG to improve document retrieval with self-hosted Llama3 and Neo4J integration.</li>
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

  <!-- AZ+ Madagascar Experience -->
  <div class="experience-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" data-tech="gcp aws devops kubernetes microservices">
    <div class="flex items-start">
      <a href="https://www.azplus.mg/" target="_blank">
        <img src="{{ site.baseurl }}/assets/img/icons/azplus.png" alt="AZ+ Madagascar Logo" class="icon w-12 h-12 mr-4">
      </a>
      <div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Co-Founder</h3>
        <p class="text-gray-500 dark:text-gray-400 text-center">AZ+ Madagascar • Jan. 2024 - Present • Madagascar</p>
      </div>
    </div>

    <ul class="task-list mt-4">
      <li class="task-item">
        <strong class="task-title">SuperApp Development</strong> 
        <span class="task-tech">(Technologies: GCP, AWS, Microservices)</span>:
        <ul class="task-details">
          <li>Led a team of 13 to design and deploy the SuperApp AZ+ in Madagascar, providing e-commerce, food delivery, and ride-hailing services.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">Cloud Migration</strong> 
        <span class="task-tech">(Technologies: GCP, AWS, Kubernetes)</span>:
        <ul class="task-details">
          <li>Migrated infrastructure from Firebase to AWS and GCP for better scalability and reduced costs.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">Self-hosted Services</strong> 
        <span class="task-tech">(Technologies: GitLab, Minio S3, Grafana)</span>:
        <ul class="task-details">
          <li>Self-hosted various services on our own servers, including GitLab, Minio S3, and Grafana, ensuring full control over our infrastructure.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">Technical Innovations for Local Solutions</strong> 
        <span class="task-tech">(Technologies: Custom Location Services)</span>:
        <ul class="task-details">
          <li>Developed innovative technical solutions for non-existent tools in Madagascar, such as precise location tracking for delivery management.</li>
        </ul>
      </li>
    </ul>

    <div class="tech-icons flex justify-center space-x-4 mt-6">
      <img src="{{ site.baseurl }}/assets/img/icons/gcp.png" alt="GCP" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/aws.png" alt="AWS" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/gitlab.png" alt="GitLab" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/minio.png" alt="Minio" class="icon w-10 h-10 hover-motion" loading="lazy">
      <img src="{{ site.baseurl }}/assets/img/icons/grafana.png" alt="Grafana" class="icon w-10 h-10 hover-motion" loading="lazy">
    </div>
  </div>

  <!-- IMT Atlantique Experience -->
  <div class="experience-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" data-tech="etl powerbi pandas python datavisualization">
    <div class="flex items-start">
      <a href="https://www.imt-atlantique.fr/en" target="_blank">
        <img src="{{ site.baseurl }}/assets/img/icons/imt.png" alt="IMT Atlantique Logo" class="icon w-12 h-12 mr-4">
      </a>
      <div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Data Analyst</h3>
        <p class="text-gray-500 dark:text-gray-400 text-center">IMT Atlantique • May 2023 - Sep. 2023 • Rennes, France</p>
      </div>
    </div>

    <ul class="task-list mt-4">
      <li class="task-item">
        <strong class="task-title">Data Acquisition & Processing</strong> 
        <span class="task-tech">(Technologies: ETL, PowerBI, Pandas)</span>:
        <ul class="task-details">
          <li>Acquired and processed data from ANFR to analyze power usage of mobile Base Stations in France since 2015.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">Energy-Saving Strategies</strong> 
        <span class="task-tech">(Technologies: Seaborn, Pandas, Python)</span>:
        <ul class="task-details">
          <li>Proposed 4 strategies to save energy in mobile networks, based on key factors affecting power consumption.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">Real-World Application</strong> 
        <span class="task-tech">(Technologies: PowerBI, Python)</span>:
        <ul class="task-details">
          <li>Applied energy-saving strategies to real traffic load data in Rennes, achieving up to 20% energy savings.</li>
        </ul>
      </li>
    </ul>

    <div class="tech-icons flex justify-center space-x-4 mt-6">
      <img src="{{ site.baseurl }}/assets/img/icons/powerbi.png" alt="PowerBI" class="icon w-10 h-10 hover-motion">
      <img src="{{ site.baseurl }}/assets/img/icons/pandas.png" alt="Pandas" class="icon w-10 h-10 hover-motion">
      <img src="{{ site.baseurl }}/assets/img/icons/seaborn.png" alt="Seaborn" class="icon w-10 h-10 hover-motion">
      <img src="{{ site.baseurl }}/assets/img/icons/python.png" alt="Python" class="icon w-10 h-10 hover-motion">
      <img src="{{ site.baseurl }}/assets/img/icons/gitlab.png" alt="GitLab" class="icon w-10 h-10 hover-motion" loading="lazy">
    </div>
  </div>

  <!-- Videotron Experience -->
  <div class="experience-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" data-tech="sql powerbi excel datavisualization">
    <div class="flex items-start">
      <a href="https://www.videotron.com/en" target="_blank">
        <img src="{{ site.baseurl }}/assets/img/icons/videotron.png" alt="Videotron Logo" class="icon w-12 h-12 mr-4">
      </a>
      <div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Junior Data Analyst</h3>
        <p class="text-gray-500 dark:text-gray-400 text-center">Videotron • Sep. 2020 - Jun. 2022 • Cairo, Egypt</p>
      </div>
    </div>

    <ul class="task-list mt-4">
      <li class="task-item">
        <strong class="task-title">Customer Satisfaction</strong> 
        <span class="task-tech">(Technologies: Excel, SQL)</span>:
        <ul class="task-details">
          <li>Increased customer satisfaction from 80% to 95% by identifying key issues and developing strategies to address them.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">KPI Analysis</strong> 
        <span class="task-tech">(Technologies: PowerBI, SQL)</span>:
        <ul class="task-details">
          <li>Analyzed agent performance and improved KPI achievements, leading to better operational efficiency.</li>
        </ul>
      </li>
      <li class="task-item">
        <strong class="task-title">Process Optimization</strong> 
        <span class="task-tech">(Technologies: PowerBI, Excel, SQL)</span>:
        <ul class="task-details">
          <li>Developed data-driven strategies to streamline processes and optimize resource management across teams.</li>
        </ul>
      </li>
    </ul>

    <div class="tech-icons flex justify-center space-x-4 mt-6">
      <img src="{{ site.baseurl }}/assets/img/icons/sql.png" alt="SQL" class="icon w-10 h-10 hover-motion">
      <img src="{{ site.baseurl }}/assets/img/icons/excel.png" alt="Excel" class="icon w-10 h-10 hover-motion">
      <img src="{{ site.baseurl }}/assets/img/icons/powerbi.png" alt="PowerBI" class="icon w-10 h-10 hover-motion">
    </div>
  </div>
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
