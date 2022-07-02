function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = valor => {
    this.saldo += valor
  }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo)
  this.saldoPoup = saldoPoup
}

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor
}

const joao = new ClientePoupanca(
  'João',
  '123456789',
  'joao@gmail.com',
  500,
  2500
)

joao.depositarPoup(3500)

console.log(joao)

console.log(joao.saldoPoup)
