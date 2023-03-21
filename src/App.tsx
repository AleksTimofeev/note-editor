import React from 'react';
import styles from './App.module.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import {Navigation} from "./components/navigation/Navigation";
import {NotesContainer} from "./components/notes/NotesContainer";

function App() {



  return (
    <div className={styles.appWrapper}>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/note'} />} />
        <Route path={'/note'} element={<NotesContainer />}>
          <Route path={'/note/:tag'} element={<NotesContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
