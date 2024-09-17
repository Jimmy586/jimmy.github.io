---
layout: page
title: Projects
permalink: projects
---

<div style="text-align: justify">
  <img class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/card.PNG">
  <p class="!py-0 !mb-0 dark:text-slate-300">Let's be in touch to achieve greatness together.</p>
  <p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">Greatness is not achieved overnight, the only way to get there is by providing yourself all manners to hit your best potential.</p>
    <section id="experience" class="my-8">
  <div class="timeline-line"></div> <!-- Blue timeline line -->

  <!-- SERMA Safety and Security Experience -->
  <div class="experience-section">
    <div class="timeline-dot"></div> <!-- Blue timeline dot -->
    <div class="flex items-start">
      <img src="{{ site.baseurl }}/assets/img/icons/serma-icon.svg" alt="SERMA Logo" class="icon">
      <div>
        <h3>SERMA Safety and Security</h3>
        <p class="text-sm text-gray-500">Machine Learning Engineer Intern (Feb. 2024 - Aug. 2024) • Rennes, France</p>
      </div>
    </div>
    <ul class="list-disc list-inside">
      <li>Developed a Printed Circuit Board component recognizer using YOLO, OCR, and Fuzzy Matching, reducing component misidentification by 35%.</li>
      <li>Designed and implemented fully automated CI/CD pipelines with GitLab CI and MLFlow.</li>
      <li>Reduced overall time spent by hardware pentesters on security assessments by 25%.</li>
      <li>Developed a POC on the usage of Graph RAG with local documents and Self-host Llama3 and Neo4J.</li>
    </ul>
    <p class="tech-stack">Tech Stack: Yolo, OpenCV, OCR, RAG/GraphRAG, LLM, Pytorch, Kubernetes, Docker, Ansible, Python, GitLab.</p>
  </div>

  <!-- IMT Atlantique Experience -->
  <div class="experience-section">
    <div class="timeline-dot"></div> <!-- Blue timeline dot -->
    <div class="flex items-start">
      <img src="{{ site.baseurl }}/assets/img/icons/imt-icon.svg" alt="IMT Atlantique Logo" class="icon">
      <div>
        <h3>IMT Atlantique</h3>
        <p class="text-sm text-gray-500">Data Analyst Intern (May 2023 - Sep. 2023) • Rennes, France</p>
      </div>
    </div>
    <ul class="list-disc list-inside">
      <li>Identified key factors affecting energy consumption in Cellular Networking, addressing them with targeted strategies.</li>
      <li>Automated data cleaning techniques, reducing data processing time by over 90%.</li>
      <li>Collaborated with network engineers to implement energy-saving strategies, achieving up to 20% energy savings.</li>
      <li>Applied these strategies to real traffic load data in Rennes.</li>
    </ul>
    <p class="tech-stack">Tech Stack: 5G, PowerBI, Pandas, Python, GitLab, Matplotlib, scikit-learn.</p>
  </div>

  <!-- Personal Projects Experience -->
  <div class="experience-section">
    <div class="timeline-dot"></div> <!-- Blue timeline dot -->
    <div class="flex items-start">
      <img src="{{ site.baseurl }}/assets/img/icons/project-icon.svg" alt="Project Icon" class="icon">
      <div>
        <h3>Personal Projects</h3>
        <p class="text-sm text-gray-500">System Architecture and School Projects (2022 - Present) • Rennes, France</p>
      </div>
    </div>
    <ul class="list-disc list-inside">
      <li><strong>SuperApp (azplus.mg):</strong> Led a team of 13 to design and deploy a SuperApp, migrating infrastructure to GCP/Microservices.</li>
      <li><strong>Euro Coin Recognizer:</strong> Developed a mobile app using YOLO and OpenCV to recognize Euro coins.</li>
      <li><strong>Cloud-based Noise Processing:</strong> Worked on predicting queue lengths and developing home assistant tools using Raspberry Pi and cloud technologies.</li>
    </ul>
    <p class="tech-stack">Tech Stack: GCP, Kubernetes, Minio, ElasticSearch, YOLO, OpenCV, Python, Docker, SQL, Java.</p>
  </div>

  <!-- Videotron Inc. Experience -->
  <div class="experience-section">
    <div class="timeline-dot"></div> <!-- Blue timeline dot -->
    <div class="flex items-start">
      <img src="{{ site.baseurl }}/assets/img/icons/videotron-icon.svg" alt="Videotron Logo" class="icon">
      <div>
        <h3>Videotron Inc.</h3>
        <p class="text-sm text-gray-500">Junior Data Analyst (2020 - 2022) • Cairo, Egypt</p>
      </div>
    </div>
    <ul class="list-disc list-inside">
      <li>Developed data-driven strategies, increasing customer satisfaction from 80% to 95% in one year.</li>
      <li>Conducted agent performance analysis, improving KPI achievements by 20%.</li>
      <li>Utilized SQL, Excel, and PowerBI to analyze call data and provide actionable insights for decision-making.</li>
    </ul>
  </div>
</section>


</div>

/* Experience Section Styling */
.experience-section {
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  position: relative;
}

.experience-section h3 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
}

.experience-section p {
  color: #4b5563;
}

.experience-section ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #4b5563;
}

.experience-section .tech-stack {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 10px;
}

.timeline-dot {
  position: absolute;
  left: -20px;
  top: 10px;
  width: 10px;
  height: 10px;
  background-color: #2563eb;
  border-radius: 50%;
}

.timeline-line {
  position: absolute;
  left: -15px;
  top: 30px;
  bottom: -30px;
  width: 2px;
  background-color: #2563eb;
}

.icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

