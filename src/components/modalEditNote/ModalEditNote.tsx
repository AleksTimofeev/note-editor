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

  const [value, setValue] = useState(idNote ? editText : '')

  const handleClose = () => {
    dispatch(setShowModalEditNote({isShow: false, idNote: null}))
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleUpdateNote = () => {
    if (value && idNote) {
      dispatch(updateNote({idNote, text: value}))
      setValue('')
      dispatch(setShowModalEditNote({isShow: false, idNote: null}))
    }
  }
  const handleAddNote = () => {
    if (value) {
      dispatch(addNote({text: value}))
      setValue('')
      dispatch(setShowModalEditNote({isShow: false, idNote: null}))
    }
  }

  useEffect(() => {
    setValue(editText)
  }, [isShow, editNoteData])

  return (
    <>
      {isShow && <div className={styles.wrapper}>
        <textarea
          value={value}
          onChange={handleChange}
        />
        {
          idNote ?
            <button
              className={styles.btnSave}
              onClick={handleUpdateNote}
            >save
            </button>
            :
            <button
              className={styles.btnSave}
              onClick={handleAddNote}
            >add note</button>
        }
        <button
          className={styles.btnClose}
          onClick={handleClose}
        >close
        </button>
      </div>}
    </>

  );
}