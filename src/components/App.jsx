import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import MainPage from "../pages/MainPage/MainPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
