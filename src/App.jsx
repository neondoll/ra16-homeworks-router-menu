import DriftPage from "./pages/DriftPage.jsx";
import ForzaPage from "./pages/ForzaPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Menu from "./components/Menu.jsx";
import TimeAttackPage from "./pages/TimeAttackPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/ra16-homeworks-router-menu">
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/drift" Component={DriftPage} />
          <Route path="/timeattack" Component={TimeAttackPage} />
          <Route path="/forza" Component={ForzaPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
