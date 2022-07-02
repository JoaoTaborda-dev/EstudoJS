const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 5.5]

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 6)
console.log(`Reprovados: ${reprovados}`)
