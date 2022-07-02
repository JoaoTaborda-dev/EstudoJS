const clientes = [
  {
    nome: 'André',
    cpf: '123456487',
    dependentes: [
      {
        nome: 'Sarah',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
      },
      {
        nome: 'Samila',
        parentesco: 'filha',
        dataNasc: '04/06/2014'
      }
    ]
  },
  {
    nome: 'Juliana',
    cpf: '23482659135',
    dependentes: [
      {
        nome: 'Victor',
        parentesco: 'filho',
        dataNasc: '13/03/2000'
      }
    ]
  }
]

const listaDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes
]

console.table(listaDependentes)
