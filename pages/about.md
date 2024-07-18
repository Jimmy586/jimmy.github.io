---
layout: page
title: About Me
permalink: about
---

<div style="text-align: justify">

<img class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/nature.jpg">
<p class="!py-0 !mb-0 dark:text-slate-300">I have loved sharing knowledge from a very young age because, for me, the best way to learn is by teaching.</p>
<p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">A picture of me pitching my project at the ELTE Informatikai Kai, University Budapest, HUNGARY July 2023.</p>

<section id="major-projects">
  <h2 class="dark:text-stone-200 mt-32">Major Projects and Professional Journey</h2>
  <div class="project-content">
    <p class="dark:text-stone-300">
      VATOSOA Mananjara Jimmy's journey into the world of Machine Learning and Scalable Systems is inspiring. With a Master's degree from Rennes University, he has honed his skills in cloud computing and large-scale systems, with a minor in Innovation and Entrepreneurship. His passion for Deep Learning and large-scale systems is evident in his work, utilizing distributed machines to develop and refine models.
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

<section id="education">
  <h2 class="dark:text-stone-200">Education</h2>
  <div class="education-content">
    <p class="dark:text-stone-300">
      <strong>Jimmy's academic journey</strong> began with his graduation from high school in Madagascar, achieving the <strong>highest score in the country</strong> for his branch, "Série C" in <strong>2018</strong>. This exceptional accomplishment earned him a <strong>government scholarship</strong> to further his education.
    </p>
    <p class="dark:text-stone-300">
      Pursuing higher education, he attended <strong>Cairo University's Faculty of Computer Science and AI</strong>, where he excelled and obtained his bachelor's degree with the <strong>highest honors</strong> in <strong>2022</strong>. His graduation project, a <em>"Neural-based Car Fuel Consumption Predictor"</em>, was a testament to his innovative research skills.
    </p>
    <p class="dark:text-stone-300">
      With a <strong>French government scholarship</strong>, Jimmy continued his studies at the <strong>University of Rennes</strong>, completing his Master's degree in <em>"Cloud and Large-scale System"</em> in <strong>2024</strong>. This program, <strong>100% taught in English</strong>, further highlighted his commitment to international academic success.
    </p>
  </div>
</section>

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
