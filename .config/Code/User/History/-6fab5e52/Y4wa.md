# Les id des objets

Il y a 5 sortes d'objets dans une page:

-   la page
-   les images
-   les sections (exercices le plus souvent)
-   les phrases (sentences)
-   les mots (words)

Leurs ids sont tous (excépté pour les mots en raison de leur trop grand nombre) composé de

-   l'identifiant de la page:
    -   pX où X est le numéro de la page si la fonction getNumPage() dans createSentencesNode.ts repére un numéro de
        page (pour plus de précision, regarder la fonction)
    -   p-X où X est l'index de la page sinon
-   l'identifiant de l'objet:
    -   le numéro (pour les exercices) ou si il n'y a pas de numéro l'index de l'objet, par exemple:
        -   l'exercice numéro 4 de la page 5 (où 5 est un numéro repéré par le programme) sera p5_e4
        -   la 20e phrases de la page 2 (où aucun numéro de page n'a été repéré) sera p-2_s20
