---
layout: page
title: Blog
permalink: blog
---

-----

### **Le Dilemme du Manifestant : Une Analyse Stratégique des Manifestations à Madagascar par la Théorie des Jeux**

**Date:** October 5, 2025

*Absolument. En tant que votre professeur, je vais fusionner ces excellentes analyses – la vôtre, celle du document de référence, et mon propre cadre initial – pour produire un article de fond complet et structuré sur ce cas d'étude fascinant.*

-----

### **Introduction**

Les manifestations qui ont débuté le 25 septembre 2025 à Madagascar offrent un cas d'étude saisissant pour l'application de la théorie des jeux à la dynamique des mouvements sociaux. Initialement déclenchées par des frustrations populaires face aux pénuries d'eau et d'électricité, elles se sont rapidement muées en un mouvement politique exigeant la démission du président en place¹. Après un pic de mobilisation impressionnant, le mouvement a connu une phase d'érosion, illustrant parfaitement le concept de **dilemme du prisonnier collectif**.

Cet article se propose d'analyser cette situation en trois temps. D'abord, nous modéliserons le choix rationnel de chaque manifestant potentiel. Ensuite, nous examinerons la dynamique collective temporelle du mouvement, notamment sa phase de déclin. Enfin, nous définirons les stratégies optimales qui auraient pu être mises en œuvre pour surmonter ce dilemme et atteindre les objectifs collectifs.

-----

### **1. Modélisation du Choix Individuel : Coopérer ou Faire Défection ?**

Au cœur du problème se trouve un conflit entre l'intérêt individuel et l'intérêt collectif. Chaque citoyen est confronté à un choix binaire :

  * **Coopérer** : Participer à la manifestation.
  * **Faire défection** : Rester chez soi pour éviter les risques.

Pour formaliser ce choix, nous introduisons trois variables clés :

  * **B (Bénéfice)** : Le gain collectif obtenu si la manifestation réussit (ex: démission du président, amélioration des services). Ce bénéfice est un **bien public** ; tous les citoyens en profitent, qu'ils aient participé ou non⁵.
  * **C (Coût)** : Le coût individuel et certain de la participation. Il inclut les risques de blessures ou d'arrestation dus à la répression gouvernementale (rapportée comme violente)², la perte de salaire, les sanctions professionnelles, etc.
  * **T (Seuil)** : Le nombre critique de manifestants nécessaire pour que le mouvement réussisse et obtienne le bénéfice B.

La décision de chaque individu peut être représentée par la **matrice des gains** suivante :

|                           | **Assez d'autres manifestent (Nombre ≥ T)** | **Pas assez d'autres manifestent (Nombre \< T)** |
| :------------------------ | :--------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| **Je Manifeste (Coopérer)** | **B - C** (Succès, mais j'ai payé le coût)                                  | **-C** (Échec, et j'ai payé le coût pour rien)                              |
| **Je Reste chez moi (Défection)** | **B** (Succès sans aucun coût : le gain du *passager clandestin*) | **0** (Échec, mais je n'ai rien perdu)                                       |

L'analyse de cette matrice révèle une **stratégie dominante** : quel que soit le choix des autres, un individu rationnel a toujours intérêt à faire défection. Ce phénomène, connu sous le nom de \*\*problème du passager clandestin (free-rider)\*\*⁶, conduit à un équilibre de Nash sous-optimal : si tout le monde suit cette logique, personne ne manifeste, et le mouvement échoue.

-----

### **2. Formalisation Mathématique**

Nous pouvons modéliser la décision d'un individu `i` en utilisant l'espérance mathématique de son gain (son "utilité"). Soit `p` la probabilité subjective (la croyance) de l'individu `i` que la manifestation va réussir. Pour simplifier, disons que `p` est la probabilité que le nombre de manifestants atteigne le seuil `T`.

L'espérance de gain en manifestant est :
$$E[U(M)] = p \cdot (B - C) + (1 - p) \cdot (-C) = pB - C$$

L'espérance de gain en restant chez soi est :
$$E[U(R)] = p \cdot B + (1 - p) \cdot 0 = pB$$

Un individu rationnel choisira de manifester uniquement si $$E[U(M)] > E[U(R)]$$

Cependant, notre modèle simple montre que `pB - C` n'est **jamais** supérieur à `pB`. Il y a donc une faille. Le modèle doit être plus subtil : la participation ne devient rationnelle que si l'individu estime que sa propre présence peut être **décisive**.

Soit `P(T-1)` la probabilité qu'exactement `T-1` autres personnes se présentent. La condition pour manifester devient alors :
$$P(T-1) \cdot B > C$$

Cette formule explique parfaitement l'érosion de la manifestation à Madagascar :

  * La **répression du gouvernement augmente C** : Le coût perçu (arrestation, perte d'emploi) devient très élevé².
  * La **fatigue et le doute diminuent P(T-1)** : Moins les gens y croient, plus ils estiment qu'il est improbable que leur seule présence soit le facteur décisif.

Quand `C` devient trop grand ou que `P(T-1) * B` devient trop petit, l'inégalité s'inverse et la décision rationnelle devient de rester chez soi.

-----

### **3. De la Statique à la Dynamique Collective : La « Guerre d'Usure »**

Le modèle statique explique l'érosion, mais la dynamique temporelle du mouvement peut être modélisée comme une **« guerre d'attrition »** entre les manifestants et le gouvernement. Les deux camps subissent des coûts au fil du temps et espèrent que l'autre cédera le premier. Ce processus se déroule typiquement en trois phases :

1.  **Montée en puissance (Phase de cascade)** : Les individus les plus motivés commencent. Leur présence encourage d'autres, créant un effet de cascade qui fait grossir la foule.
2.  **Pic de la mobilisation** : Le mouvement atteint sa taille maximale, imposant un coût significatif au gouvernement. C'est à ce moment que la pression a forcé le président à une concession partielle : la dissolution du gouvernement².
3.  **Déclin (Phase d'érosion)** : Si une victoire totale n'est pas obtenue au pic, la dynamique s'inverse. Les coûts cumulés, la fatigue et la peur accélèrent le découragement, menant à une « trappe à inaction collective ».

-----

### **4. Stratégies pour Surmonter le Dilemme et Réussir la Mobilisation**

Sortir du dilemme du prisonnier nécessite de **changer les paramètres du jeu**. Les organisateurs doivent agir sur les variables C, B et la perception du succès pour rendre la coopération rationnelle.

**Axe 1 : Réduire le Coût de la Participation (↓C)**

  * **Soutien logistique et financier** : Mettre en place des caisses de grève pour compenser les pertes de salaire et des fonds de solidarité.
  * **Assurer la sécurité** : Organiser des services d'ordre internes et promouvoir une discipline non-violente pour réduire l'intensité de la répression.

**Axe 2 : Augmenter le Bénéfice Espéré (↑B et ↑p)**

  * **Nourrir l'espoir de succès** : Communiquer massivement sur chaque avancée, même partielle, pour prouver que la pression fonctionne.
  * **Souligner l'importance de l'enjeu** : Cadrer le bénéfice B non seulement comme un gain, mais aussi comme l'évitement d'un futur bien pire.

**Axe 3 : Transformer le Jeu de Dilemme en Jeu de Coordination**

  * **Créer des points focaux (Schelling Points)** : Organiser des journées nationales de manifestation à des dates et heures précises et crédibles, comme la grève générale appelée par le collectif Gen Z³.
  * **Renforcer la solidarité et les normes sociales** : Créer une identité collective forte (les jeunes organisateurs ont utilisé des symboles rassembleurs) où la non-participation est perçue comme une trahison¹.
  * **Adopter des stratégies tournantes** : Organiser des rotations où différents groupes prennent le relais pour maintenir la pression sans épuiser les participants.

-----

### **Conclusion**

L'analyse des manifestations à Madagascar à travers la théorie des jeux révèle que l'échec d'un mouvement de masse n'est souvent pas dû à un manque de volonté collective, mais à une **défaillance de la coordination** face à des risques individuels élevés.

Le succès d'une telle entreprise ne repose donc pas sur l'altruisme ou l'héroïsme, mais sur une **stratégie délibérée visant à modifier la structure des incitations**. En réduisant les coûts, en augmentant la croyance en la victoire et, surtout, en créant des mécanismes de coordination robustes, les organisateurs peuvent aligner l'intérêt individuel sur l'intérêt collectif. C'est à ce prix qu'il est possible de briser le cercle vicieux du passager clandestin et de transformer une multitude de décisions individuelles craintives en une action collective victorieuse.

-----

### **Références**

1.  RFI. « À Madagascar, la contestation de la "Gen Z" prend de l'ampleur ». *Radio France Internationale*, 27 sept. 2025.
2.  Le Monde avec AFP. « Manifestations meurtrières à Madagascar: nouvelle mobilisation malgré le renvoi du gouvernement ». *Le Monde*, 30 sept. 2025.
3.  Le Monde avec AFP. « A Madagascar, la Gen Z appelle désormais à la grève générale et durcit le mot d'ordre: "Rajoelina, dégage\!" ». *Le Monde*, 1er oct. 2025.
4.  Wikipedia. "2025 Malagasy protests", consulté le 5 oct. 2025.
5.  Olson, Mancur. *The Logic of Collective Action*. Harvard University Press, 1965.
6.  Stanford Encyclopedia of Philosophy. "The Free Rider Problem", consulté le 5 oct. 2025.