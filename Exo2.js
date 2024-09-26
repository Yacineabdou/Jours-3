/*-------------------Exo:2------------------------------*/
//---------------challenge 1
let base = prompt("Entrer base:")
let hauteur = prompt("Entrer height:")
let aire =  0.5 * base * hauteur
console.log(aire);

//---------------challenge 2
let coterA = prompt("Entrer side a:")
let coterB = prompt("Entrer side b:")
let coterC = prompt("Entrer c:")
let perimetre = parseInt(coterA) + parseInt(coterB) + parseInt(coterC)
console.log(perimetre);

//--------------challenge 3
let longeur = prompt("Entrer lenght:")
let largeur = prompt("Entrer width:")
let aireDuRectangle = longeur*largeur
let perimetreDuRectangle = 2 * (parseInt(longeur)+parseInt(largeur))
console.log(aireDuRectangle);
console.log(perimetreDuRectangle);

//----------------challenge 4
let cercle = prompt("Entrer rayon:")
let aireDuCercle = 3.14 * cercle * cercle
console.log(aireDuCercle);

//-------------challenge 5
let calculerPente = prompt("Entrer x:")
let x =  calculerPente
let y = 2 * x -2
console.log(y);