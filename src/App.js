import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Cadcli from "./Componentes/Cadastro/cadcli.jsx";
import Inicio from "./Componentes/Inicio/inicio.jsx";
import Formulario from "./Componentes/Formulário/formulario.jsx";
import Modelo from "./Componentes/Modelo/modelo.jsx";
import Resumo from "./Componentes/Resumo/resumo.jsx";
import DescricaoColar from "./Componentes/DescricaoColar/descricaoColar.jsx";
import Agradecimento from "./Componentes/Agradecimento/agradecimento.jsx";
import Contato from "./Componentes/Contato/contato.jsx";
import Quemsomos from "./Componentes/Quemsomos/quemsomos.jsx";
import Servicos from "./Componentes/Servicos/servicos.jsx";
import Newsletter from '../src/Componentes/Newsletter/newsletter.jsx';
import Modal from '../src/Componentes/Modal/modal.jsx';


import "./style.css";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadcli" element={<Cadcli />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/modelo" element={<Modelo />} />
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/descricaocolar" element={<DescricaoColar />} />
          <Route path="/agradecimento" element={<Agradecimento />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quemsomos" element={<Quemsomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/modal" element={<Modal />} />
         
        </Routes>
      </Router>
    </div>
  );
}
export default App;
