import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/store";
import {Note} from "./note/Note";
import styles from './NotesContainer.module.scss'

export const NotesContainer = () => {

  const params = useParams<{tag: string}>()
  const {tag} = params
  console.log(tag)
  const location = useLocation()
  console.log(location)
  const activeTag = location.pathname.substring(1)
  const tags = useAppSelector(state => state.notes.tagsList)
  const notes = useAppSelector(state => state.notes.noteData)
  const notesForRender = []
  if(tag === undefined){
    console.log(tag)
    tags.map(item => {
      notesForRender.push(...notes[item])
    })
  }else if(tag){
    notesForRender.push(...notes[tag])
  }




  return (
    <div className={styles.wrapper}>
      {notesForRender && notesForRender.map(item => (
        <Note key={item.id} noteData={item} />
      ))}
    </div>
  );
}