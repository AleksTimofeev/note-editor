import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/store";
import {Note} from "./note/Note";
import styles from './NotesContainer.module.scss'
import {AddNote} from "./addNote/AddNote";

export const NotesContainer = () => {

  const params = useParams<{tag: string}>()
  const {tag} = params
  const tags = useAppSelector(state => state.notes.tagsList)
  const notes = useAppSelector(state => state.notes.noteData)
  const notesForRender = notes.filter(item => item.tags.some(value => value === tag))
  // if(tag === undefined){
  //   tags.map(item => {
  //     notesForRender.push(...notes[item])
  //   })
  // }else if(tag && notes[tag]){
  //   notesForRender.push(...notes[tag])
  // }




  return (
    <div className={styles.wrapper}>
      <AddNote />
      {notesForRender && notesForRender.map(item => (
        <Note key={item.id} noteData={item} />
      ))}
    </div>
  );
}