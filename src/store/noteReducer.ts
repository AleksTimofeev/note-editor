import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid'

const slice = createSlice({
  name: 'noteReducer',
  initialState: {
    noteData: [
          {id: '001001', text: 'text #hello my #by name Aleks)))', tags: ['hello', 'by']},
          {id: '001002', text: 'text 001 002', tags: ['002']},
          {id: '001003', text: 'text 001 003', tags: ['001']},
          {id: '002001', text: 'text 002 001', tags: ['001', '002']},
          {id: '002002', text: 'text 002 002', tags: ['001']},
          {id: '002003', text: 'text 002 003', tags: ['003']},
          {id: '003001', text: 'text 003 001', tags: ['003']},
          {id: '003002', text: 'text 003 002', tags: ['002']},
          {id: '003003', text: 'text 003 003', tags: ['001', '002', '003']}
    ],
    tagsList: ['001', '002', '003', 'hello', 'by']
  }as InitialStateType,
  reducers: {
    addTag :(state, action:PayloadAction<string>) => {
      state.tagsList = [...state.tagsList, action.payload]
    },
    removeTag: (state, action:PayloadAction<{tag: string}>) => {
      state.tagsList = state.tagsList.filter(tag => tag !== action.payload.tag)
      state.noteData = state.noteData.map(note => (
        {...note, tags: note.tags.filter(tag => tag !== action.payload.tag)}
      ))
    },
    addNote: (state, action:PayloadAction<string>) => {
      const text = action.payload
      const tags: string[] = []
      text.split(' ').map(item => {
        if(item.charAt(0) === '#'){
          tags.push(item.substring(1))
          if(!state.tagsList.find((tag) => tag === item.substring(1))){
            state.tagsList = [...state.tagsList, item.substring(1)]
          }
          return item.substring(1)
        }else{
          return item
        }
      })
      state.noteData = [...state.noteData, {id: uuid4(), text, tags}]
    },
    removeTagForNote: (state, action: PayloadAction<{idNote: string, tag: string}>) => {
      state.noteData = state.noteData.map(note => (
        note.id === action.payload.idNote ? {...note, tags: note.tags.filter(tag => tag !== action.payload.tag)} : {...note}
      ))
    },
    removeNote: (state, action: PayloadAction<{idNote: string}>) => {
      state.noteData = state.noteData.filter(note => note.id !== action.payload.idNote)
    }
  }
})

export const {addTag, addNote, removeTag, removeTagForNote, removeNote} = slice.actions
export const noteReducer = slice.reducer


type InitialStateType = {
  noteData: NoteType[]
  tagsList: string[]
}
export type NoteType = {
  id: string,
  text: string,
  tags: string[]
}