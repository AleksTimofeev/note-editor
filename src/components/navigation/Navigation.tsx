import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './navigation.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {AddTag} from "../addTag/AddTag";
import {removeTag} from "../../store/noteReducer";

export const Navigation = () => {

  const dispatch = useAppDispatch()
  const tagsList = useAppSelector(state => state.notes.tagsList)

  const handleRemoveTag = (e:  React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeTag({tag: e.currentTarget.id}))
  }

  return (
    <div className={styles.wrapper}>
      <AddTag />
      <NavLink to={'/note'}>all</NavLink>
      {tagsList && tagsList.map(item => (
        <NavLink to={`/note/${item}`} key={item} className={styles.link}>
          <>
            {item}
          </>
          <button
            id={item}
            className={styles.tagRemove}
            onClick={handleRemoveTag}
          >X</button>
        </NavLink>
      ))}

    </div>
  );
}