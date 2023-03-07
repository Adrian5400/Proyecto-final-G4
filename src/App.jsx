import { useState } from 'react'
import BarraNav from './pages/BarraNav';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'
import './App.css'
import Pasos from './pages/Pasos'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
      <Pasos />
      </Router>
    </div>
  )
}

export default App
