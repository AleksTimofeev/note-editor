import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid'

const slice = createSlice({
  name: 'noteReducer',
  initialState: {
    noteData: {
      '001': [
        {id: '001001', text: 'text 001001', tags: ['001', '002']},
        {id: '001002', text: 'text 001002', tags: ['002']},
        {id: '001003', text: 'text 001003', tags: ['001']}
      ],
      '002': [
        {id: '002001', text: 'text 002001', tags: ['001', '002']},
        {id: '002002', text: 'text 002002', tags: ['001']},
        {id: '002003', text: 'text 002003', tags: ['003']}
      ],
      '003': [
        {id: '003001', text: 'text 003001', tags: ['003']},
        {id: '003002', text: 'text 003002', tags: ['002']},
        {id: '003003', text: 'text 003003', tags: ['001', '002', '003']}
      ]
    },
    tagsList: ['001', '002', '003']
  }as InitialStateType,
  reducers: {}
})

export const noteReducer = slice.reducer


type InitialStateType = {
  noteData: {
    [key:string]: NoteType[]
  },
  tagsList: string[]
}
type NoteType = {
  id: string,
  text: string,
  tags: string[]
}