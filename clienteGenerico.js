function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = valor => {
    this.saldo += valor
  }
}

const joao = new Cliente('João', '123456789', 'joao@gmail.com', 500)
joao.depositar(500)

console.log(joao)
