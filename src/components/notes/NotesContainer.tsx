import React from 'react';
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../store/store";

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
    <div>
      {notesForRender && notesForRender.map(item => (
        <h3 key={item.id}>{item.text}</h3>
      ))}
    </div>
  );
}