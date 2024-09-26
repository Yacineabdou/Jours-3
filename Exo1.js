/*********************Challenge: Exercice jours 3****************************/
/*-----------------------Exo:1------------------------*/

//------------challenge 1---------------------
let firstName = "yacine"
let lastName = "le punG"
let country = "sadoré"
let city = "Niamey"
let age = 30
let isMarried = true
let year = 2024
console.log("variable de firstName: " + typeof(firstName) +
            "\nvariable de lastName: " + typeof(lastName) +
            "\nvariable de country: " + typeof(country) +
            "\nvariable de city: " + typeof(city) +
            "\nvariable de age: " + typeof(age) +
            "\nvariable de isMarried: " + typeof(isMarried) +
            "\nvariable de year: " + typeof(year)
);

//--------------challenge 2-------------------
console.log("10"=== 10);

//---------------challenge 3------------------
let num = parseInt('9.8')
console.log(num === 10);

//--------------challenge 4-----------------
let trueResultat1 = 10 > 5
let trueResultat2 = 25 === 25
let trueResultat3 = 15 !== 10
console.log(trueResultat1, trueResultat2, trueResultat3);

let falseResultat1 = 16 !== 16
let falseResultat2 = 5 > 10
let falseResultat3 = 10 === "10"
console.log(falseResultat1, falseResultat2, falseResultat3);

//----------------challenge 5---------------
let voir = 4 > 3
console.log(voir);

let voir1 = 4 >= 3
console.log(voir1);

let voir2 = 4 < 3
console.log(voir2);

let voir3 = 4 <= 3
console.log(voir3);

let voir4 = 4 == 4
console.log(voir4);

let voir5 = 4 === 4
console.log(voir5);

let voir6 = 4 != 4
console.log(voir6);

let voir7 = 4 !== 4
console.log(voir7);

let voir8 = 4 != '4'
console.log(voir8);

let voir9 = 4 == '4'
console.log(voir9);

let voir10 = 4 === '4'
console.log(voir10);
 
 //------déclaration d'une fausse comparaison
 let comparaison = "Python"
 let voirComparaison = "jargon"
 console.log(comparaison.length!==voirComparaison.length);

 //-----------------challenge 6--------------
 let resut = 4 > 3 && 10 < 12
 console.log(resut);

 let resut1 = 4 > 3 && 10 > 12
 console.log(resut1);

 let resut2 = 4 > 3 || 10 < 12
 console.log(resut2);

 let resut3 = 4 > 3 || 10 > 12
 console.log(resut3);

 let resut4 = !(4 > 3)
 console.log(resut4);

 let resut5 = !(4 < 3)
 console.log(resut5);

 let resut6 = !(false)
 console.log(resut6);

 let resut7 = !(4 > 3 && 10 < 12)
 console.log(resut7);

 let resut8 = !(4 > 3 && 10 > 12)
 console.log(resut8);

 let resut9 = !(4 === '4')
 console.log(resut9);
//----vérification des mots
 let monV = "dragon"
 let monVa = "python"
 console.log(monV.includes("on"));
 console.log(monVa.includes("on"));

 //---------------------challenge 7
 let temps = new Date()
 console.log(temps.getFullYear());

 console.log(temps.getMonth());

 console.log(temps.getDate());

 console.log(temps.getDay());

 console.log(temps.getHours());

 console.log(temps.getMinutes());

 //----decouvrez les sécondes dépuis janvier 1970
 console.log(temps.getTime());
 