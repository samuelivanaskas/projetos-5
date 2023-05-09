import * as enums from '../utils/enums/Contato'

class Contato {
  titulo: string
  nome: enums.Nome
  email: enums.Email
  descricao: string
  id: number

  constructor(
    titulo: string,
    nome: enums.Nome,
    email: enums.Email,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.nome = nome
    this.email = email
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
