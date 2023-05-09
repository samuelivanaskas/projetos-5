import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      descricao: 'Adicionar contato',
      nome: enums.Nome.IMPORTANTE,
      email: enums.Email.PENDENTE,
      titulo: 'Adicionar contato completo'
    },
    {
      id: 2,
      descricao: 'Remover contato',
      nome: enums.Nome.URGENTE,
      email: enums.Email.PENDENTE,
      titulo: 'Remover contatos duplos'
    },
    {
      id: 3,
      descricao: 'Não tenho contato',
      nome: enums.Nome.NORMAL,
      email: enums.Email.PENDENTE,
      titulo: 'Visualizar contato'
    }
  ]
}

const contatosSlices = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexdoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexdoContato >= 0) {
        state.itens[indexdoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato salvo com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlices.actions

export default contatosSlices.reducer
