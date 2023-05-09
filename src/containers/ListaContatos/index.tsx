import { useSelector } from 'react-redux'

import Contatos from '../../components/Contatos'
import { MainContainer } from '../../styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <MainContainer>
      <p> Lista de Contatos</p>
      <ul>
        {itens.map((c) => (
          <li key={c.titulo}>
            <Contatos
              id={c.id}
              descricao={c.descricao}
              titulo={c.titulo}
              email={c.email}
              nome={c.nome}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaContatos
