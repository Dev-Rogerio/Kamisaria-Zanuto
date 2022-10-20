import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Cadcli from "../src/Componentes/Cadastro/cadcli.jsx";
import Inicio from "../src/Componentes/Inicio/inicio.jsx";
import Formulario from "../src/Componentes/Formulário/formulario.jsx";
import Modelo from '../src/Componentes/Modelo/modelo.jsx';
import Resumo from '../src/Componentes/Resumo/resumo.jsx';
import DescricaoColar from './Componentes/DescricaoColar/descricaoColar.jsx';
import Agradecimento from './Componentes/Agradecimento/agradecimento.jsx';
import "./style.css";

function App() {  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadcli" element={<Cadcli />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/modelo" element={<Modelo/>} />
          <Route path="/resumo" element={<Resumo/>}  />
          <Route path="/descricaocolar" element={<DescricaoColar/>} />
          <Route path="/agradecimento" element={<Agradecimento/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
