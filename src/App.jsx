import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/about" element={<About></About>}></Route>
        <Route exact path="/work" element={<Work></Work>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
