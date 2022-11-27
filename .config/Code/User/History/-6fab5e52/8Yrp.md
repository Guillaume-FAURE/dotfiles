# Les id des objets

Il y a 5 sortes d'objets dans une page:
- la page
- les images
- les sections (exercices le plus souvent)
- les phrases (sentences)
- les mots (words)

Leurs ids sont tous (excépté pour les mots en raison de leur trop grand nombre) composé de
-  l'identifiant de la page:
    - pX où X est le numéro de la page si la fonction getNumPage() dans createSentencesNode.ts repére un numéro de page
    - p-X où X est l'index de la page sinon
- l'identifiant de l'objet:
    - index de l'objet, par exemple le 4 exercices de la page 5 (où 5 est un numéro repéré par le programme) sera p5-e4
