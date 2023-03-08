import { useState, createContext, useContext } from 'react'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'
import Pasos from './pages/Pasos'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import BarraNav from './components/BarraNav';
import DasFooter from './components/DasFooter';



export const Contexto = createContext();
function App() {

  const [usuarioPagina, setUsuarioPagina] = useState({ email: '', loggedIn: false, admin: false });
  

const RutaProtegida = ({children}) => {
  const { loggedIn } = useContext(Contexto).usuarioPagina;
  return loggedIn ? children  : <Navigate to="/login" />;
};


  
  
  
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
            <Route path="/login" element={<Login />} />
            <Route path="/pasos" element={<RutaProtegida><Pasos /></RutaProtegida> } />
        
          </Routes>
          <DasFooter />
      </Router>
      </div>
      </Contexto.Provider>
  )
}

export default App
