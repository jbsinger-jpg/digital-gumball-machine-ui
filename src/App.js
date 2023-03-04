import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import MyContext from './Context';

function App() {
  const [myContextState, setMyContextState] = useState(null)

  return (
    <MyContext.Provider value={{ myContextState: myContextState, setMyContextState: setMyContextState }}>
      <Routes>
        <Route index path="home-page" element={<HomePage />} />
        <Route index element={<AdminPage />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
