const notas = [5, 6, 7, 8, 9]

let somaDasNotas = 0

notas.forEach(nota => {
  somaDasNotas += nota
})

let media = somaDasNotas / notas.length

console.log(media)
