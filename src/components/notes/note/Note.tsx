import React from 'react';
import {NoteType, removeNote, removeTagForNote} from "../../../store/noteReducer";
import styles from './Note.module.scss'
import {useAppDispatch} from "../../../store/store";
import {setShowModalEditNote} from "../../../store/appReducer";

type PropsType = {
  noteData: NoteType
}

export const Note: React.FC<PropsType> = ({noteData}) => {

  const dispatch = useAppDispatch()
  const newText = noteData.text.split(' ').map(item => item.charAt(0) === '#' ? item.substring(1) : item)

  const handleRemoveTag = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(removeTagForNote({idNote: noteData.id, tag: e.currentTarget.id}))
  }
  const handleRemoveNote = () => {
    dispatch(removeNote({idNote: noteData.id}))
  }
  const handleEditNote = () => {
    dispatch(setShowModalEditNote({isShow: true, idNote: noteData.id}))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button
          className={styles.editNoteButton}
          onClick={handleEditNote}
        >edit
        </button>
        <button
          className={styles.removeNoteIcon}
          onClick={handleRemoveNote}
        >X
        </button>
      </div>
      <p>{newText && newText.map(item => (
        noteData.tags.some((value) => value === item) ? <span className={styles.textTag}>{item + ' '}</span> : `${item} `
      ))}</p>
      <div className={styles.tags}>
        {noteData.tags.map(item => (
          <span
            className={styles.tag}
            id={item}
            key={item}
            onClick={handleRemoveTag}
            title={'remove tag'}
          >{item}</span>
        ))}
      </div>
    </div>
  );
}