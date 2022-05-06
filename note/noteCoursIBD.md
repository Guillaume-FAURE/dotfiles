#Lambda-Java

Interfaces fonctionnelles 	Description
Function<T,R> 			Fonction qui attend un paramètre de type T et renvoie un résultat de type R
BiFunction<T, U, R> 		Fonction qui attend des paramètres de type T et U et renvoie un résultat de type R
Consumer<T> 			Consommateur d’une valeur de type T
BiConsumer<T,U> 		Consommateur d’une valeur de type T et U
Predicate<T> 			Prédicat qui attend un paramètre de type T et renvoie un booléen
BiPredicate<T,U> 		Prédicat qui attend des paramètres de type T et U et renvoie un booléen
Supplier<T> 			Fournisseur de valeur qui n’attend aucun paramètre et renvoie une instance de type T
UnaryOperator<T> 		Opération qui attend un paramètre de type T et renvoie une instance de type T
BinaryOperator<T> 		Opération qui attend deux paramètres de type T et renvoie une instance de type T 

#Hadoop

Plateforme logicielle capable de répondre aux besoins du Big Data sur un plan technique et économique

##Principaux Objectifs
– Offrir un système de gestions de fichiers
• Conçu pour opérer en environnement distribué (cluster)
• pour des applications traitant un gros volume de données
• S’adaptant automatiquement aux évolutions matérielles
• Tolérant aux pannes
– Offrir un système d’exécution de traitements sur des
données réparties
• Conçu pour opérer en environnement distribué (cluster)
• Capable de gérer le parallélisme et prenant en compte la
localisation des données
• S’adaptant automatiquement aux évolutions matérielles
• Tolérant aux pannes
– Offrir un modèle de programmation de haut niveau

##Périmètre d’Hadoop
• Hadoop est adapté à des problèmes :
– Où le volume de données à stocker et à traiter est très
important
– Où les données sont hétérogènes en terme de structure et
de format (XML, JSON, CSV, Text, Binaire, …)
– Où les traitements portent sur l’ensemble des données
(par lots plutôt que transactionnels)
– Où les traitements peuvent être effectués en parallèle,
sans ordre établi
• Quelques usages
– Modélisation des risques, analyse de transactions
commerciales, séquençage d’un génome, mise en oeuvre
d’un moteur de recommandation, analyse de corpus de
textes, … 

##Principaux composants d’Hadoop
• HDFS
– Système de gestion de fichiers distribués
• YARN
– Système de gestion des ressources générique sur
lequel peuvent s’appuyer différents modèles de
traitement des données
• MapReduce
– Modèle de traitement de données à base de tâches
• Tâche Mapper : réalise les traitements sur des données en
entrée et produit des résultats en sortie
• Tâche Reducer: consolide les données résultant des Mapper

##MapReduce
• Modèle de traitement initial d’Hadoop
• Fondé sur une logique à base de deux fonctions opérant
sur des <clé, valeur>
– Une fonction Map qui prend en entrée une paire <clé, valeur>
et produit 0 ou plusieurs paires <clé,valeur intermédiaire>
• Map(k, v) -> list((k1, v1), (k2, v2), (k1, v3), … (kn, vm))
– Une fonction Reduce qui prend en entrée une pair <clé, liste
de valeurs associée> et produit 0 ou plusieurs paires finales
<clé, valeur>
• Reduce((k1, {v1,v2,…, vn}) -> (kf, vf)
– Phase de “shuffle & sort” entre la phase Map et la phase
Reduce
• Regroupement des valeurs selon leur clé (k, {v1, v2, …, vn})
• Transmission d’un regroupement à la même fonction Reduce


