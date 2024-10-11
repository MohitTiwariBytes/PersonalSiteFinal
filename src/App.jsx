import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'

function App() {
  var options = {
    "animate": true,
    "patternWidth": 416.82,
    "patternHeight": 500,
    "grainOpacity": 0.14,
    "grainDensity": 1,
    "grainWidth": 1,
    "grainHeight": 1
  }
  grained("#root", options);

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
