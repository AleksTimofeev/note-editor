import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/store";
import {Note} from "./note/Note";
import styles from './NotesContainer.module.scss'
import {AddNote} from "./addNote/AddNote";
import {NoteType} from "../../store/noteReducer";
import {ModalEditNote} from "../modalEditNote/ModalEditNote";

export const NotesContainer = () => {

  const params = useParams<{tag: string}>()
  const {tag} = params
  const tags = useAppSelector(state => state.notes.tagsList)
  const notes = useAppSelector(state => state.notes.noteData)
  let notesForRender: NoteType[] = []
  if (tag === undefined || !tags.some(value => value === tag)){
    notesForRender = notes
  }else{
    notesForRender = notes.filter(item => item.tags.some(value => value === tag))
  }

  return (
    <div className={styles.wrapper}>
      <ModalEditNote />
      <AddNote />
      {notesForRender && notesForRender.map(item => (
        <Note key={item.id} noteData={item} />
      ))}
    </div>
  );
}