import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './navigation.module.scss'
import {useAppSelector} from "../../store/store";

export const Navigation = () => {

  const tagsList = useAppSelector(state => Object.keys(state.notes.noteData))

  return (
    <div className={styles.wrapper}>
      <NavLink to={'/note'}>all</NavLink>
      {tagsList && tagsList.map(item => (
        <NavLink to={`/note/${item}`} key={item}>{item}</NavLink>
      ))}

    </div>
  );
}