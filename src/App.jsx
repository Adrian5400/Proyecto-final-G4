import { useState } from 'react'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarraNav from './components/BarraNav';

function App() {


  return (
    <div>
      <Router>
         <BarraNav />
        <Routes>
          <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
</div>
  )
}

export default App
