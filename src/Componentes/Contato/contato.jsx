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
import Use from "../Icons/use-contato.png";
import Email from '../Icons/email-contato.png';
import Telefonista from '../Icons/telefonista.jpg'

import "../Contato/contato.css";

function Contato() {
  function enviar() {

    var area = document.querySelector(".mensagemdousuario");
    var nome = document.querySelector(".in_nome-contao");
    var email = document.querySelector(".in_email-conato");
    var res = document.querySelector('.res_contato');
  }
  return (
    <>
      <section>
        <section className="menu_form">
          <img src={Logo} alt="" className="logo" />
          <header className="kz">KAMISARIA ZANUTO</header>

          <div className="menu">
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
        </section>

        <main className="main_contato">
          <section className="foto_contato">
            <img className="telefonista" src={Telefonista} alt="" />
          </section>
          <section className="formulario_contato">
            <h1 className="h1_contato">Entre em contato conosco</h1>

            <section className="container-contato">
              <div className="nome_contato">
                <img className="use_contaato" src={Use} alt="" />
                <label htmlFor="" className="l_nome-contato">
                  Nome:
                </label>
                <input type="text" className="in_nome-contao" placeholder="Digite seu nome" />
              </div>

              <div className="email_contato">
              <img className="img_email-contato" src={Email} alt="" />
                <label htmlFor="" className="l_email-contato">
                  E-mail:
                </label>               
                <input type="text" className="in_email-contato" placeholder="Digite seu e-mail" />
              </div>

              <div className="text-area">
                <fieldset className="area-contato">
                  <legend> > Mensagem </legend>
                  <div className="row">
                    <div className="col-12">
                      <textarea className="descricao" name="descricao" id="txtdescricao" cols="30" rows="5"></textarea>
                    </div>

                  </div>

                </fieldset>
                <button className="button_contato" >Enviar</button>
              </div>
            </section>
          </section>
        </main>

        <div className="footer_cadcli">
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
    </>
  );
}
export default Contato;
