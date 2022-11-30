import React, { useState } from "react";

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

import "../Newsletter/newsletter.css";

  
var res = window.document.querySelector(".res-newsletter");
var nome = window.document.querySelector(".i-nome");
var email = window.Document.querySelector(".i-email");

const Newsletter = () => {
  
 

  const abrirModal = () => {
    const modal = document.getElementById("modal-promocao");
    modal.classList.add("mostrar");

    modal.addEventListener("click", (e) => {
      if (e.target.id == "fechar") {
        modal.classList.remove("mostrar");
      }
    });
  };

  return (
    <>
      <section className="corpo">
        <div className="menucad">
          <header className="header_cadcli">
            <img src={Logo} alt="" className="logo_cadcli" />
            <header className="kz_cadcli">KAMISARIA ZANUTO</header>
          </header>

          <div className="menu">
            <ul>
              <Link to="/">
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
                  <li className="banner">Newsletter</li>
                  <li className="banner">sapatos</li>
                </ul>
              </li>
              <li>Serviços</li>
              <Link to="/contato">
                <li>Contato</li>
              </Link>
            </ul>
          </div>
        </div>

        <section className="header-newsletter">
          <h2 className="titulo-new">Cadastre-se Em Nossa Newsletter</h2>
          <button className="clique-aqui" onClick={abrirModal}>
            Clique Aqui
          </button>
        </section>

        <div className="footer_newsletter">
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

          <div className="redesociais_cad">
            <img className="instagram" src={Iinstagram} alt="" />
            <img className="facebook" src={Ifacebook} alt="" />
            <img className="pinterest" src={Ipinterest} alt="" />
            <img className="youtube" src={Iyoutube} alt="" />
          </div>
        </div>
      </section>

      {/* https://www.youtube.com/watch?v=pGJB5FgfdMI */}

      <div id="modal-promocao" className="modal-container">
        <div className="modal">
          <button className="fechar" id="fechar">
            X
          </button>
          <h3 className="newsletter">Preencha os dados</h3>
          <form>

          <div className="dad-nome">
            <label htmlFor="l_nome">Nome:</label>
            <input type="text" placeholder="Nome" className="i-nome" />           
            </div>

            <div className="dad-E-mail">
              <label htmlFor="l_email">E-mail:</label>
              <input type="text" placeholder="E-mail" className="i-email" />
            </div>   


            <div className="dad_button">
            <input type="button" value="Cadastrar" className="cadastrar-form" />
            </div>    

            <div className="res-newsletter"></div>     

          </form>
        </div>
      </div>
    </>
  );
};
export default Newsletter;
