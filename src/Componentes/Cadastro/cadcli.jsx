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

function Cadcli() {
  function cadcli(e) {
    var nome = window.document.querySelector(".nome");
    var snome = window.document.querySelector(".snome");
    var email = window.document.querySelector(".email");
    var cel = window.document.querySelector(".cel");
    var data = window.document.querySelector(".data");
    var cep = window.document.querySelector(".cep");
    var end = window.document.querySelector(".end");
    var num = window.document.querySelector(".num");
    var comp = window.document.querySelector(".comp");
    var bairro = window.document.querySelector(".bairro");
    var cid = window.document.querySelector(".cid");
    var est = window.document.querySelector(".est");
    var res = window.document.querySelector(".res_cli");

    // function validarNome(nome) {
    //   const isNome = nome.includes('i') && nome.includes('e')
    //   return isNome;
    // }

    // ====================email.indexOOf('@')==============================================

    function validarEmail(email) {
      const isValid = email.includes("@") && email.includes(".");

      // const  isValid = email.length >=5 && email.length <=12;
      return isValid;
    }

    if (nome.value === "") {
      res.innerHTML = "Preencher todos os campos";
      document.querySelector(".nome").focus();
    } else if (snome.value === "") {
      res.innerHTML = "Informe seu sobrenome";
      res.setAttribute("style", "display", "block");
      document.querySelector(".snome").focus();
    } else if (email.value === "") {
      res.innerHTML = "Informe seu e-mail";
      res.setAttribute("style", "display", "block");
      document.querySelector(".email").focus();
    } else if (!validarEmail(email.value)) {
      res.innerHTML = "[ ERROR ] O formato é diferente!";
      res.setAttribute("style", "display", "block");
      document.querySelector(".email").focus();
    } else if (cel.value === "") {
      res.textContent = "Informe seu celular";
      res.setAttribute("style", "display", "block");
      document.querySelector(".cel").focus();
    } else if (data.value == "") {
      res.innerHTML = "informe seu aniversário";
      document.querySelector(".data").focus();
    } else if (cep.value == "") {
      // var padrao = /\d{5}-\d{3}/gi;
      res.innerHTML = "informe o cep";
      document.querySelector(".cep").focus();
    } else if (end.value == "") {
      res.innerHTML = "informe o endereço";
      document.querySelector(".end").focus();
    } else if (num.value == "") {
      res.innerHTML = "informe o numero da residencia";
      document.querySelector(".num").focus();
    } else if (bairro.value == "") {
      res.innerHTML = "Informe seu bairro";
      document.querySelector(".bairro").focus();
    } else if (cid.value == "") {
      res.innerHTML = "Informe sua cidade";
      document.querySelector(".cid").focus();
    } else if (est.value == "") {
      res.innerHTML = "Qual o estado";
      document.querySelector(".est").focus();
    } else {
      window.location.href = "http://localhost:3000/formulario";
      document.querySelector(".none").value = "";
    }

    //   email.addEventListener('keyup', () => {
    //     if(validarEmail(email.value) === true) {
    //     res.innerHTML =  "[error]"
    //     } else {

    //       res.textContent = "";
  }

  return (
    <>
      <section className="corpo">
        <header className="header_cadcli">
          <img src={Logo} alt="" className="logo_cadcli" />
          <header className="kz_cadcli">KAMISARIA ZANUTO</header>
        </header>

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
            <Link to="/contato">
            <li>Contato</li>
            </Link>
          </ul>
        </div>

       <section className="secaopai">
          <div className="direcionamento">Entre com seus dados</div>
          <div className="secaofilho">
            <div className="lado-cliente">
              <div className="dadoscliente">Dados Pessoais</div>
              <label className="l_nome">nome:</label>
              <input
                type="text"
                className="nome"
                placeholder=" nome"
                autoFocus
              />
              <label className="l_snome">sobre nome:</label>
              <input type="text" className="snome" placeholder=" sobre nome" />
              <label className="l_email">e-mail:</label>
              <input
                type="text"
                pattern="[@-.-com]"
                className="email"
                placeholder=" e-mail"
              />
              <label className="l_cel">celular:</label>
              <input
                type="tel"
                className="cel"
                placeholder=" (xx) xxxxx-xxxx"
              />
              <label className="l_data">aniversário:</label>
              <input type="text" className="data" placeholder=" dia / mês" />
            </div>

            
            

            <div className="lado-endereco">
              <div className="dadosendereco">Dados Res./Com.</div>
              <label className="l_cep">cep:</label>
              <input type="text" className="cep" placeholder=" cep" />
              <label className="l_end">endereço:</label>
              <input type="text" className="end" placeholder="endereço" />
              <label className="l_num">num.:</label>
              <input type="text" className="num" placeholder=" n." />
              <label className="l_comp">compl.:</label>
              <input type="text" className="comp" placeholder=" apto" />
              <label className="l_bairro">bairro:</label>
              <input type="text" className="bairro" placeholder=" bairro" />
              <label className="l_cid">cidade:</label>
              <input type="text" className="cid" placeholder=" cidade" />
              <label className="l_est">uf:</label>
              <input type="text" className="est" placeholder=" UF" />
            </div>
          </div>

          <div className="resposta">
            <div className="res_cli"></div>
            <button className="button_continuar" onClick={cadcli}>
              CONTINUAR
            </button>
          </div>
        </section> 
     
      {/* pattern="\([0-9]{2}\)[9]{1}-[0-9]{3}-[0-9]{4} " */}
         
     

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
export default Cadcli;
