import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { ROUTES } from './constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from 'hooks/context';
import useTheme from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Context.Provider value={{ isActive, setIsActive }}>
      <div className={`App ${theme === 'dark' ? 'dark' : 'light'}`}>
        <BrowserRouter>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
