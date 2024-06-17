---
layout: page
title: About Me
permalink: about
---

<div style="text-align: justify">

<img class="mx-auto !mb-0" src="{{site.baseurl}}/assets/img/nature.jpg">
<p class="!py-0 !mb-0 dark:text-slate-300">I love sharing knowledge since a very young age, because for me the best way to learn is to teach.</p>
<p class="text-gray-500 dark:text-slate-400 !py-0 !mt-0 !text-xs">A picture of me pitching my project at the ELTE Informatikai Kai, University Budapest, HUNGARY July 2023.</p>

<h2 class="dark:text-stone-200 mt-32">Summary</h2>
<p class="dark:text-stone-300">
VATOSOA Mananjara Jimmy's journey into the world of Machine Learning and Scalable System is nothing short of inspiring. With a Master's degree from Rennes University, he has honed his skills in cloud computing and Large-scale Systems, with a minor in Innovation and Entrepreneurship, two fields that are at the forefront of technological innovation. His passion for Deep Learning and Large-scale Systems is evident in his work, where he utilizes distributed machines to develop and refine his models. 
The opportunity to intern at IMT Atlantique Rennes in the summer of 2023 was a pivotal moment in his curriculim, allowing him to contribute to a significant research project aimed at reducing the energy consumption of 4G and 5G base stations in France using Machine Learning. This project not only showcases his technical expertise but also his commitment to creating sustainable solutions in the tech industry. Jimmy's dedication to his field is a testament to the impact that emerging technologies can have on our world, and he stands as a promising figure in the realm of Machine Learning engineering. This project is available <a class="text-gray-500 dark:text-stone-300" href="https://github.com/Jimmy586/Cellular_Base_Stations_Power_Consumption_Analysis" target="_blank">here</a>. During this research journey, he redesigned the Model EARTH to make a more accurate estimation of all Base Stations power consumption, then designed an algorithm to detect the key factor which influences the power consumption, then proposed some strategies to save energy in a seamless way and conducted under the supervision of<a class="text-gray-500 dark:text-stone-300" href="https://www.imt-atlantique.fr/en/person/loutfi-nuaymi" target="_blank">Pr Loutfi NYAUMI</a>  and Christopher MERLHE. From this research, he managed to save up to 20% of energy consumption after applying the data traffic of a BS in Rennes . To extend this project he proposed a Queue learning algorithm by taking into account two features, the User Equipment (UE) and the BS to predict the future traffic and to apply the power saving approaches automatically depends on the load.
Embarking on the final leg of his academic journey, he secured a relevent role as a Machine Learning Engineer Intern at <a class="text-gray-500 dark:text-stone-300" href="https://www.serma-safety-security.com/en/" target="_blank">Serma Safety and Security</a> a French firm at the forefront of cybersecurity for embedded systems. His tenure, spanning from February to August 2024, was marked by a series of rigorous challenges that tested his acumen and technical prowess. His primary mission was to architect a sophisticated Computer Vision Model, adept at discerning PCB components through their unique shapes and identifiers. The model's purpose was not just recognition but also to pinpoint the interfaces for these components, thereby streamlining the process of targeted cyber attacks. The success of this endeavor was not negligible, offering cybersecurity engineers a significant reduction in time—hours, sometimes days—when engaging with specific hardware components.
His contributions didn't end there; he further demonstrated his versatility by delving into the realm of neural-based decompilers. Tasked with testing and refining a model grounded in Graph Neural Networks (GNN), he worked on converting assembly language files into high-level C code. This intricate process is crucial for reverse engineering tasks, enabling cybersecurity professionals to perform with heightened efficiency. The foundation for this task was the groundbreaking research encapsulated in the Meta-published paper "<a class="text-gray-500 dark:text-stone-300" href="https://ai.meta.com/blog/introducing-n-bref-a-neural-based-decompiler-framework/" target="_blank">N-Bref </a>" in 2021,a testament to the ongoing evolution in decompilation frameworks. 
Throughout his internship, he harnessed the power of renowned Python libraries/packages such as Yolov10, OpenCV, PyTorch, Keras, TensorFlow, and Pandas, etc.. His hands-on experience with these tools has not only solidified his expertise but also positioned him as a proficient practitioner ready to tackle the complexities of the Machine Learning landscape. As he transitions from academia to industry, his journey reflects a blend of innovation, dedication, and a relentless pursuit of excellence in the rapidly evolving field of Machine Learning and the complexity of the cybersecurity domain. 
<blockquote class="!py-0 !mb-0 dark:text-slate-300">
  "Having zero background in Cybersecurity, I have learnt the biggest lesson in life that nothing is out of reach, if you sit and take the time to read from the beginning" - Jimmy said.
</blockquote>

<h2 class="dark:text-stone-200">Education</h2>
<p class="dark:text-stone-300">
Jimmy's academic journey is a testament to his dedication and hardwork. Graduating from high school in Madagascar with the highest score in the country for his branch, "Serie C", he earned a government scholarship to further his studies in Egypt. At Cairo University's Faculty of Computer Science and AI, he excelled, culminating in a bachelor's degree with the highest honors for his graduation project, a "Neural-based Car Fuel Consumption Predictor." His achievements continued with a French government scholarship, allowing him to pursue a Master's degree in "Cloud and Large-scale System" at the University of Rennes. Completing this international program in 2024, 100% taught in english, Jimmy's story is one of perseverance and commitment academic success.
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
