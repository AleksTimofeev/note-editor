import React from 'react';
import styles from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import {Navigation} from "./components/navigation/Navigation";
import {NotesContainer} from "./components/notes/NotesContainer";

function App() {

  return (
    <div className={styles.appWrapper}>
      <Navigation />
      <Routes>
        <Route path={'*'} element={<NotesContainer />} />
      </Routes>
    </div>
  );
}

export default App;
