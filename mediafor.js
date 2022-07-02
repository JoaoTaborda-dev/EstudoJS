const notas = [6, 5, 7, 5.5, 4.8]
let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i]
  console.log(somaNotas)
}

function media() {
  let media = somaNotas / notas.length
  console.log(`Sua média foi de ${media}`)
}

media()
