import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './navigation.module.scss'

export const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to={'/'}>all</NavLink>
    </div>
  );
}