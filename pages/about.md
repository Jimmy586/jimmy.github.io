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
  <div class="education-section premium-card p-6 mb-8 flex" data-edu="rennes">
    <a href="http://cni.istic.univ-rennes1.fr/" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/cni.png" alt="Université de Rennes Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Université de Rennes</h3>
      <p class="text-gray-500 dark:text-gray-400">MSc Cloud and Network Infrastructures • 2022 • Brittany, France</p>
      <ul class="list-disc list-inside mt-4">
        <li>Specialized in smart city services, big data, distributed systems, advanced cloud infrastructure, and fog computing.</li>
        <li>Grade: Good</li>
      </ul>
    </div>
  </div>

  <!-- EIT Digital -->
  <div class="education-section premium-card p-6 mb-8 flex" data-edu="eit">
    <a href="https://masterschool.eitdigital.eu/" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/eit.png" alt="EIT Digital Master School Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">EIT Digital Master School</h3>
      <p class="text-gray-500 dark:text-gray-400">International Master Student • 2022 • Rennes, France</p>
      <ul class="list-disc list-inside mt-4">
        <li>Double Masters in Cloud Computing from Université de Rennes and Innovation & Entrepreneurship at EIT Digital.</li>
        <li>Coached by renowned European entrepreneurs.</li>
      </ul>
    </div>
  </div>
  <!-- ELTE University -->
  <div class="education-section premium-card p-6 mb-8 flex" data-edu="elte">
  <a href="https://www.elte.hu/en/" target="_blank">
    <img src="{{ site.baseurl }}/assets/img/icons/elte.png" alt="ELTE University Logo" class="icon mr-6">
  </a>
  <div>
    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">ELTE University, Informatics Faculty</h3>
    <p class="text-gray-500 dark:text-gray-400">Summer Class, Erasmus+ (Scholarship) • 2023 • Budapest, Hungary</p>
    <ul class="list-disc list-inside mt-4">
      <li>Showcased V2V Grids project and delivered an engaging pitch.</li>
      <li>Grade: Excellent</li>
      <li>Core Values: Leadership, teamwork, pitching, innovation, technology watch, project management.</li>
    </ul>
  </div>
</div>

  <!-- Cairo University -->
 <div class="education-section premium-card p-6 mb-8 flex" data-edu="cairo univerisity">
    <a href="https://fcai.cu.edu.eg/" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/fcai.png" alt="Cairo University Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Cairo University</h3>
      <p class="text-gray-500 dark:text-gray-400">BSc Computer Science & AI(Scholarship) • 2020 • Cairo, Egypt</p>
      <ul class="list-disc list-inside mt-4">
        <li>Secured a mixed Egyptian and Malagasy Government Scholarship for outstanding grades.</li>
        <li>Grade: Very Good</li>
        <li>Graduation Project : Excellent</li>
      </ul>
    </div>
  </div>

  <!-- Ecole Superieur de Polytechnique Madagascar -->
   <div class="education-section premium-card p-6 mb-8 flex" data-edu="Ecole Superieur Polytech">
    <a href="https://www.polytechnique.mg/" target="_blank">
      <img src="{{ site.baseurl }}/assets/img/icons/espa.png" alt="Ecole Superieur de Polytechnique Madagascar Logo" class="icon mr-6">
    </a>
    <div>
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Ecole Superieur de Polytechnique Madagascar</h3>
      <p class="text-gray-500 dark:text-gray-400">Junior Engineering School, Telecommunications • 2015 • Antsiranana , Madagascar</p>
    </div>
  </div>

  <!-- Saint François Xavier -->
    <div class="education-section premium-card p-6 mb-8 flex" data-edu="sfx">
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
  <div class="project-content glass-panel p-8 rounded-xl hover-lift-subtle transition-all duration-300">
    <p class="dark:text-stone-300 mb-4">
      Jimmy is a visionary <strong class="text-gold">Chief of AI</strong> and <strong class="text-gold">External Professor</strong> at <strong class="text-gradient hover:text-gold">ESSEC Business School</strong>, actively shaping the future of deployed intelligence. As the <strong>Head of AI Projects</strong> at <a href="https://metalab.essec.edu/" class="font-semibold text-gradient hover:text-gold transition-colors">ESSEC Metalab</a>, he leads a team of Ph.D. researchers in developing state-of-the-art <strong>Large Language Models (LLMs) applied to Finance</strong>, while managing and optimizing high-performance AI training infrastructures.
    </p>
    <p class="dark:text-stone-300 mb-4">
      Concurrently serving as the <strong>Chief Technical Officer (CTO)</strong> at <a href="https://www.azplus.mg/" class="font-semibold text-gradient hover:text-gold transition-colors">AZ+</a>, Jimmy architects scalable microservices and leads the deployment of Madagascar's premier SuperApp, integrating <strong>AI Agents</strong> for advanced recommendation systems on Google Cloud Platform (GCP).
    </p>
    <p class="dark:text-stone-300 mb-4">
      His engineering foundation was solidified at <a class="text-gray-500 dark:text-stone-300" href="https://www.serma-safety-security.com/en/" target="_blank">SERMA Safety & Security</a>, where he pioneered <strong>computer vision models</strong> for hardware security and automated reverse engineering using LLMs. Jimmy holds a Master’s in <strong>Cloud Computing</strong> from <em>Université de Rennes</em> and has consistently demonstrated a commitment to <strong>sustainable, energy-efficient AI</strong>, as seen in his impactful research at <strong>IMT Atlantique</strong>.
    </p>
    <p class="dark:text-stone-300">
      From teaching <strong>Data & AI</strong> to international students to leading complex technical teams, Jimmy represents the next generation of AI leadership—bridging the gap between academic research, industrial application, and strategic innovation.
    </p>
  </div>
</section>


<blockquote class="!py-0 !mb-0 dark:text-slate-300">
  "Having zero background in Cybersecurity, I have learned the biggest lesson in life: nothing is out of reach if you sit and take the time to read from the beginning" - Jimmy.
</blockquote>



<h2 class="dark:text-stone-200">My Curriculum Vitae</h2>
<div class="glass-panel p-6 rounded-xl hover-lift-subtle transition-all duration-300 mb-8">
  <p class="mb-4 text-center">
    <a href="{{site.baseurl}}/assets/raw/Machine_LearningEngineer_Mananjara_Jimmy_VATOSOA_V2.08.pdf" class="premium-button inline-block px-6 py-3 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold border border-white/10" target="_blank">
      📄 Download my Resume (v.2.08)
    </a>
  </p>
  <iframe src="{{site.baseurl}}/assets/js/viewer/viewer.html?file={{site.baseurl}}/assets/raw/Machine_LearningEngineer_Mananjara_Jimmy_VATOSOA_V2.08.pdf" width="100%" height="500px" style="border: none; border-radius: 8px;"></iframe>
</div>

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
