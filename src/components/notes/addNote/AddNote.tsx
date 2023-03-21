import React, {useState} from 'react';
import styles from './AddNote.module.scss'
import {useAppDispatch} from "../../../store/store";
import {addNote} from "../../../store/noteReducer";

export const AddNote = () => {

  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleAddNote = () => {
    dispatch(addNote(value))
  }
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={'add note'}
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAddNote}>add</button>
    </div>
  );
}