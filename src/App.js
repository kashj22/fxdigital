import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Episode from "./components/Episode";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes/:id" element={<Episode />} />
      </Routes>
    </div>
  );
}

export default App;
