## Q1.1

Une classe utilitaire applique une seule règle CSS précise
pour un ajustement rapide, tandis qu'un composant est un
bloc d'interface complet et structuré.
Parmi les composants entièrement statiques,
on trouve la carte (card) et le badge (badge).

## Q1.4

'navbar-expand-lg' :** la navbar se déploie a partir de**992px** (ecrans larges).en dessous de 992px, le menu se reduit sous forme de boutton burger .
'navbar-expand-md' :** la navbar se déploie a partir de **768 px** (tablettes et plus grand).
'navbar-expand-sm' :** la navbar se déploie a partir de **576 px\*\* (petits ecrans/mobiles larges).

## Q1.5

sticky-top: l'element reste a sa position normale est se fixe en haut de la page lorsqu'on fait défiler la page jusqu'a lui.
fixed-top: l'element reste fixe enhaut de l'ecran des le debut, meme lorsqu'on fait défiler la page.

## Q2.3

p-5: ajoute un espacement intérieur (padding) egale a 48px.

mb-4: ajoute une marge extérieure (margin) en bas egale a 24px.

bg-body-tertiary :applique une couleur de fond secondaire,

rounded-3 : arrondit les coins de l'élément avec un rayon de niveau 3 egale a ~3.2px

py-5 : ajoute un espacement intérieur vertical de niveau 5, c'est-à-dire en haut et en bas de l'élément.(padding vertical)

display-5 : applique un style de grand titre (display heading).avec une taille de texte importante.

fw-bold : rend le texte gras (font-weight: bold).

fs-4 : définit la taille du texte au niveau 4 de l'échelle Bootstrap.
(font-size)

col-md-8 : définit une colonne occupant 8 colonnes sur 12 (soit deux tiers de la largeur disponible) à partir du point de rupture md (écrans moyens) et au-delà, dans le système de grille Bootstrap.

btn-lg : augmente la taille d'un bouton Bootstrap, notamment sa hauteur, ses espacements intérieurs et la taille de son texte.

## Q3.4

1. Description de longueurs différentes aux cartes :
   Si on ajoute des textes de longueurs différentes dans les cartes d'une même ligne, on remarque qu'elles n'ont pas la même hauteur : chaque carte s'adapte à son propre contenu, ce qui désaligne les pieds de carte (footer).

2. Correction avec la classe h-100 :
   En ajoutant la classe h-100 sur chaque carte (<div class="card h-100">), on force toutes les cartes de la ligne à occuper toute la hauteur disponible (100% de la hauteur du conteneur parent).

3. Pourquoi le pied de carte reste aligné :
   Le pied de carte reste parfaitement aligné grâce à la combinaison de h-100 (qui égalise la hauteur des cartes), du mode Flexbox (d-flex flex-column sur la carte), et de la marge automatique (mt-auto sur le pied de carte) qui repousse ce dernier systématiquement vers le bas de la carte, peu importe la longueur du texte.

## Q3.5

object-fit: cover;

Cette propriété empêche l'image de se déformer ou de s'étirer anormalement. Elle rogne proprement les bords si nécessaire pour remplir parfaitement l'espace tout en conservant ses proportions d'origine et un aspect visuel harmonieux. Sans cela, les images de tailles différentes risqueraient
d'être étirées ou de casser la mise en page.

## Q3.6
La grille est plus adaptée au mobile car, 
contrairement au card-group où les cartes sont totalement 
collées sans espaces, le système de grille conserve des
 marges et des espacements clairs. Cela rend l'affichage 
plus aéré, plus lisible et beaucoup plus confortable sur les petits écrans.

## Q4.1
Si on oublie la classe active, aucune diapositive ne s'affiche au début,
 et si on oublie l'id, le carrousel ne fonctionne plus (les boutons et les indicateurs ne réagissent pas)

## Q4.2
Ce texte invisible s'adresse aux utilisateurs malvoyants qui utilisent un lecteur d'écran.

## Q4.4
Ces classes (d-none d-md-block) cachent la légende sur les mobiles (d-none) pour éviter de surcharger les petits écrans 
et de masquer l'image, et l'affichent uniquement à partir des écrans moyens et grands (d-md-block) où il y a assez d'espace.

## Q4.5
Différence :
Avec data-bs-ride="carousel", le carrousel tourne automatiquement dès le chargement de la page.
Avec data-bs-ride="false", le carrousel reste immobile au début et ne se met en marche qu'après la première interaction de l'utilisateur (clic sur un bouton).

## Q4.8
Ce qui se passe :
Si on duplique le carrousel en gardant le même id, les boutons de contrôle (flèches et indicateurs) du deuxième carrousel vont piloter et perturber le premier (ou ne fonctionneront plus correctement).

Explication :
En HTML, un id doit être unique dans toute la page. Le Bootstrap utilise cet id (via data-bs-target) pour cibler un carrousel précis. 
Si deux éléments partagent le même id, les scripts JavaScript s'emmêlent les pinceaux et ne savent plus quel carrousel déclencher.