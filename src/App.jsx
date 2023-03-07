import { useState, createContext } from 'react'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarraNav from './components/BarraNav';
export const Contexto = createContext();
function App() {

  const [usuarioPagina, setUsuarioPagina] = useState({ email: '', loggedIn: false, admin: false });
  

  return (
    <Contexto.Provider value={{
      usuarioPagina,
      setUsuarioPagina
    }}>
    <div id="router">
      <Router>
         <BarraNav />
        <Routes>
          <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      </div>
      </Contexto.Provider>
  )
}

export default App
