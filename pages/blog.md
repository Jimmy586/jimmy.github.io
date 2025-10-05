---
layout: page
title: Blog
permalink: blog
---

### Highlighted Blog Posts

#### **1. Le Dilemme du Manifestant : Une Analyse Stratégique des Manifestations à Madagascar par la Théorie des Jeux**
**Date:** October 5, 2025

*En tant que professeur en mathématiques appliquées à la stratégie, je vais décortiquer ce cas d'usage, le formaliser mathématiquement et vous proposer les stratégies qui en découlent.*

Votre observation sur les manifestations à Madagascar est au cœur du **problème de l'action collective**, qui est une forme généralisée du dilemme du prisonnier avec un grand nombre de joueurs. C'est une analyse très pertinente.

![Manifestation à Madagascar](./assets/img/mada.png)

---

### Analyse du Contexte : Le Dilemme du Manifestant Malgache

Vous avez parfaitement posé le décor. La situation à Madagascar, qui a débuté le 25 septembre 2025, est une illustration parfaite d'un "jeu" à N joueurs où N est le nombre de citoyens potentiellement manifestants. La cause initiale, les pénuries d'eau et d'électricité, a évolué vers une demande de démission du président, augmentant l'enjeu du "gain" potentiel.

Chaque citoyen fait face à un choix binaire :
* **Coopérer (Manifester)** : Se joindre aux autres manifestants pour faire pression sur le gouvernement.
* **Trahir (Rester chez soi)** : Ne pas manifester pour préserver sa sécurité et sa stabilité personnelle.

Les risques que vous avez identifiés (répression, perte d'emploi, harcèlement, etc.) constituent le **coût de la coopération (C)**. La répression gouvernementale violente augmente considérablement ce coût perçu. Le doute sur l'issue de la manifestation et la peur de "tout perdre pour rien" sont au cœur du dilemme. Si un individu pense que les autres vont "trahir", sa meilleure réponse est de trahir également pour ne pas payer seul le coût d'une action vaine. C'est la dynamique observée avec l'affaiblissement de la mobilisation : l'intérêt individuel entre en conflit avec l'intérêt collectif.

---

### Formalisation Mathématique du Dilemme

Pour concrétiser cela, utilisons des variables et une matrice de gains.

**Hypothèses et Variables :**
* **B** : Le **Bénéfice** collectif si la manifestation réussit (meilleur gouvernement, fin des pénuries). C'est un **bien public** : tout le monde en profite, même ceux qui sont restés chez eux.
* **C** : Le **Coût** individuel et certain de la participation (risque de blessure, perte de salaire, arrestation).
* **T** : Le **Seuil** critique de participants requis pour que la manifestation réussisse.

**La Matrice des Gains pour un individu :**

| | **Assez d'autres manifestent (Nombre ≥ T-1)** | **Pas assez d'autres manifestent (Nombre < T-1)** |
| :--- | :--- | :--- |
| **Vous manifestez (Coopérer)** | **B - C** (Succès, avec un coût) | **-C** (Échec, et vous payez le coût pour rien) |
| **Vous ne manifestez pas (Trahir)**| **B** (Succès, sans coût : le "passager clandestin") | **0** (Échec, statu quo) |

D'un point de vue purement rationnel et égoïste, la logique pousse à **Trahir** (ne pas manifester), quelle que soit l'action des autres. C'est une **stratégie dominante**. Si tout le monde suit ce raisonnement, personne ne manifeste, menant à un échec collectif (gain de 0 pour tous), alors que la coopération aurait pu apporter un résultat bien supérieur.

**Modélisation de la décision rationnelle :**

Soit `p` la probabilité subjective (la croyance) de l'individu que la manifestation va réussir. L'espérance de gain pour chaque action est :

* Espérance de gain en manifestant :
    $$E[U(M)] = p \cdot (B - C) + (1-p) \cdot (-C) = pB - C$$
* Espérance de gain en restant chez soi :
    $$E[U(R)] = p \cdot B + (1-p) \cdot 0 = pB$$

Clairement, `pB - C` n'est jamais supérieur à `pB`. Ce modèle simple suggère qu'il est toujours irrationnel de manifester. Cependant, un individu ne manifestera que s'il pense que sa participation personnelle peut être **décisive**, c'est-à-dire faire basculer le résultat de l'échec au succès.

Soit `P(T-1)` la probabilité qu'exactement `T-1` autres personnes se présentent. La condition pour qu'un individu rationnel décide de manifester devient :

$$P(T-1) \cdot B > C$$

Cette formule est très puissante. Elle explique l'érosion de la manifestation :
* La répression du gouvernement **augmente C**.
* La fatigue et le doute **diminuent la croyance d'être décisif (P(T-1))**.

Quand le coût `C` devient trop grand ou que le bénéfice probable `P(T-1) * B` devient trop petit, l'inégalité s'inverse et la décision rationnelle redevient de rester chez soi.

---

### La Dynamique du Mouvement : Une Guerre d'Usure

Le modèle s'enrichit en analysant la dynamique temporelle comme une **"guerre d'attrition"** entre les manifestants et le gouvernement. Les deux camps endurent des coûts au fil du temps et espèrent que l'autre cédera le premier. Ce modèle prédit un cycle en trois phases, observé à Madagascar:
1.  **Montée en puissance** : Les plus motivés créent un effet de cascade.
2.  **Pic de mobilisation** : Le mouvement atteint son apogée, forçant le pouvoir à des concessions (dissolution du gouvernement).
3.  **Déclin et érosion** : Si la victoire n'est pas totale, le moral et les ressources s'épuisent. La répression et la fatigue accélèrent ce découragement.

---

### La Stratégie Optimale : Comment Vaincre le Dilemme

Le but n'est pas de changer la rationalité des individus, mais de **changer les paramètres du jeu**. Voici la stratégie optimale :

#### 1. Diminuer le Coût de la Coopération (↓C)
* **La Force du Nombre** : Créer des pics de mobilisation massifs pour diluer le risque individuel.
* **Organisation et Sécurité** : Mettre en place des structures de soutien (caisses de grève, assistance juridique, équipes de secours) pour mutualiser le coût `C`.
* **Discipline Non-Violente** : Une stratégie non-violente réduit la légitimité de la répression gouvernementale.

#### 2. Augmenter le Bénéfice Perçu (↑B) et la Probabilité de Succès (↑p)
* **Créer un Point Focal (Point de Schelling)** : Fixer une date, une heure et un lieu uniques et crédibles pour que chaque personne soit assurée que les autres y seront aussi.
* **Obtenir des Victoires Intermédiaires** : Des succès partiels prouvent que l'action collective fonctionne et augmentent la croyance en la victoire finale.
* **Créer des Cascades d'Information** : Utiliser les réseaux sociaux pour montrer une foule grandissante crée une prophétie autoréalisatrice.

#### 3. Augmenter le Coût de la Trahison (Rester chez soi)
* **Pression Sociale et Identité Collective** : Créer un sentiment d'appartenance fort (via des symboles, un discours unificateur) où ne pas participer est perçu comme une honte.
* **Rendre la Non-Participation Visible** : Organiser des actions où l'absence est remarquée (journées "ville morte", grèves générales).

### Conclusion

Le dilemme du manifestant n'est pas une fatalité. C'est un obstacle stratégique qui peut être surmonté. La clé n'est pas l'altruisme, mais la **confiance et la coordination**. La meilleure stratégie consiste à modifier la matrice des gains de chaque individu. En diminuant le coût de la participation, en augmentant le coût de l'inaction et en renforçant la conviction que la victoire est possible, les organisateurs peuvent transformer un jeu de "trahison" individuelle en un jeu de **coopération collective inévitable**.

C'est là que les mathématiques de la stratégie rejoignent la psychologie des foules et l'art de l'action politique.

---

#### **2. Practical Tips for Getting Started with Machine Learning**
**Date:** June 10, 2024

Starting your journey into machine learning can be overwhelming, but with the right resources, anyone can succeed. Begin by building a solid foundation with online courses like **Coursera** or **edX**, and hands-on books like *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* by Aurélien Géron.

Hands-on experience is essential. Participate in **Kaggle competitions** or work on personal projects to apply your knowledge and create a portfolio that showcases your skills to potential employers.

As you progress, remember that **continuous learning and curiosity** are key to success in this rapidly evolving field. Stay updated with the latest research, attend conferences, and engage with the community.

---

#### **3. The Role of Machine Learning in Sustainable Development**
**Date:** May 30, 2024

Machine learning is an essential tool for addressing global sustainability challenges. One of my projects at **IMT Atlantique** focused on **reducing energy consumption in mobile networks** by leveraging machine learning to identify key factors and propose energy-saving strategies.

In wildlife conservation, machine learning is also helping monitor endangered species, detect poaching, and analyze habitat changes, supporting the protection of biodiversity.

As we push forward, it’s vital to integrate **ethical considerations** and focus on long-term sustainability when deploying machine learning solutions.

---

#### **4. Building Scalable Systems for Big Data Analytics**
**Date:** April 25, 2024

Big data analytics requires robust and scalable systems, utilizing distributed computing frameworks like **Apache Hadoop** or **Spark**. These frameworks allow parallel processing across nodes, speeding up data analysis.

Effective storage solutions, such as **NoSQL databases** (e.g., MongoDB, Cassandra), handle large datasets flexibly, while tools like **Apache Kafka** enable real-time data processing, essential for applications like fraud detection and network monitoring.

A holistic approach that considers performance, fault tolerance, and security is necessary to build scalable systems that meet today's big data demands.

---

#### **5. Enhancing Cybersecurity with AI and Machine Learning**
**Date:** March 20, 2024

AI and machine learning offer advanced tools for **proactive cybersecurity**, detecting anomalies and predicting threats. In my work at **SERMA Safety and Security**, we developed machine learning models for **threat detection and mitigation**, leveraging anomaly detection to identify potential breaches early.

However, challenges such as model accuracy, bias, and protection against adversarial attacks must be carefully addressed to ensure the reliability of AI-driven security solutions.

---

#### **6. Optimizing Cloud Infrastructure for Machine Learning Workloads**
**Date:** February 15, 2024

Optimizing cloud infrastructure for machine learning workloads involves addressing key challenges like **autoscaling** and **resource allocation**. Autoscaling ensures cloud resources adapt to demand, while resource allocation fine-tunes performance for different tasks.

At **SERMA Safety and Security**, our optimized CI/CD pipelines reduced deployment times and increased operational efficiency. Cloud infrastructure planning is crucial for delivering scalable and cost-effective machine learning solutions.

---

#### **7. The Evolution of Machine Learning: From Theory to Practical Applications**
**Date:** January 10, 2024

Machine learning has evolved from theory to a driving force in technology. Early milestones like the development of **neural networks** laid the foundation for **deep learning**, which powers modern applications like image recognition and natural language processing.

As we move forward, we must address **ethical considerations** around fairness, transparency, and accountability in machine learning. These factors will shape the future of the field as we continue to expand its practical applications.