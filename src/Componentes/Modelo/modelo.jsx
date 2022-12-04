import React from "react";

import { Link } from "react-router-dom";

// import _default from "react-bootstrap/esm/Accordion";
import Logo from "../Icons/logokz.svg";
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
import Douglas from "../Icons/douglaspequeno.svg";
import Douglaspq from "../Icons/douglaspequeno.png";
import Xanfrado from "../Icons/xanfrado.png";
import Windsor from "../Icons/windsor1.png";
import Italy from "../Icons/Italy-Redondo.png";
import Presilha from "../Icons/presilha.png";
import Joao from "../Icons/joao.png";
import Italiano from "../Icons/Italiano.png";
import Paris from "../Icons/Paris.png";
import Monaco from "../Icons/monaco.png";
import Ingles from "../Icons/ingles.png";
import Magalhaes from "../Icons/magalhaes.png";
import Americano from "../Icons/usa.svg";
import Imging from "../Icons/inglesdesc.png";

import "../Modelo/modelo.css";

//

function modelo() {
  const Italia = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
    window.querySelector(".figura").src = Imging;
  };

  const Ital = () => {
    window.location.href = "http://localhost:3000/resumo";
  };

  const Ingle = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
    localStorage.setItem("figura", Imging);
  };

  const Mona = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };

  const Par = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };

  const America = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };

  const Maga = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };
  const Win = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };

  const Xan = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };

  const Dogl = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };

  const Joa = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };

  const Presi = () => {
    window.location.href = "http://localhost:3000/descricaoColar";
  };

  return (
    <>
      <containner className="containner_modelo">
        <section className="menu_form">
          <img src={Logo} alt="" className="logo" />
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
                <Link to="/cadcli">
                  <li className="banner">Maneq.virtual</li>
                </Link>
                <li className="banner">Monograma</li>
                <Link to="/newsletter">
                  <li className="banner">Newsletter</li>
                  </Link>
                <li className="banner">sapatos</li>
              </ul>
            </li>
            <li>Serviços</li>
            <Link to="/contato">
              <li>Contato</li>
            </Link>
          </ul>
        </div>

        </section>

        <section className="envelope_aside_modelo">
          <h1 className="desc_medidas_modelo">
            Escolha um modelo de colarinho
          </h1>

          <section className="envelopa_col1_col2">
            <div className="italiano">
              <img id="img-col" className="italiano1" src={Italiano} alt="" />
              <input
                id="radio"
                onClick={() => Italia()}
                className="input_italiano"
                type="radio"
              />{" "}
              Italiano
              <br />
            </div>

            <div className="italy">
              <img id="img-col" className="italy1" src={Italy} alt="" />
              <input
                id="radio"
                onClick={() => Ital()}
                className="input_italy"
                type="radio"
              />{" "}
              Italy
              <br />
            </div>

            <div className="ingles">
              <img id="img-col" className="ingles1" src={Ingles} alt="" />
              <input
                id="radio"
                onClick={() => Ingle()}
                className="input_ingles"
                type="radio"
              />{" "}
              Ingles
              <br />
            </div>

            <div className="monaco">
              <img id="img-col" className="monaco1" src={Monaco} alt="" />
              <input
                id="radio"
                onClick={() => Mona()}
                className="input_monaco"
                type="radio"
              />{" "}
              Monaco
              <br />
            </div>

            <div className="paris">
              <img id="img-col" className="paris1" src={Paris} alt="" />
              <input
                id="radio"
                onClick={() => Par()}
                className="input_paris"
                type="radio"
              />{" "}
              Paris
              <br />
            </div>

            <div className="americano">
              <img id="img-col" className="americano1" src={Americano} alt="" />
              <input
                id="radio"
                onClick={() => America()}
                className="input_americano"
                type="radio"
              />
              Americano
              <br />
            </div>

            <div className="magalhaes">
              <img id="img-col" className="magalhaes1" src={Magalhaes} alt="" />
              <input
                id="radio"
                onClick={() => Maga()}
                className="input_magalhaes"
                type="radio"
              />{" "}
              Magalhães
              <br />
            </div>

            <div className="windsor">
              <img id="img-col" className="windsor1" src={Windsor} alt="" />
              <input
                id="radio"
                onClick={() => Win()}
                className="input_windsor"
                type="radio"
              />{" "}
              Windsor
              <br />
            </div>

            <div className="xanfrado">
              <img id="img-col" className="xanfrado1" src={Xanfrado} alt="" />
              <input
                id="radio"
                onClick={() => Xan()}
                className="input_xanfrado"
                type="radio"
              />{" "}
              Xanfrado
              <br />
            </div>

            <div className="douglaspq">
              <img id="img-col" className="douglaspq1" src={Douglaspq} alt="" />
              <input
                id="radio"
                onClick={() => Dogl()}
                className="input_douglas"
                type="radio"
              />{" "}
              Douglas P
              <br />
            </div>

            <div className="joaodoria">
              <img id="img-col" className="joao1" src={Joao} alt="" />
              <input
                id="radio"
                onClick={() => Joa()}
                className="input_joaodoria"
                type="radio"
              />{" "}
              João Doria
              <br />
            </div>

            <div className="presilha">
              <img id="img-col" className="presilha1" src={Presilha} alt="" />
              <input
                id="radio"
                onClick={() => Presi()}
                className="input_presilha"
                type="radio"
              />{" "}
              Presilha
              <br />
            </div>
          </section>
        </section>

        <div className="footer-form">
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

          <div className="rede_cad">
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
      </containner>
    </>
  );
}
export default modelo;
