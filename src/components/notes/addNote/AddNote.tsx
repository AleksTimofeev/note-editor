import React, {useState} from 'react';
import styles from './AddNote.module.scss'
import {useAppDispatch} from "../../../store/store";
import {addNote} from "../../../store/noteReducer";
import {setShowModalEditNote} from "../../../store/appReducer";

export const AddNote = () => {

  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleAddNote = () => {
    dispatch(addNote(value))
    setValue('')
  }
  const handleShowModal = () => {
    dispatch(setShowModalEditNote({isShow: true, idNote: null}))
  }
  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleShowModal}
      >add note</button>
    </div>
  );
}