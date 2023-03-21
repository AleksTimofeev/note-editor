import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {noteReducer} from "./noteReducer";
import {appReducer} from "./appReducer";


export const store = configureStore({
  reducer: {
    notes: noteReducer,
    app: appReducer
  },
})

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector