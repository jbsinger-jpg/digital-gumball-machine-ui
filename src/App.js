import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route index path="home-page" element={<HomePage />} />
      <Route index element={<AdminPage />} />
    </Routes>
  );
}

export default App;
