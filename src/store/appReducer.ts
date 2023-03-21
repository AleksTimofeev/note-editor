import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const slice = createSlice({
  name: 'appReducer',
  initialState: {
    modalEditNoteIsShow: true,
    editNoteId: null
  } as InitialStateType,
  reducers: {
    setShowModalEditNote: (state, action: PayloadAction<{isShow: boolean, idNote: string | null}>) => {
      state.modalEditNoteIsShow = action.payload.isShow
      state.editNoteId = action.payload.idNote
    }
  }
})

export const {setShowModalEditNote} = slice.actions
export const appReducer = slice.reducer

type InitialStateType = {
  modalEditNoteIsShow: boolean
  editNoteId: string | null
}