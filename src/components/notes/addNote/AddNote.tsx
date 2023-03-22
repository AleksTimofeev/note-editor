import React, {useState} from 'react';
import styles from './AddNote.module.scss'
import {useAppDispatch} from "../../../store/store";
import {setShowModalEditNote} from "../../../store/appReducer";

export const AddNote = () => {

  const dispatch = useAppDispatch()

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