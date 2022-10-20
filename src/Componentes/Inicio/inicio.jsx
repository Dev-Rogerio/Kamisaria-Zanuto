import React from "react";
import { Link } from 'react-router-dom'

import "../Inicio/inicio.css";
import Logo from "../Icons/logokz.svg";
import Capa from "../Icons/fotoCapa.svg";
import Iinstagram from "../Icons/instagram.svg";
import Ifacebook from "../Icons/facebook.svg";
import Ipinterest from "../Icons/pinterest.svg";
import Iyoutube from "../Icons/youtube.svg";
import imail from '../Icons/cemail.svg'
import iface from '../Icons/cface.svg'
import iinsta from '../Icons/cinsta.svg'
import itel from '../Icons/ctel.svg'
import iwhats from '../Icons/cwhats.svg'
import itwiter from '../Icons/twiter.svg'


function Inicio() {
  return (
    <container>
      <section className="containner">
        <img className="logo" src={Logo} alt="" />
        <header className="kz">KAMISARIA ZANUTO</header>
       
        <div className="menu">
          <ul>
            <li>Inicio</li>
            <li>Quem-somos</li>
            <li>vestuário
              <ul>
                <li className="banner">Camisa fem.</li>
                <li className="banner">Camisa masc.</li>
                <Link to="/cadcli"><li className="banner">Maneq. virtual</li></Link>
                <li className="banner">Monograma</li>
                <li className="banner">sapatos</li>
              </ul>
            </li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </div>
        <img className="foto_inicio" src={Capa} alt="" />
        <div className="nossatradicao">
          NOSSA TRADIÇÂO
          <div className="texto">
            A Kamisaria Zanuto produz camisas sob medida há 40 anos, nossa
            especialidade é o corte preciso, a costura perfeita e o caseamento
            impecável. Hoje também contamos com a nossa divisão de alfaiataria,
            onde você encontrará tecidos da mais alta qualidade, aviamentos
            especiais e o corte adequado para o seu biotipo.
          </div>
        </div>
        <div className="footer">
          <div className="nossoendereco">
            Nosso Endereço
            <div className="rodape">
              Praça Gen. Gentil Falcão 49
              <div className="rodape">
                Cidade Monções
                <div className="rodape">Brooklin</div>
              </div>
            </div>
          </div>

          <div className="contato">Contato
            <div className="rodape"> <img className="ico" src={imail} alt="" />
            {" "}  contato@kamisariazanuto.com.br
              <div className="rodape"><img className="ico" src={itel} alt="" />
                {" "}(11) 5506-8369
                <div className="rodape"> <img className="ico" src={iwhats} alt="" />
                 {" "} (11) 93240-6348</div>
              </div>
            </div>
          </div>

          <div className="rede">Rede Sociais 
            <div className="rodape"> <img className="ico" src={iinsta} alt="" />
            {" "} kamisaria Zanuto
              <div className="rodape"> <img className="ico" src={iface} alt="" />
               {" "} Kamisaria Zanuto
              <div className="rodape"><img className="ico" src={itwiter} alt="" />
              {" "} Kamisaria Zanuto</div>
              </div>
            </div>
          </div>

          <div className="redesociais">
            <img className="instagram" src={Iinstagram} alt="" />
            <img className="facebook" src={Ifacebook} alt="" />
            <img className="pinterest" src={Ipinterest} alt="" />
            <img className="youtube" src={Iyoutube} alt="" />
          </div>
        </div>
      </section>
    </container>
  );
}
export default Inicio;
