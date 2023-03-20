import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid'

const slice = createSlice({
  name: 'noteReducer',
  initialState: {
    noteData: [],
    tagsList: []
  },
  reducers: {}
})

export const noteReducer = slice.reducer