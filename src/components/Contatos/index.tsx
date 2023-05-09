import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'
import { BotaoSalvar } from '../../styles'

type Props = Contato

const Contatos = ({
  descricao: descricaoOriginal,
  nome,
  email,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) setDescricao(descricaoOriginal)
  }, [descricaoOriginal])

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" nome={nome}>
        {nome}
      </S.Tag>
      <S.Tag parametro="status" email={email}>
        {email}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    nome,
                    email,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar Contato
            </BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                setEstaEditando(false)
                setDescricao(descricaoOriginal)
              }}
            >
              Cancelar contato
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>
              Editar Contato
            </S.Button>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover contato
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Contatos
