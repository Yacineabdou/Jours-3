const now = new Date()
const option = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}
const formattedDate = now.toLocaleString('fr-FR',option)
console.log(formattedDate);