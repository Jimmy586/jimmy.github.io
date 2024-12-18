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
<h2 class="dark:text-stone-200 mt-32">Education Background</h2>
  <!-- Education-Specific Filters -->
  <label for="edu-filter" class="text-gray-700 dark:text-white">Filter by Institution:</label>
  <select id="edu-filter" class="filter-dropdown" onchange="filterEducation()">
    <option value="all">All</option>
    <option value="rennes">Université de Rennes</option>
    <option value="eit">EIT Digital</option>
    <option value="elte">ELTE University</option>
    <option value="cairo univerisity">Cairo University</option>
    <option value="Ecole Superieur Polytech">Ecole Superieur de Polytechnique Madagascar</option>
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
      <p class="text-gray-500 dark:text-gray-400">MSc Cloud and Network Infrastructures • Sept. 2022 - Aug. 2024 • Brittany, France</p>
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
      <p class="text-gray-500 dark:text-gray-400">International Master Student • 09/2022 - 07/2024 • Rennes, France</p>
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
      <p class="text-gray-500 dark:text-gray-400">BSc Computer Science & AI(Scholarship) • Sept. 2016 - Aug. 2020• Cairo, Egypt</p>
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
      <p class="text-gray-500 dark:text-gray-400">Junior Engineering School, Telecommunications • 2015 - 2016 • Antsiranana , Madagascar</p>
    </div>
  </div>

  <!-- Saint François Xavier -->
    <div class="education-section bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex" data-edu="sfx">
    <a href="https://vatosoamananjara-jimmy.com/about" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/sfx.png" alt="Saint François Xavier Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Saint François Xavier</h3>
      <p class="text-gray-500 dark:text-gray-400">Baccalauréat, Serie C • Sept. 2011 - Aug. 2014 • Fianarantsoa , Madagascar</p>
      <ul class="list-disc list-inside mt-4">
        <li> Top 1 </li>
        <li> Mention Très Bien </li>
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
  /* Icon styles for responsiveness */
 /* Icon Styling */
.icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 1.5rem; /* Adjust spacing between logo and content */
}

@media (max-width: 768px) {
  .icon {
    width: 40px; /* Adjust for tablet size */
    height: 40px;
    margin-right: 0; /* Remove side margin for stacked layout */
    margin-bottom: 1rem; /* Add space between icon and text */
  }
}

@media (max-width: 480px) {
  .icon {
    width: 30px; /* Adjust for mobile size */
    height: 30px;
  }
}

/* Education section container */
.education-section {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  background-color: white;
  transition: box-shadow 0.3s ease; /* Smooth hover effect */
}

/* Stack content vertically on smaller screens */
@media (max-width: 768px) {
  .education-section {
    flex-direction: column;
    align-items: center; /* Center content when stacked */
  }
}

@media (max-width: 480px) {
  .education-section {
    padding: 15px; /* Adjust padding for smaller screens */
  }
}

/* Hover Effect */
.education-section:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
}

/* Title and text styling */
h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-color); /* Use consistent color for text */
}

ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.list-inside {
  padding-left: 1.5rem;
}

.location-date {
  font-style: italic;
  color: var(--border-color); /* Lighter color for date and location */
  font-size: 0.85rem;
  margin-bottom: 10px;
}

/* Ensure consistent hover effects */
h3:hover {
  color: #007BFF;
  text-decoration: underline;
}

</style>


<section id="major-projects">
  <h2 class="dark:text-stone-200 mt-32">Personal and Professional Journey</h2>
  <div class="project-content">
    <p class="dark:text-stone-300">
      Jimmy's journey into the world of <strong>Machine Learning</strong> and <strong>Scalable Systems</strong> is a testament to his passion and expertise in the field. Holding a Master’s degree in <strong>Cloud Computing and Large-Scale Systems</strong> from <em>Université de Rennes</em>, with a minor in <strong>Innovation and Entrepreneurship</strong>, he has developed a strong foundation in distributed computing and deep learning. His dedication to pushing the boundaries of scalable systems is evident in his contributions to <strong>energy-efficient machine learning models</strong> and <strong>cutting-edge reverse engineering techniques</strong>.
    </p>
    <p class="dark:text-stone-300">
      During the <strong>IMT Atlantique Rennes internship</strong> in the summer of 2023, Jimmy played a pivotal role in a <strong>research project aimed at reducing the energy consumption of 4G and 5G base stations in France</strong> using machine learning techniques. His involvement included <strong>redesigning the EARTH model</strong>, which enabled more accurate predictions of power consumption and the identification of key influencing factors. His innovative approach led to a remarkable <strong>20% reduction in energy consumption</strong> at a base station in Rennes. This work reflects not only his technical prowess but also his commitment to <strong>sustainable, impactful solutions</strong> for real-world problems. You can explore the project <a class="text-gray-500 dark:text-stone-300" href="https://github.com/Jimmy586/Cellular_Base_Stations_Power_Consumption_Analysis" target="_blank">here</a>, supervised by <a class="text-gray-500 dark:text-stone-300" href="https://www.imt-atlantique.fr/en/person/loutfi-nuaymi" target="_blank">Pr. Loutfi NYAUMI</a> and Christopher Merlhe.
    </p>
    <p class="dark:text-stone-300">
      In 2024, Jimmy completed a six-month internship at <a class="text-gray-500 dark:text-stone-300" href="https://www.serma-safety-security.com/en/" target="_blank">Serma Safety and Security</a>, where he focused on <strong>developing a Computer Vision Model to detect PCB components</strong>. By leveraging <strong>Python libraries like YOLOv10, OpenCV, PyTorch, Keras, TensorFlow</strong>, and <strong>Pandas</strong>, he significantly improved the efficiency of hardware assessments in cybersecurity. His model recognized components by their unique shapes and identifiers, <strong>reducing the time spent by engineers on manual detection tasks</strong>. Additionally, Jimmy contributed to the development of <strong>neural-based decompilers</strong> using <strong>Graph Neural Networks (GNNs)</strong>. Inspired by Meta's <a class="text-gray-500 dark:text-stone-300" href="https://ai.meta.com/blog/introducing-n-bref-a-neural-based-decompiler-framework/" target="_blank">N-Bref</a>, his work on reverse engineering involved converting assembly language files into high-level C code, a critical process for cybersecurity and reverse engineering.
    </p>
    <p class="dark:text-stone-300">
      These experiences, coupled with his academic background and hands-on expertise, solidify Jimmy’s standing as an emerging talent in the field of <strong>Machine Learning and Artificial Intelligence</strong>, with a particular focus on sustainable, scalable solutions and innovative reverse engineering methods.
    </p>
  </div>
</section>


<blockquote class="!py-0 !mb-0 dark:text-slate-300">
  "Having zero background in Cybersecurity, I have learned the biggest lesson in life: nothing is out of reach if you sit and take the time to read from the beginning" - Jimmy.
</blockquote>



<h2 class="dark:text-stone-200">My Curriculum Vitae</h2>
<p><a href="{{site.baseurl}}/assets/raw/Machine_LearningEngineer_Mananjara_Jimmy_VATOSOA_V2.08.pdf" class="dark:text-stone-300" target="_blank">Download my Resume (v.2024.07)</a></p>
<iframe src="{{site.baseurl}}/assets/js/viewer/viewer.html?file={{site.baseurl}}/assets/raw/RESUME.pdf" width="100%" height="300px" style="border: none;"></iframe>

<h2 class="dark:text-stone-200">Some of my Projects</h2>
<div>
  {% for project in site.projects %}
    <div>
      <h4><a class="!mb-0" href="{{ project.link }}" class="dark:text-stone-300" target="_blank">{{ project.title }}</a>
      </h4>
      <p class="text-md text-stone-500 dark:text-stone-300 !mt-0">{{ project.description }}</p>
    </div>
  {% endfor %}
</div>



</div>
