import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import useTheme from './hooks/useTheme';
import style from './App.module.css';
import Parse from 'parse';
import { PersonComponent } from './PersonComponent';
const PARSE_APPLICATION_ID = 'KnattpmQQW6mgrVGVCjGqHgFyLzJffEtMCa0v1jy';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '4dyP8U37mMaY3qkbd1ITyBTjasN6A9Yc6wsRRyoZ';
Parse.initialize(
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY,
  'm2L3wi3kidoQwWWXwXm2dCCWhB8Lr0D7kS14pslH'
);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme === 'dark' ? style.dark : style.light}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <PersonComponent />
    </div>
  );
}

export default App;
