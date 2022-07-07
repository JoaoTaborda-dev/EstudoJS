const listaLivros = require('./array')

function encontraMenores(pivo, array) {
  let menores = 0

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual]
    if (produtoAtual.preco < pivo.preco) {
      menores++
    }
  }

  trocaLugares(array, array.indexOf(pivo), menores)
  return array
}

function trocaLugares(array, de, para) {
  const elem1 = array[de]
  const elem2 = array[para]

  array[para] = elem1
  array[de] = elem2
}

console.log(encontraMenores(listaLivros[2], listaLivros))
