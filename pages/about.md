---
layout: page
title: About Me
permalink: about
---

<div style="text-align: justify">

<img class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/nature.jpg">
<p class="!py-0 !mb-0 dark:text-slate-300">I love teaching since I was very young, because for me the best way to learn is to teach.</p>
<p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">A picture of me pitching my project at the EIT Digital Budapest, HUNGARY July 2023.</p>

<h2 class="dark:text-stone-200 mt-32">Summary</h2>
<p class="dark:text-stone-300">
VATOSOA Mananjara Jimmy is a Junior Machine learning Engineer, pursuing his Masters in Cloud Computing at the Rennes University . His main interest focuses in Deep Learning and large scale Systems where he can train and work on his Models on a distributed Machines. He had an opportunity of an internship on Summer 2023 at IMT Atlantique Rennes, where he worked on an ambitious research project to tackle the energy greediness of base stations (BS) in France, <a class="text-gray-500 dark:text-stone-300" href="https://github.com/Jimmy586/Cellular_Base_Stations_Power_Consumption_Analysis" target="_blank">here</a>. During this research journey, he redesigned the Model EARTH to make a more accurate estimation of all Base Stations power consumption, then designed an algorithm to detect the key factor which influences the power consumption, then proposed some strategies to save energy in a seamless way and conducted under the supervision of<a class="text-gray-500 dark:text-stone-300" href="https://www.imt-atlantique.fr/en/person/loutfi-nuaymi" target="_blank">Pr Loutfi NYAUMI</a>  and Christopher MERLHE. From this research, he managed to save up to 20% of energy consumption after applying the data traffic of a BS in Rennes . To extend this project he proposed a Queue learning algorithm by taking into account two features, the User Equipment (UE) and the BS to predict the future traffic and to apply the power saving approaches automatically depends on the load.

<br>
Before this, 2020 to 2022, right after his graduation (BSc in AI) he worked at <a class="text-gray-500 dark:text-stone-300" href="https://videotron.com/" target="_blank">Videotron</a> as IT backoffice Support, specializing in Business Anti-virus and Cloud-based content, and after a year at the company he was promoted as a trainer.
He developped most of his soft skills during this experience, where he had to manage and train +50 agents.
</p>

<h2 class="dark:text-stone-200">Education</h2>
<p class="dark:text-stone-300">
Graduating from Higschool in 2014, in Madagascar, Jimmy managed to get the highest score for the serie C (Mention Tres Bien) and secured a government scolarship in 2015 to advance his study in Egypt, at Cairo University, Faculty of Computer Engineering and AI.
After a long wait, he started his first year of bachelor in September 2016, and successfully completed it in 2022 with an outstanding grade, and a highest honours for the Graduation project (193/200) which was entitled "Car fuel consumption predictor with ANN". 
In 2022, awarded of the French government scholarship, Jimmy pursued his Masters degree in an international curriculum named "Cloud and Network Infrastrure" at the University of Rennes, which is expected to be complete by August 2024   . <br>

Apply for a PhD thesis? , note sure yet :).
</p>

<h2 class="dark:text-stone-200">My Curriculum Vitae</h2>
 <p><a href="{{site.baseurl}}/assets/raw/RESUME.pdf" class="dark:text-stone-300" target="_blank">Download my Resume (v.2023.10)</a></p>
 <iframe
 src="{{site.baseurl}}/assets/js/viewer/viewer.html?file={{site.baseurl}}/assets/raw/RESUME.pdf"
 width="100%"
 height="300px"
 style="border: none;"></iframe>

<h2 class="dark:text-stone-200">Some projects</h2>
<div>
  {% for project in site.projects %}
    <div>
  <h4><a class="!mb-0" href="{{ project.link }}" class="dark:text-stone-300" target="_blank">{{ project.title }}</a></h4>
  <p class="text-md text-stone-500 dark:text-stone-300 !mt-0">{{ project.description }}</p>
    </div>
  {% endfor %}
</div>

<h2 class="dark:text-stone-200">Some academic projects (Contribution with Henri)</h2>
<div>
  {% for project in site.academics %}
    <div>
  <h4><a class="!mb-0" href="{{ project.link }}" class="dark:text-stone-300" target="_blank">{{ project.title }}</a></h4>
  <p class="text-md text-stone-500 dark:text-stone-300 !mt-0">{{ project.description }}</p>
    </div>
  {% endfor %}
</div>
</div>
