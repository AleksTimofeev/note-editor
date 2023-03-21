import React, {useEffect, useState} from 'react';
import styles from './ModalEditNote.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setShowModalEditNote} from "../../store/appReducer";
import {addNote, updateNote} from "../../store/noteReducer";

export const ModalEditNote = () => {

  const dispatch = useAppDispatch()
  const isShow = useAppSelector(state => state.app.modalEditNoteIsShow)
  const idNote = useAppSelector(state => state.app.editNoteId)
  const editNoteData = useAppSelector(state => state.notes.noteData.find(note => note.id === idNote))
  const editText = editNoteData?.text.split(' ').map(
    item => editNoteData.tags.some(value => value === item) ? `#${item}` : item).join(' ')
  // debugger
  const [value, setValue] = useState(editText)

  const handleClose = () => {
    dispatch(setShowModalEditNote({isShow: false, idNote: null}))
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleUpdateNote = () => {
    if(value && idNote){
      dispatch(updateNote({idNote, text: value}))
    }
  }

  useEffect(() => {
    setValue(editText)
  }, [isShow, editNoteData])

  return (
    <>
      {isShow && <div className={styles.wrapper}>
        <button
          onClick={handleClose}
        >close</button>
        <textarea
          value={value}
          onChange={handleChange}
        />
        <button
          onClick={handleUpdateNote}
        >save</button>
      </div>}
    </>

  );
}