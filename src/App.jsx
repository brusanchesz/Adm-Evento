// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import CadastroPalestra from './pages/CadastroPalestra/CadastroPalestra';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import RotaProtegida from './components/RotaProtegida';

const App = () => {
  return (
    <AuthProvider>{/*aqui eh como as telas vao aparecer la no localhost */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
<<<<<<< HEAD
          <Route path="/palestra" element={<RotaProtegida><CadastroPalestra /></RotaProtegida>} /> {/*so pode depois que fizer login */}
=======
          <Route path="/palestra" element={<RotaProtegida><CadastroPalestra /></RotaProtegida>} />
>>>>>>> a88600e50ce9045cc74baf91e9012807a221da4e
        </Routes>
       </Router>
    </AuthProvider>
  );
};

export default App;
