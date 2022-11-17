import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import useTheme from './useTheme';
import style from './App.module.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme === 'dark' ? style.dark : style.light}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
