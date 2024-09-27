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
alert("mon nom est courte")

//---------------challenge 11
let firstName = "yacine"
let lastName = "abdou"
console.log(firstName.length === lastName.length);
alert("Mon prénom, Yacine, est effectivement plus long que mon nom de famille, Abdou")

//-----------------challenge 12
let myAge = 35
let yourAge = 25
let somme = "35"
let somme1 ="25"
console.log(somme,somme1,myAge - yourAge);
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

//--------------challenge 14
let entrerAge = prompt("veilllez entrer votre age:")
let resolution = entrerAge * 31557600
console.log(resolution);

//---------------challenge 15
// AAAA-MM-JJ HH:mm
const now = new Date();

const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Ajout de 1 car les mois commencent à 0
const day = now.getDate().toString().padStart(2, '0');
const hour = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDate);

// JJ-MM-AAAA HH:mm
const now1 = new Date();
const day1 = now.getDate().toString().padStart(2, '0');
const month1 = (now.getMonth() + 1).toString().padStart(2, '0'); // Ajout de 1 car les mois commencent à 0
const year1 = now.getFullYear();
const hours1 = now.getHours().toString().padStart(2, '0');
const minutes1 = now.getMinutes().toString().padStart(2, '0');
const formattedDate1 = `${day}-${month}-${year} ${hours}:${minutes}`;

console.log(formattedDate1);

// JJ/MM/AAAA HH:mm
const now3 = new Date()
const option = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}
const formattedDate3 = now.toLocaleString('fr-FR',option)
console.log(formattedDate3);