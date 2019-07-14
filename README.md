
# ex 2
Les utilisateurs de ce forum sont un peu ... mal élevés ! 
Tu as ici l'interface admin, d'où l'admin peut voir une liste de tous les utilisateurs et ... bannir les vilains.


# scenario utilisateur devant être vérifiésopur valider l'exercice :
* quand la page est chargée, la liste des utilisateurs s'affiche (là encore j'ai simulé l'existence d'une base de donnée et d'une session), il faut donc faire une api qui fait une requête à /get/users (j'ai fait le back, a toi le front)
* pour chaque utilisateur, un bouton "bannir" apparait a coté de son nom, 
* lorsque je clique sur "banir", l'utilisateur est banni (banned:true) et le bouton devient grisé en cas de succès.
(là j'ai préparé le back, vers /ban/user, mais c'est a toi de le remplir)

# bonus :
* lorsque la liste se charge, les utilisateurs bannis ont un bouton "dé-bannir"


