import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { ROUTES } from './constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={`App`}>
      <BrowserRouter>
        <Header />
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
