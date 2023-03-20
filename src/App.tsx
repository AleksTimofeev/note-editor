import React, {useEffect} from 'react';
import styles from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import {Navigation} from "./components/navigation/Navigation";

function App() {

  return (
    <div className={styles.appWrapper}>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<h1>all notes</h1>} />
      </Routes>
    </div>
  );
}

export default App;
