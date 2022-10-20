import React from "react";

import { Link } from "react-router-dom";

import Logo from "../Icons/logokz.svg";
import "../Cadastro/cadcli.css";
import Iinstagram from "../Icons/instagram.svg";
import Ifacebook from "../Icons/facebook.svg";
import Ipinterest from "../Icons/pinterest.svg";
import Iyoutube from "../Icons/youtube.svg";
import imail from "../Icons/cemail.svg";
import iface from "../Icons/cface.svg";
import iinsta from "../Icons/cinsta.svg";
import itel from "../Icons/ctel.svg";
import iwhats from "../Icons/cwhats.svg";
import itwiter from "../Icons/twiter.svg";

import "../Agradecimento/agradecimento.css";

function Agradecimento() {
  return (
    <>

      <section className="containner_cadcli">
        <header className="header_cadcli"></header>
        <img src={Logo} alt="" className="logo_cadcli" />
        <header className="kz_cadcli">KAMISARIA ZANUTO</header>

        <div className="menu_cadcli">
          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <li>
              vestuario
              <ul>
                <li>Camisa fem.</li>
                <li>Camisa masc.</li>
                <li>Maniq. Virtual</li>
                <li>Monograma</li>
                <li>Sapato</li>
              </ul>
            </li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </div>


        {/* =======================================================aside */}


        

        <section className="aside-agradecimento">

        <div className="agradecer">Obrigado por chegar até aqui!</div>
                        
          <div className="mode-agradecimento">" Em breve entraremos em contato para finalização de seu pedido. "</div>
         
        </section>


        {/* =======================================================aside */}

        <div className="footer-descricao">
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

          <div className="contato">
            Contato
            <div className="rodape">
              {" "}
              <img className="ico" src={imail} alt="" />{" "}
              contato@kamisariazanuto.com.br
              <div className="rodape">
                <img className="ico" src={itel} alt="" /> (11) 5506-8369
                <div className="rodape">
                  {" "}
                  <img className="ico" src={iwhats} alt="" /> (11) 93240-6348
                </div>
              </div>
            </div>
          </div>

          <div className="rede">
            Rede Sociais
            <div className="rodape">
              {" "}
              <img className="ico" src={iinsta} alt="" /> kamisaria Zanuto
              <div className="rodape">
                {" "}
                <img className="ico" src={iface} alt="" /> Kamisaria Zanuto
                <div className="rodape">
                  <img className="ico" src={itwiter} alt="" /> Kamisaria Zanuto
                </div>
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
    </>
  );
}
export default Agradecimento;
