import FiltroCard from '../../components/FiltroCard'
import { Campos } from '../../styles'

import * as S from './styles'

const BarraLateral = () => (
  <Campos>
    <input type="text" placeholder="Buscar contato" />
    <S.Filtros>
      <FiltroCard legenda="contatos não salvos" contador={1} />
      <FiltroCard legenda="contatos salvos" contador={2} />
      <FiltroCard legenda="contatos importantes" contador={3} />
      <FiltroCard legenda="contatos urgentes" contador={4} ativo />
    </S.Filtros>
  </Campos>
)

export default BarraLateral
