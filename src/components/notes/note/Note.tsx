import React from 'react';
import {NoteType} from "../../../store/noteReducer";
import styles from './Note.module.scss'

type PropsType = {
  noteData: NoteType
}

export const Note: React.FC<PropsType> = ({noteData}) => {

  const newText = noteData.text.split(' ').map(item => item.charAt(0) === '#' ? item.substring(1) : item)
  

  return (
    <div className={styles.wrapper}>
      <h6>{noteData.id}</h6>
      <p>{newText && newText.map(item => (
        noteData.tags.some((value) => value === item) ? <span className={styles.r}>{item+' '}</span> : `${item} `
      ))}</p>
      <div>
        {noteData.tags.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}