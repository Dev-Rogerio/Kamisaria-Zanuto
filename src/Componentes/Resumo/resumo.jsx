import React, { useState } from "react";

import { Link } from 'react-router-dom'

import Logo from "../Icons/logokz.svg";
import Capa from "../Icons/fotoCapa.svg";
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
import Chanfrado from "../Icons/chanfrado.png";
import Abotoadura from "../Icons/com-abotoadura.png";
import ChanfradoB from "../Icons/Chanfradob.png";
import Relogio from "../Icons/relogio.png";
import Seta from "../Icons/seta.png";
import Quadrado from "../Icons/quadrado.png";
// import Duplo from "../Icons/duplo.png";
import Redondo from "../Icons/redondo.png";

import "../Resumo/resumo.css";

const Resumo = () => {
  return (
    <>
      <section className="containner-resumo">
        <img className="logo" src={Logo} alt="" />
        <header className="kz">KAMISARIA ZANUTO</header>

        <div className="menu">
          <ul>
          <Link to="/" >
            <li>Inicio</li>
            </Link>
            <li>Quem-somos</li>
            <li>
              vestuário
              <ul>
                <li className="banner">Camisa fem.</li>
                <li className="banner">Camisa masc.</li>
                <li className="banner">Maneq. virtual</li>
                <li className="banner">Monograma</li>
                <Link to="/newsletter">
                  <li className="banner">Newsletter</li>
                  </Link>
                <li className="banner">sapatos</li>
              </ul>
            </li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </div>
      </section>

      <section className="envelope_aside_resumo">
        <h1 className="desc_medidas_modelo">Escolha um modelo de punho</h1>

        <section className="envelopa_col1_col2">
          <div className="italiano">
            <img id="img-col" className="italiano1" src={Abotoadura} alt="" />
            <input id="radio" className="input_abotuadura" type="radio" />{" "}
            Abotoadura
            <br />
          </div>

          <div className="italy">
            <img id="img-col" className="italy1" src={Chanfrado} alt="" />
            <input id="radio" className="input_chanfrado" type="radio" />{" "}
            Chanfrado
            <br />
          </div>

          <div className="ingles">
            <img id="img-col" className="ingles1" src={ChanfradoB} alt="" />
            <input id="radio" className="input_botao" type="radio" /> Chanf.1
            Botão
            <br />
          </div>

          <div className="monaco">
            <img id="img-col" className="monaco1" src={Relogio} alt="" />
            <input id="radio" className="input_relogio" type="radio" /> Relógio
            <br />
          </div>

          <div className="paris">
            <img id="img-col" className="paris1" src={Seta} alt="" />
            <input id="radio" className="input_seta" type="radio" /> Seta
            <br />
          </div>

          <div className="americano">
            <img id="img-col" className="americano1" src={Quadrado} alt="" />
            <input id="radio" className="input_quadrado" type="radio" />{" "}
            Quadrado
            <br />
          </div>

          <div className="magalhaes">
            <img id="img-col" className="magalhaes1" src={''} alt="" />
            <input id="radio" className="input_duplo" type="radio" /> Duplo
            <br />
          </div>

          <div className="windsor">
            <img id="img-col" className="windsor1" src={Redondo} alt="" />
            <input id="radio" className="input_redondo" type="radio" /> Redondo
            <br />
          </div>
        </section>
      </section>

      <div className="footer-resumo">
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
    </>
  );
};

export default Resumo;
