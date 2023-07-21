import "./App.css";
import Game from "./components/Game/Game";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/guess-flag/" element={<Home />}></Route>
        <Route path="/guess-flag/game" element={<Game />}></Route>
      </Routes>
    </div>
  );
}

export default App;
