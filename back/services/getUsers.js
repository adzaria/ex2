module.exports = (usersList) => (req,res,next) => {

	//ne rien modifier ici

	// ici il y aurait normalement un accès a la base de donnée, pour l'exercice on n'en a pas besoin, je teste donc juste si le nom vaut bien elias et le mot de passe mdp

	res.json(usersList)
	
}