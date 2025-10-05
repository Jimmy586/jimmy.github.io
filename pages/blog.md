---
layout: page
title: Blog
permalink: blog
---

---

### **Le Dilemme du Manifestant : Une Analyse Stratégique des Manifestations à Madagascar par la Théorie des Jeux**

*Date: 5 octobre 2025*

*Dans cet article, nous proposons d’analyser la situation de la manifestation à Madagascar de 2025 à travers le prisme de **la théorie des jeux** et de **la logique du dilemme du prisonnier**, afin de comprendre comment des décisions individuelles rationnelles ont pu mener à un blocage collectif. Nous formalisons le « dilemme du manifestant » par un modèle simplifié, puis nous discutons des stratégies optimales que pourraient adopter les protestataires pour surmonter ce problème d’action collective et maximiser leurs chances de succès.*

---

### **Introduction**

Les manifestations qui ont débuté le 25 septembre 2025 à Madagascar offrent un cas d'étude saisissant pour l'application de la théorie des jeux à la dynamique des mouvements sociaux. Initialement déclenchées par des frustrations populaires face aux pénuries d'eau et d'électricité, elles se sont rapidement muées en un mouvement politique exigeant la démission du président en place. Après un pic de mobilisation impressionnant, le mouvement a connu une phase d'érosion, illustrant parfaitement le concept de **dilemme du prisonnier collectif**.

Cet article se propose d'analyser cette situation en trois temps. D'abord, nous modéliserons le choix rationnel de chaque manifestant potentiel. Ensuite, nous examinerons la dynamique collective temporelle du mouvement, notamment sa phase de déclin. Enfin, nous définirons les stratégies optimales qui auraient pu être mises en œuvre pour surmonter ce dilemme et atteindre les objectifs collectifs.


![Manifestation à Madagascar](./assets/img/mada.png)
---

### **1. Modélisation du Choix Individuel : Coopérer ou Faire Défection ?**

Au cœur du problème se trouve un conflit entre l'intérêt individuel et l'intérêt collectif. Chaque citoyen est confronté à un choix binaire :

* **Coopérer** : Participer à la manifestation.
* **Faire défection** : Rester chez soi pour éviter les risques.

Pour formaliser ce choix, nous introduisons trois variables clés :

* **B (Bénéfice)** : Le gain collectif obtenu si la manifestation réussit (ex: démission du président, amélioration des services). Ce bénéfice est un **bien public** ; tous les citoyens en profitent, qu'ils aient participé ou non.
* **C (Coût)** : Le coût individuel et certain de la participation. Il inclut les risques de blessures ou d'arrestation dus à la répression gouvernementale (rapportée comme violente), la perte de salaire, les sanctions professionnelles, etc.
* **T (Seuil)** : Le nombre critique de manifestants nécessaire pour que le mouvement réussisse et obtienne le bénéfice B.

La décision de chaque individu peut être représentée par la **matrice des gains** suivante :

|                            | **Assez d'autres manifestent (Nombre ≥ T)** | **Pas assez d'autres manifestent (Nombre < T)** |
| :------------------------- | :------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **Je Manifeste (Coopérer)** | **B - C** (Succès, mais j'ai payé le coût)                                    | **-C** (Échec, et j'ai payé le coût pour rien)                                 |
| **Je Reste chez moi (Défection)** | **B** (Succès sans aucun coût : le gain du *passager clandestin*) | **0** (Échec, mais je n'ai rien perdu)                                          |

L'analyse de cette matrice révèle une **stratégie dominante** : quel que soit le choix des autres, un individu rationnel a toujours intérêt à faire défection. Ce phénomène, connu sous le nom de **problème du passager clandestin (free-rider)**, conduit à un équilibre de Nash sous-optimal : si tout le monde suit cette logique, personne ne manifeste, et le mouvement échoue.

---

### **2. Formalisation Mathématique**

Nous pouvons modéliser la décision d'un individu `i` en utilisant l'espérance mathématique de son gain (son "utilité"). Soit `p` la probabilité subjective (la croyance) de l'individu `i` que la manifestation va réussir. Pour simplifier, disons que `p` est la probabilité que le nombre de manifestants atteigne le seuil `T`.

L'espérance de gain en manifestant est :
$$E[U(M)] = p \cdot (B - C) + (1 - p) \cdot (-C) = pB - C$$

L'espérance de gain en restant chez soi est :
$$E[U(R)] = p \cdot B + (1 - p) \cdot 0 = pB$$

Un individu rationnel choisira de manifester uniquement si $E[U(M)] > E[U(R)]$. Cependant, notre modèle simple montre que $pB - C$ n'est **jamais** supérieur à $pB$. Le modèle doit être plus subtil : la participation ne devient rationnelle que si l'individu estime que sa propre présence peut être **décisive**.

Soit $P(T-1)$ la probabilité qu'exactement $T-1$ autres personnes se présentent. La condition pour manifester devient alors :
$$P(T-1) \cdot B > C$$

Cette formule explique parfaitement l'érosion de la manifestation à Madagascar :

* La **répression du gouvernement augmente C** : Le coût perçu (arrestation, perte d'emploi) devient très élevé.
* La **fatigue et le doute diminuent $P(T-1)$** : Moins les gens y croient, plus ils estiment qu'il est improbable que leur seule présence soit le facteur décisif.

Quand $C$ devient trop grand ou que $P(T-1) \cdot B$ devient trop petit, l'inégalité s'inverse et la décision rationnelle devient de rester chez soi.

---

### **3. De la Statique à la Dynamique Collective : La « Guerre d'Usure »**

Le modèle statique explique l'érosion, mais la dynamique temporelle du mouvement peut être modélisée comme une **« guerre d'attrition »** entre les manifestants et le gouvernement. Les deux camps subissent des coûts au fil du temps et espèrent que l'autre cédera le premier. Ce processus se déroule typiquement en trois phases :

1.  **Montée en puissance (Phase de cascade)** : Les individus les plus motivés commencent. Leur présence encourage d'autres, créant un effet de cascade qui fait grossir la foule.
2.  **Pic de la mobilisation** : Le mouvement atteint sa taille maximale, imposant un coût significatif au gouvernement. C'est à ce moment que la pression a forcé le président à une concession partielle : la dissolution du gouvernement.
3.  **Déclin (Phase d'érosion)** : Si une victoire totale n'est pas obtenue au pic, la dynamique s'inverse. Les coûts cumulés, la fatigue et la peur accélèrent le découragement, menant à une « trappe à inaction collective ».

---

### **4. Stratégies pour Surmonter le Dilemme et Réussir la Mobilisation**

Le tableau pourrait sembler pessimiste, mais l'analyse par la théorie des jeux est un outil de diagnostic, pas une fatalité. Pour vaincre le dilemme, il ne faut pas changer la rationalité des individus, mais **changer les paramètres du jeu**. Voici les leviers stratégiques que les organisateurs peuvent actionner en agissant sur les variables du modèle : le coût $C$, le bénéfice $B$, et la probabilité perçue de succès $p$.

---

#### **Axe 1 : Abaisser radicalement le coût de la participation (↓C)**

Le coût individuel ($C$) est le frein le plus direct à la mobilisation. Toute stratégie visant à le réduire, de manière tangible ou psychologique, augmente la probabilité de coopération.

* **La sécurité par le nombre :** C'est le principe fondamental. Le risque individuel est inversement proportionnel à la taille de la foule. Une mobilisation massive dilue le risque de répression pour chaque participant. Le message clé doit être : « Le plus grand danger est d'être trop peu nombreux ».
* **Soutien logistique et mutualisation des risques :** Il s'agit de subventionner la coopération. La mise en place de **caisses de grève** pour compenser les pertes de salaire, d'un **fonds de solidarité** pour l'aide juridique ou les frais médicaux, ou la distribution de nourriture et d'eau sont des mesures concrètes qui abaissent le coût net de la participation.
* **Tactiques de prudence et d'usure :** Pour maintenir une pression sur la durée, des stratégies de **rotation** peuvent être mises en place. Différents groupes (étudiants, syndicats, quartiers) se relaient, ce qui répartit le coût et la fatigue sur un plus grand nombre de personnes. De plus, encourager l'**anonymat** (masques, lunettes) peut réduire la peur des sanctions post-manifestation.

---

#### **Axe 2 : Maximiser le bénéfice espéré et la croyance en la victoire (↑B et ↑p)**

Pour qu'un individu risque de payer le coût $C$, il doit être convaincu que le jeu en vaut la chandelle et que la victoire est à portée de main.

* **Cadrage puissant et clair des enjeux ($B$) :** Le bénéfice doit être présenté de manière concrète et urgente. Lier la revendication politique à des problèmes quotidiens tangibles (« la fin des pénuries », « un avenir pour nos enfants ») augmente la valeur perçue de $B$. Utiliser un **cadrage négatif** ("voici le futur terrible que nous éviterons si nous gagnons") est souvent un moteur puissant.
* **Créer une prophétie autoréalisatrice de succès ($p$) :** La décision de participer dépend de la croyance que les autres le feront aussi. Il faut donc créer une **cascade d'information** positive.
    * **Célébrer les victoires intermédiaires :** La dissolution du gouvernement, même partielle, doit être présentée comme une preuve que l'action collective fonctionne.
    * **Utiliser les signaux de crédibilité :** L'engagement public de figures influentes et respectées (artistes, leaders syndicaux) sert de garantie et rassure les indécis.
    * **Visualiser la force :** La diffusion massive d'images de foules grandissantes sur les réseaux sociaux convainc les hésitants que le seuil critique $T$ est sur le point d'être atteint.

---

#### **Axe 3 : Transformer le dilemme en un jeu de coordination**

La stratégie la plus efficace consiste à faire basculer la situation d'un **dilemme du prisonnier** (où l'on se méfie des autres) à un **jeu d'assurance** ou de "chasse au cerf" (où l'on veut coopérer, à condition d'être sûr que les autres le feront).

* **Créer un point focal (Point de Schelling) :** L'incertitude est l'ennemi. Il faut fixer **une date, une heure et un lieu uniques et incontournables** pour une mobilisation massive. En concentrant la communication sur ce "jour J", on crée une attente partagée où chaque individu sait que tous les autres savent que c'est LE moment décisif. La peur d'être seul est remplacée par la peur de manquer le rendez-vous avec l'histoire.
* **Augmenter le coût de la défection (pression sociale) :** Créer une **identité collective forte** (via des symboles, des slogans) fait de la participation une norme sociale. Dans ce cadre, ne pas participer n'est plus un choix neutre mais devient une forme de trahison, entraînant un coût social (honte, réprobation) qui décourage le comportement de passager clandestin.

---

### **Conclusion : De la rationalité individuelle à l'intelligence collective**
L'analyse par la théorie des jeux met en lumière le cœur du dilemme : comment faire en sorte que des individus, agissant logiquement pour leur sécurité personnelle, convergent vers une action collective bénéfique pour tous ? La solution ne réside pas dans l'héroïsme individuel, mais dans une **stratégie collective intelligente**. En abaissant les coûts, en maximisant les bénéfices perçus et, surtout, en coordonnant les attentes pour créer un moment de bascule, les organisateurs peuvent transformer une multitude de décisions individuelles craintives en une force collective irrésistible. Il s'agit de transformer l'anarchie des comportements égoïstes en une action collective cohérente, seule capable d'atteindre l'optimum social revendiqué.

---

### **Références**

1.  RFI. « À Madagascar, la contestation de la "Gen Z" prend de l'ampleur ». *Radio France Internationale*, 27 sept. 2025.
2.  Le Monde avec AFP. « Manifestations meurtrières à Madagascar: nouvelle mobilisation malgré le renvoi du gouvernement ». *Le Monde*, 30 sept. 2025.
3.  Le Monde avec AFP. « A Madagascar, la Gen Z appelle désormais à la grève générale et durcit le mot d'ordre: "Rajoelina, dégage!" ». *Le Monde*, 1er oct. 2025.
4.  Wikipedia. "2025 Malagasy protests", consulté le 5 oct. 2025.
5.  Olson, Mancur. *The Logic of Collective Action*. Harvard University Press, 1965.
6.  Stanford Encyclopedia of Philosophy. "The Free Rider Problem", consulté le 5 oct. 2025.