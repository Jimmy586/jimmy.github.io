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

  {% for edu in site.data.education %}
    {% include education-item.html edu=edu %}
  {% endfor %}
</section>


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
