import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
