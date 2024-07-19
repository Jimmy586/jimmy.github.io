---
layout: page
title: Projects
permalink: projects
---

<div style="text-align: justify">
  <h1 class="dark:text-stone-200">Projects</h1>
  <img class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/card.PNG">
  <p class="!py-0 !mb-0 dark:text-slate-300">My professional card.</p>
  <p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">Greatness is not achieved overnight, the only way to get there is by providing yourself all manners to hit your best potential.</p>
    <section id="projects">
    <div class="project-content">

      <h2 class="dark:text-stone-200">SERMA Safety and Security</h2>
      <p class="dark:text-stone-300">
        <strong>Machine Learning Engineer Intern (Feb. 2024 - Aug. 2024)</strong><br>
        During my internship, I developed a PCB components detector program and reference extraction system using Yolov8, OCR, and Fuzzy Matching. This project involved the following:
        <ul class="list-disc list-inside dark:text-stone-300">
          <li>Creating an end-to-end pipeline for detecting and extracting component references from PCB images.
            <br><em>Added Value:</em> Streamlined the identification process, reducing manual effort and increasing accuracy.</li>
          <li>Training and fine-tuning Yolov8 models for accurate component detection, then Implemented a Sorting Algorithm to sort the detected components for an easy text extraction.
            <br><em>Added Value:</em> Enhanced the reliability of the detection system, leading to fewer errors and improved efficiency.</li>
          <li>Training Fine-tuning EasyOCR to read and extract textual information from PCB components.
            <br><em>Added Value:</em> Automated the text extraction process, saving significant time for engineers.</li>
          <li>Utilizing fuzzy matching algorithms to match extracted text with component references.
            <br><em>Added Value:</em> Improved the precision of component identification, reducing potential mismatches.</li>
          <li>Datasheet retriever using webscraping Scrapy in Python.
            <br><em>Added Value:</em> Implemented a web scrapping program with Scrapy to retrieve the datasheet of the detected component, in order to have its full specification.</li>
        </ul>
        I also customized LLMs and LLM4Decompile models for reverse engineering tasks, which included:
        <ul class="list-disc list-inside dark:text-stone-300">
          <li>Setting up local cluster machines for LLM deployment and customization.
            <br><em>Added Value:</em> Enabled efficient and scalable model deployment : Llama3 and gemma2, accommodating local documents for the company's usage.</li>
          <li>Developing a pipeline for decompiling and analyzing assembly language files Usint LLM4Decompile.
            <br><em>Added Value:</em> Accelerated the reverse engineering process, facilitating quicker insights into complex codebases.</li>
          <li>Testing and optimizing Graph Neural Network (GNN) based decompiler models Nbref form Meta for the company's Use case.
            <br><em>Added Value:</em> Improved decompilation accuracy using DeGPT model , which significantly reduced the time hardware pentesters spent on security assessments.</li>
        </ul>
        Additionally, I built fully automated CI/CD pipelines using Kubernetes and Ansible, with clusterd Machines (spare machines)
        <ul class="list-disc list-inside dark:text-stone-300">
          <li>Implementing CI/CD pipelines with gitlabCI .
            <br><em>Added Value:</em> Enhanced deployment efficiency and consistency for local tests, reducing downtime and operational costs.</li>
        </ul>
        I also deployed LLMs locally with Retrieval-Augmented Generation (RAG), which helped employees chat with local documents to retrieve the most relevant information.
        <ul class="list-disc list-inside dark:text-stone-300">
          <li>Deploying LLMs with RAG.
            <br><em>Added Value:</em> Enabled employees to efficiently access and retrieve relevant information from local documents, enhancing productivity.</li>
        </ul>
        <em>Tech Stack: Yolo, Transformers, OpenCV, OCR, RAG/GraphRAG, LLM, Pytorch, Kubernetes, Docker, Ansible, Python, GitLab.</em>
      </p>

      <h2 class="dark:text-stone-200">IMT Atlantique</h2>
      <p class="dark:text-stone-300">
        <strong>Research Assistant Intern (May 2023 - Sep. 2023)</strong><br>
        At IMT Atlantique, I focused on developing energy-saving strategies for mobile networks, improving the EARTH model. Key aspects of this project included:
        <ul class="list-disc list-inside dark:text-stone-300">
          <li>Analyzing data from ANFR to identify key factors influencing energy consumption in 4G and 5G base stations.
            <br><em>Added Value:</em> Identified critical factors, leading to targeted energy-saving strategies and reduced operational costs.</li>
          <li>Developing queue learning algorithms to predict future traffic loads and adapt energy consumption accordingly.
            <br><em>Added Value:</em> Enhanced the predictive capabilities of the network, enabling proactive energy management.</li>
          <li>Implementing ETL processes using PowerBI to prepare and visualize data for analysis.
            <br><em>Added Value:</em> Improved data accessibility and insight generation, supporting informed decision-making.</li>
          <li>Applying the developed strategies to real traffic load data in Rennes, achieving up to 20% energy savings.
            <br><em>Added Value:</em> Demonstrated substantial energy cost reductions, contributing to sustainability goals.</li>
        </ul>
        <em>Tech Stack: 5G, PowerBI, Pandas, Python, GitLab, Matplotlib, scikit-learn.</em>
      </p>

      <h2 class="dark:text-stone-200">Personal Projects</h2>
      <p class="dark:text-stone-300">
        <strong>System Architecture and Machine Learning Projects(2022 - Present)</strong><br>
        I have worked on several personal and school projects, including:
        <ul class="list-disc list-inside dark:text-stone-300">
          <li><strong> My brother's startup https://azplus.mg:</strong> Designed and deployed a SuperApp for Madagascar, transitioning its infrastructure to Google Cloud Platform (GCP) and adopting a microservices architecture. This involved:
            <ul class="list-disc list-inside dark:text-stone-300">
              <li>Setting up Kubernetes clusters for scalable microservices deployment.
                <br><em>Added Value:</em> Enhanced app scalability and reliability, ensuring a seamless user experience during high demand.</li>
              <li>Implementing CI/CD pipelines for continuous integration and delivery.
                <br><em>Added Value:</em> Streamlined the development process, reducing deployment times and minimizing errors.</li>
              <li>Using Minio for object storage and ElasticSearch for efficient search functionality.
                <br><em>Added Value:</em> Improved data storage and retrieval efficiency, enhancing app performance.</li>
            </ul>
          </li>
          <li><strong>Euro Coin Recognizer:</strong> Developed a mobile application using computer vision techniques to recognize and classify Euro coins. This project included:
            <ul class="list-disc list-inside dark:text-stone-300">
              <li>Training a YOLO model for detecting and recognizing different Euro coins.
                <br><em>Added Value:</em> Provided an accurate and efficient tool for coin recognition, simplifying user tasks.</li>
              <li>Implementing the app for real-time coin recognition on mobile devices.
                <br><em>Added Value:</em> Offered a convenient mobile solution for my girlfriend on her Euro coin collections.</li>
            </ul>
          </li>
          <li><strong>Cloud-based Noise Processing:</strong> Worked on a project to predict queue lengths and perform home assistant using Raspberry Pi and cloud technologies. This involved:
            <ul class="list-disc list-inside dark:text-stone-300">
              <li>Deploying noise processing algorithms on Raspberry Pi devices to predict queues at the student restaurant.
                <br><em>Added Value:</em> Enabled real-time noise analysis, providing actionable insights for various applications.</li>
              <li>Utilizing cloud services for real-time data processing and storage.
                <br><em>Added Value:</em> Ensured efficient and scalable data processing, supporting high-performance applications.</li>
              <li>Implementing NLP models for speech-to-text conversion.
                <br><em>Added Value:</em> Facilitated accurate and fast speech-to-text conversion, improving user experience.</li>
            </ul>
          </li>
        </ul>
        <em>Tech Stack: GCP, Kubernetes, Minio, ElasticSearch, Yolo, OpenCV, Whisper, Python, Docker, Keras, SQL, Java.</em>
      </p>

    </div>
  </section>
</div>
