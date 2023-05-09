import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campos } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [nome, setNome] = useState(enums.Nome.NORMAL)
  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(
      titulo,
      nome,
      enums.Email.PENDENTE,
      descricao,
      2
    )
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novos Contatos</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campos type="number" placeholder="Número Contato" />
        <Campos
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Nome do Contato"
        />
        <Campos type="email" placeholder="Email do Contato" />
        <Campos
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Descrição do Contato"
        />
        <Opcoes>
          <p>Contatos prioridade</p>
          {Object.values(enums.Nome).map((nome) => (
            <Opcao key={nome}>
              <input
                value={nome}
                name="nome"
                type="radio"
                onChange={(evento) =>
                  setNome(evento.target.value as enums.Nome)
                }
                id={nome}
                defaultChecked={nome === enums.Nome.NORMAL}
              />{' '}
              <label htmlFor={nome}>{nome}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar novo Contato</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
