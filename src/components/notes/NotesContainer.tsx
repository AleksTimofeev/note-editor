import React from 'react';
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../store/store";
import {Note} from "./note/Note";
import styles from './NotesContainer.module.scss'

export const NotesContainer = () => {

  const location = useLocation()
  const activeTag = location.pathname.substring(1)
  const tags = useAppSelector(state => state.notes.tagsList)
  const notes = useAppSelector(state => state.notes.noteData)
  const notesForRender = []
  if(activeTag === 'all'){
    tags.map(item => {
      notesForRender.push(...notes[item])
    })
  }else{
    notesForRender.push(...notes[activeTag])
  }




  return (
    <div className={styles.wrapper}>
      {notesForRender && notesForRender.map(item => (
        <Note key={item.id} noteData={item} />
      ))}
    </div>
  );
}