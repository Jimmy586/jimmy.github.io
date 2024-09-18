---
layout: page
title: About Me
permalink: about
---

<div style="text-align: justify">

<img class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/nature.jpg">
<p class="!py-0 !mb-0 dark:text-slate-300">I have loved sharing knowledge from a very young age because, for me, the best way to learn is by teaching.</p>
<p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">A picture of me pitching my project at the ELTE Informatikai Kai, University Budapest, HUNGARY July 2023.</p>

<section id="filters" class="my-8">
  <!-- Education-Specific Filters -->
  <label for="edu-filter" class="text-gray-700 dark:text-white">Filter by Institution:</label>
  <select id="edu-filter" class="filter-dropdown" onchange="filterEducation()">
    <option value="all">All</option>
    <option value="rennes">Université de Rennes</option>
    <option value="eit">EIT Digital</option>
    <option value="elte">ELTE University</option>
    <option value="cairo">Cairo University</option>
    <option value="polytech">Ecole Superieur de Politechnique Madagascar</option>
    <option value="sfx">Saint François Xavier</option>
  </select>
</section>

<section id="education" class="my-8">
  <div class="timeline-line"></div> <!-- Blue timeline line -->

  <!-- Université de Rennes -->
  <div class="education-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex" data-edu="rennes">
    <a href="http://cni.istic.univ-rennes1.fr/" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/cni.png" alt="Université de Rennes Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Université de Rennes</h3>
      <p class="text-gray-500 dark:text-gray-400">Master's degree, Cloud and Network Infrastructures • Sept. 2022 - Aug. 2024 •</p>
      <p class="text-gray-500 dark:text-gray-400">Brittany, France</p>
      <ul class="list-disc list-inside mt-4">
        <li>Specialized in smart city services, big data, distributed systems, advanced cloud infrastructure, and fog computing.</li>
        <li>Grade: Good</li>
      </ul>
    </div>
  </div>

  <!-- EIT Digital -->
  <div class="education-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex" data-edu="eit">
    <a href="https://masterschool.eitdigital.eu/" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/eit.png" alt="EIT Digital Master School Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">EIT Digital Master School</h3>
      <p class="text-gray-500 dark:text-gray-400">International Master's Student • Sept. 2022 - July 2024 •</p>
      <p class="text-gray-500 dark:text-gray-400">Brittany, France</p>
      <ul class="list-disc list-inside mt-4">
        <li>Double Masters in Cloud Computing from Université de Rennes and Innovation & Entrepreneurship at EIT Digital.</li>
        <li>Coached by renowned European entrepreneurs.</li>
      </ul>
    </div>
  </div>
  <!-- ELTE University -->
  <div class="education-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex" data-edu="elte">
  <a href="https://www.elte.hu/en/" target="_blank">
    <img src="{{ site.baseurl }}/assets/img/icons/elte.png" alt="ELTE University Logo" class="icon mr-6">
  </a>
  <div>
    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">ELTE University, Informatics Faculty</h3>
    <p class="text-gray-500 dark:text-gray-400">Summer Class, Erasmus+ (Scholarship) • Jun. 2023 - July 2023 • Budapest, Hungary</p>
    <ul class="list-disc list-inside mt-4">
      <li>Showcased V2V Grids project and delivered an engaging pitch.</li>
      <li>Grade: Excellent</li>
      <li>Core Values: Leadership, teamwork, pitching, innovation, technology watch, project management.</li>
    </ul>
  </div>
</div>

  <!-- Cairo University -->
 <div class="education-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex" data-edu="cairo univerisity">
    <a href="https://fcai.cu.edu.eg/" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/fcai.png" alt="Cairo University Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Cairo University</h3>
      <p class="text-gray-500 dark:text-gray-400">BSc in Computer Science & AI • Sept. 2016 - Aug. 2020 • Cairo, Egypt</p>
      <p class="text-gray-500 dark:text-gray-400">Cairo, Egypt</p>
      <ul class="list-disc list-inside mt-4">
        <li>Secured a mixed Egyptian and Malagasy Government Scholarship for outstanding grades.</li>
        <li>Grade: Very Good</li>
        <li>Graduation Project : Excellent</li>
      </ul>
    </div>
  </div>

  <!-- Ecole Superieur de Polytechnique Madagascar -->
   <div class="education-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex" data-edu="Ecole Superieur Polytech">
    <a href="https://www.polytechnique.mg/" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/espa.png" alt="Ecole Superieur de Polytechnique Madagascar Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Ecole Superieur de Polytechnique Madagascar</h3>
      <p class="text-gray-500 dark:text-gray-400">Junior Bachelor of Engineering, Telecommunications • 2015 - 2016 •</p>
      <p class="text-gray-500 dark:text-gray-400">Antsiranana ,Madagascar</p>
    </div>
  </div>

  <!-- Saint François Xavier -->
    <div class="education-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex" data-edu="sfx">
    <a href="https://vatosoamananjara-jimmy.com/about" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/sfx.png" alt="Saint François Xavier Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Saint François Xavier</h3>
      <p class="text-gray-500 dark:text-gray-400">Baccalauréat, Serie C• Sept. 2011 - Aug. 2014 •</p>
      <p class="text-gray-500 dark:text-gray-400">Fianarantsoa, Madagascar</p>
      <ul class="list-disc list-inside mt-4">
        <li> Top 1 </li>
        <li> Mention : très Bien </li>
        <li>Malagasy Government Scholarship for outstanding grades.</li>
      </ul>
    </div>
  </div>

</section>

<script>
  function filterEducation() {
    const selectedEdu = document.getElementById("edu-filter").value;
    const educationSections = document.querySelectorAll(".education-section");

    educationSections.forEach(section => {
      const eduTag = section.getAttribute("data-edu");

      if (selectedEdu === "all" || eduTag === selectedEdu) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
</script>

<style>
  .icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-right: 1.5rem; /* Adjust spacing between logo and content */
  }

  .education-section {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
    background-color: white;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  ul {
    margin-top: 1rem;
  }

  .list-disc {
    list-style-type: disc;
  }

  .list-inside {
    padding-left: 1.5rem;
  }
</style>


<section id="major-projects">
  <h2 class="dark:text-stone-200 mt-32">Personal and Professional Journey</h2>
  <div class="project-content">
    <p class="dark:text-stone-300">
      Jimmy's journey into the world of Machine Learning and Scalable Systems is inspiring. With a Master's degree from Rennes University, he has honed his skills in cloud computing and large-scale systems, with a minor in Innovation and Entrepreneurship. His passion for Deep Learning and large-scale systems is evident in his work, utilizing distributed machines to develop and refine models.
    </p>
    <p class="dark:text-stone-300">
      Interning at IMT Atlantique Rennes in the summer of 2023 was pivotal, allowing him to contribute to a research project aimed at reducing the energy consumption of 4G and 5G base stations in France using Machine Learning. This project showcases his technical expertise and commitment to creating sustainable solutions. The project is available <a class="text-gray-500 dark:text-stone-300" href="https://github.com/Jimmy586/Cellular_Base_Stations_Power_Consumption_Analysis" target="_blank">here</a>. Supervised by <a class="text-gray-500 dark:text-stone-300" href="https://www.imt-atlantique.fr/en/person/loutfi-nuaymi" target="_blank">Pr Loutfi NYAUMI</a> and Christopher MERLHE, he redesigned the EARTH model, making a more accurate estimation of base stations' power consumption, detecting key factors influencing it, and proposing strategies to save energy seamlessly. The project saved up to 20% of energy consumption for a base station in Rennes.
    </p>
    <p class="dark:text-stone-300">
      His internship at <a class="text-gray-500 dark:text-stone-300" href="https://www.serma-safety-security.com/en/" target="_blank">Serma Safety and Security</a> from February to August 2024 involved developing a Computer Vision Model to detect PCB components through their unique shapes and identifiers, reducing time spent by cybersecurity engineers on hardware assessments. Additionally, he worked on neural-based decompilers using Graph Neural Networks (GNN) to convert assembly language files into high-level C code, a crucial process for reverse engineering tasks. This work was based on the Meta-published paper "<a class="text-gray-500 dark:text-stone-300" href="https://ai.meta.com/blog/introducing-n-bref-a-neural-based-decompiler-framework/" target="_blank">N-Bref</a>". He used Python libraries such as Yolov10, OpenCV, PyTorch, Keras, TensorFlow, and Pandas, solidifying his expertise in these tools.
    </p>
  </div>
</section>

<blockquote class="!py-0 !mb-0 dark:text-slate-300">
  "Having zero background in Cybersecurity, I have learned the biggest lesson in life: nothing is out of reach if you sit and take the time to read from the beginning" - Jimmy.
</blockquote>



<h2 class="dark:text-stone-200">My Curriculum Vitae</h2>
<p><a href="{{site.baseurl}}/assets/raw/RESUME.pdf" class="dark:text-stone-300" target="_blank">Download my Resume (v.2024.07)</a></p>
<iframe src="{{site.baseurl}}/assets/js/viewer/viewer.html?file={{site.baseurl}}/assets/raw/RESUME.pdf" width="100%" height="300px" style="border: none;"></iframe>

<h2 class="dark:text-stone-200">Some Projects</h2>
<div>
  {% for project in site.projects %}
    <div>
      <h4><a class="!mb-0" href="{{ project.link }}" class="dark:text-stone-300" target="_blank">{{ project.title }}</a></h4>
      <p class="text-md text-stone-500 dark:text-stone-300 !mt-0">{{ project.description }}</p>
    </div>
  {% endfor %}
</div>

<h2 class="dark:text-stone-200">Some Academic Projects (Contribution with Henri)</h2>
<div>
  {% for project in site.academics %}
    <div>
      <h4><a class="!mb-0" href="{{ project.link }}" class="dark:text-stone-300" target="_blank">{{ project.title }}</a></h4>
      <p class="text-md text-stone-500 dark:text-stone-300 !mt-0">{{ project.description }}</p>
    </div>
  {% endfor %}
</div>

</div>
