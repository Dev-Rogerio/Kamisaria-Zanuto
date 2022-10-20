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
    var bar = window.document.querySelector(".bairro");
    var cid = window.document.querySelector(".cid");
    var est = window.document.querySelector(".est");
    var res = window.document.querySelector(".res");

    var caractere = true;




  if(email.value == ''){
    res.textContent ='Preencher os campos corretamente'
  } else {
    console.log(email.value)
  }

    
   email.addEventListener('keyup', () => {
    if(validarEmail(email.value) !== true) {
      res.textContent = "[error] O formato é diferente!  Ex: name@.com";

    } else {
      res.textContent = "Error"
    }

   })

   function validarEmail (e) {
    var caracteres = /^[_a-z0-9-] +(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return caracteres.test(e)

   }

    


    // if (nom.value == "") {
    //   res.innerHTML = "Preencher os campos vazios";
    //   document.querySelector(".nome").focus();

    // } else if (sno.value == "") {
    //   res.innerHTML = "Informe o sobrenome";
    //   document.querySelector(".snome").focus();

    // } else if (eme.value == "" ) {     
      
    //   res.innerHTML = "e-mail inválido";
    //   document.querySelector(".email").focus();     
      
      

    // } else if (cel.value == "") {
    //   res.innerHTML = "informe o celular";
    //   document.querySelector(".cel").focus();
      
    // } else if (ani.value == "") {
    //   res.innerHTML = "informe a data de aniversário";
    //   document.querySelector(".data").focus();

    // } else if (cep.value == "") {
    //   var padrao = /\d{5}-\d{3}/gi;
    //   res.innerHTML = "informe o cep";
    //   document.querySelector(".cep").focus();
      
    // } else if (end.value == "") {
    //   res.innerHTML = "Informe o endereço";
    //   document.querySelector(".end").focus();

    // } else if (num.value == "") {
    //   res.innerHTML = "informe o numero da residencia";
    //   document.querySelector(".num").focus();

    // } else if (bar.value == "") {
    //   res.innerHTML = "Informe seu bairro";
    //   document.querySelector(".bairro").focus();
      
    // } else if (cid.value == "") {
    //   res.innerHTML = "Informe sua cidade";
    //   document.querySelector(".cid").focus();

    // } else if (est.value == "") {
    //   res.innerHTML = "Qual o estado";
    //   document.querySelector(".est").focus();

    // } else {
    //   window.location.href = "http://localhost:3000/formulario";
    //   document.querySelector(".none").value = "";
    // }
  }

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
       

        <section className="card_cadcli">
          <div className="card_dados">Entre com seus dados</div>
          <main className="card_col1">
            <p className="card_pessoais">Dados pessoais</p>

            <section className="bloco_pessoal">
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
                // pattern="\([0-9]{2}\)[9]{1}-[0-9]{3}-[0-9]{4} "
                className="cel"
                placeholder=" (xx) xxxxx-xxxx"
              />

              <label className="l_data">aniversário:</label>
              <input type="text" className="data" placeholder=" dia / mês" />
            </section>
          </main>

          <main className="card_col2">
            <div className="card_resid">Dados Res./Com.</div>

            <section className="bloco_residencial">
              <div className="div_cep">
                <label className="l_cep">cep:</label>
                <input type="text" className="cep" placeholder=" cep" />
              </div>

              <div className="div_end">
                <label className="l_end">endereço:</label>
                <input type="text" className="end" placeholder="endereço" />
              </div>

              <div className="div.num">
                <label className="l_num">num.:</label>
                <input type="text" className="num" placeholder=" n." />
              </div>

              <div className="div_comp">
                <label className="l_comp">compl.:</label>
                <input type="text" className="comp" placeholder=" apto" />
              </div>

              <div className="div_bairro">
                <label className="l_bairro">bairro:</label>
                <input type="text" className="bairro" placeholder=" bairro" />
              </div>

              <div className="div_cid">
                <label className="l_cid">cidade:</label>
                <input type="text" className="cid" placeholder=" cidade" />
              </div>

              <div className="div_est">
                <label className="l_est">uf:</label>
                <input type="text" className="est" placeholder=" UF" />
              </div>

              <button className="booton_cadicli" onClick={cadcli}>
                CONTINUAR
              </button>
            </section>
          </main>
        </section>
        <div className="res"></div>
        {/*} ========================================<main></main>*/}

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
export default Cadcli;
