import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid'

const slice = createSlice({
  name: 'noteReducer',
  initialState: {
    noteData: [
          {id: '001001', text: 'Lorem ipsum dolor sit amet.', tags: ['ipsum']},
          {id: '001002', text: 'Duis aute irure dolor in reprehenderit.', tags: ['dolor']},
          {id: '001003', text: 'Excepteur sint occaecat cupidatat non proident.', tags: ['sint']},
          {id: '002001', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', tags: ['dolor', 'sed']}
    ],
    tagsList: ['ipsum', 'dolor', 'sint', 'sed']
  }as NotesInitialStateType,
  reducers: {
    addTag :(state, action:PayloadAction<{ tag: string }>) => {
      state.tagsList = [...state.tagsList, action.payload.tag]
    },
    removeTag: (state, action:PayloadAction<{tag: string}>) => {
      state.tagsList = state.tagsList.filter(tag => tag !== action.payload.tag)
      state.noteData = state.noteData.map(note => (
        {...note, tags: note.tags.filter(tag => tag !== action.payload.tag)}
      ))
    },
    addNote: (state, action:PayloadAction<{ text: string }>) => {
      const text = action.payload.text
      const tags: string[] = []
      const newText = text.split(' ').map(item => {
        if(item.charAt(0) === '#'){
          tags.push(item.substring(1))
          if(!state.tagsList.find((tag) => tag === item.substring(1))){
            state.tagsList = [...state.tagsList, item.substring(1)]
          }
          return item.substring(1)
        }else{
          return item
        }
      }).join(' ')
      state.noteData = [...state.noteData, {id: uuid4(), text: newText, tags}]
    },
    updateNote: (state, action: PayloadAction<{idNote: string, text: string}>) => {
      const {text, idNote} = action.payload
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

      state.noteData = state.noteData.map(note => note.id === idNote ? {...note, text, tags} : note)

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

export const {addTag, addNote, removeTag, removeTagForNote, removeNote, updateNote} = slice.actions
export const noteReducer = slice.reducer


export type NotesInitialStateType = {
  noteData: NoteType[]
  tagsList: string[]
}
export type NoteType = {
  id: string,
  text: string,
  tags: string[]
}