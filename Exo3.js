/*-----------------------Exo3--------------------------*/
const now = new Date();

const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Ajout de 1 car les mois commencent à 0
const day = now.getDate().toString().padStart(2, '0');
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDate);