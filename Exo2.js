/*-------------------Exo:2------------------------------
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
let fej = parseFloat(longeur)
let grt = parseFloat(largeur)
let aireDuRectangle = longeur*largeur
let perimetreDuRectangle = 2 * fej + grt 
console.log(aireDuRectangle);
console.log(perimetreDuRectangle);

//----------------challenge 4
let cercle = prompt("Entrer rayon:")
    cercle = parseFloat(cercle)
let aireDuCercle = 3.14 * cercle * cercle
console.log(aireDuCercle);

//-------------challenge 5
let monM = prompt("Entrer m:")
let monB = prompt("Entrer b:")
let y = 0
let monX = parseFloat(-monB) / parseFloat(monM)
console.log("x = ", monX, "y =", y);
    
//-------------challenge 6
let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10
let pente1 = (y2 - y1)/(x2 - x1)
console.log(pente1);

//------------challenge 7
console.log(monX === pente1);

//------------challenge 8
let a = 1
let b = 6
let c = 9
console.log(y = b ** 2 - 4 * a * c);
let x = prompt("Entrer une valeur pour que y soit = 0")
let resut = parseFloat(y = a * x ** 2 + b * x + c)
console.log(resut);

//--------------challenge 9
let hours = prompt("Entrer hours:")
let horaire = prompt("Entrer horaire:")
let salaireUtilisateur = hours * horaire
console.log(salaireUtilisateur);

//---------------challenge 10
alert("mon nom est courte")*/

//---------------challenge 11
let firstName = "yacine"
let lastName = "abdou"
console.log(firstName.length === lastName.length);
alert("Mon prénom, Yacine, est effectivement plus long que mon nom de famille, Abdou")

//-----------------challenge 12
let myAge = 35
let yourAge = 25
console.log(myAge - yourAge);
alert("j'ai 10 ans de plus que toi.")

//---------------challenge 13
let tonAge = prompt("Veillez entrer votre age:")
let ageNormal = 18
console.log(tonAge >= ageNormal && tonAge <= tonAge);
alert(" vous avez l'âge légal pour conduir")
let sonAge = prompt("veillez entrer votre age:")
let affiare = tonAge <= ageNormal && tonAge <= tonAge
console.log(affiare);

alert("vous pourrez conduir dans peu de temps")

