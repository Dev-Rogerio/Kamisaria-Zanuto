import React, { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../Icons/logokz.svg";
import "../Formulário/formulario.css";
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
import Ingles from "../Icons/ingles.png";
import Italy from "../Icons/Italy-Redondo.png";
import Italiano from "../Icons/Italiano.png";
import Magalhaes from "../Icons/joao.png";
import Windsor from "../Icons/windsor1.png";
import Paris from "../Icons/Paris.png";
import Monaco from "../Icons/monaco.png";
import Maniquin from "../Icons/maniquin1.png";


function Formulario() {
  function Receber() {
    var res = document.querySelector(".res");
    var col = document.querySelector(".colar");
    var pal = document.querySelector(".pala");
    var man = document.querySelector(".manga");
    var tor = document.querySelector(".torax");
    var cin = document.querySelector(".cintura");
    var qua = document.querySelector(".quadril");
    var cum = document.querySelector(".cumprimento");
    var pun = document.querySelector(".punho");

    if (col.value == "") {
      res.innerHTML = " Preencha os campos em branco";
      document.querySelector(".colar").focus();
    } else if (pal.value == "") {
      res.innerHTML = "Qual a medida da pala";
      document.querySelector(".pala").focus();
    } else if (man.value == "") {
      res.innerHTML = "Qual a medida da manga";
      document.querySelector(".manga").focus();
    } else if (tor.value == "") {
      res.innerHTML = "Qual a medida do torax";
      document.querySelector(".torax").focus();
    } else if (cin.value == "") {
      res.innerHTML = "Qual a medida da cintura";
      document.querySelector(".cintura").focus();
    } else if (qua.value == "") {
      res.innerHTML = "Qual a medida do quadril";
      document.querySelector(".quadril").focus();
    } else if (cum.value == "") {
      res.innerHTML = "Qual a medida do cumprimento";
      document.querySelector(".cumprimento").focus();
    } else if (pun.value == "") {
      res.innerHTML = "Qual a medidaas do punho";
      document.querySelector(".punho").focus();
    } else {
      window.location.href = "http://localhost:3001/modelo";
      
    }
    
  }

  function TrocarColar() {
    document.querySelector("#figura").src = Douglas;
  }

  function TrocarPala() {
    document.getElementById("figura").src = Ingles;
  }

  function TrocarManga() {
    document.getElementById("figura").src = Italy;
  }

  function TrocarTorax() {
    document.getElementById("figura").src = Italiano;
  }

  function TrocarCintura() {
    document.getElementById("figura").src = Magalhaes;
  }

  function TrocarWindsor() {
    document.getElementById("figura").src = Windsor;
  }

  function TrocarCumprimento() {
    document.getElementById("figura").src = Paris;
  }

  function TrocarPunho() {
    document.getElementById("figura").src = Monaco;
  }

  return (
    <>
      <section className="containner_form">
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

        <section className="aside_form">
          <h1 className="medidas">Insira suas medidas</h1>

          <section className="envelope_aside">
            <section className="bloco_form">
              <div className="Colar">
                <div className="l_colar">Colar</div>
                <input
                  onClick={TrocarColar}
                  type="number"
                  onBlur=""
                  name="cCol"
                  className="colar"
                  placeholder="  0.00"
                  maxLength="2"
                  required
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Pala">
                <div className="l_pala">Pala</div>
                <input
                  onClick={TrocarPala}
                  className="pala"
                  type="number"
                  placeholder="0.00"
                  required
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Manga">
                <div className="l_manga">Manga </div>
                <input
                  onClick={TrocarManga}
                  id="manga"
                  className="manga"
                  type="number"
                  placeholder="  0.00"
                  required
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Torax">
                <div className="l_torax">Tórax</div>
                <input
                  onClick={TrocarTorax}
                  className="torax"
                  type="number"
                  placeholder="  0.00"
                  required
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Cintura">
                <div className="l_cintura">Cintura </div>
                <input
                  onClick={TrocarCintura}
                  className="cintura"
                  type="number"                  placeholder="  0.00"
                  required
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Quadril">
                <div className="l_quadril">Quadril </div>
                <input
                  onClick={TrocarWindsor}
                  className="quadril"
                  type="number"
                  placeholder="  0.00"
                  required
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Cumprimento">
                <div className="l_cumprimento"> Cumpr.</div>
                <input
                  onClick={TrocarCumprimento}
                  className="cumprimento"
                  type="number"
                  placeholder="  0.00"
                  required
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Punho">
                {" "}
                <div className="l_punho">Punho </div>
                <input
                  onClick={TrocarPunho}
                  className="punho"
                  type="number"
                  placeholder="  0.00"
                  required
                />
                <h3 className="video">vídeo</h3>
              </div>

              <img className="med_col" id="figura" src={Maniquin}></img>

              <div className="res"></div>

              <button onClick={Receber} className="booton_form">
                {" "}
                CONTINUAR{" "}
              </button>
            </section>
          </section>
          
        </section>

        <div className="footer_form">
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

export default Formulario;
