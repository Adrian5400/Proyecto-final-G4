import { useState, createContext, useContext, useEffect } from 'react'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'
import Pasos from './pages/Pasos'
import Error from './pages/Error'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import BarraNav from './components/BarraNav';
import DasFooter from './components/DasFooter';
import Equipo from './pages/Equipo';
import ListarUsuarios from './pages/ListarUsuarios';
import ListarHerramientas from './pages/ListarHerramientas';
import CrearHerramienta from './pages/CrearHerramienta';
import PreparacionCirujia from './components/PreparacionCirujia';

import HerramientasBusqueda from './pages/HerramientasBusqueda';
import BarraPasos from './components/BarraPasos';

export const Contexto = createContext();
function App() {

  const [usuarioPagina, setUsuarioPagina] = useState({ email: '', loggedIn: false, admin: false });
  

const RutaProtegida = ({children}) => {
  const { loggedIn } = useContext(Contexto).usuarioPagina;
  return loggedIn ? children  : <Navigate to="/login" />;
  };
  
  
const RutaAdmin = ({children}) => {
  const { admin } = useContext(Contexto).usuarioPagina;
  return admin ? children  : <Navigate to="/404" />;
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
            <Route path="/equipo" element={<Equipo />} />

            <Route path="/usuarios" element={<RutaAdmin><ListarUsuarios /></RutaAdmin>} />
            <Route path="/modelos3d" element={<HerramientasBusqueda/>}/>
            <Route path="/herramientas" element={<RutaAdmin><ListarHerramientas /></RutaAdmin>} />
            <Route path="/crearHerramienta" element={<RutaAdmin><CrearHerramienta /></RutaAdmin>} />
            <Route path="/pasosCirujia" element={<RutaProtegida><BarraPasos /></RutaProtegida>} />
            <Route path="/pasosPrep" element={<RutaProtegida><PreparacionCirujia/></RutaProtegida>}/>

            <Route path="/*" element={<Error />} />
          </Routes>
          <DasFooter />
      </Router>
      </div>
      </Contexto.Provider>
  )
}

export default App
