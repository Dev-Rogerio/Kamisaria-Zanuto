import React, { useState } from "react";

import "../Servicos/servicos.css";

function Servicos() { 

  function somar () {
    var x = document.querySelector('.valor-1')
    var y = document.querySelector('.valor-2')
    var r = document.querySelector('.resultado')
    var a = Number(x.value) + Number(y.value)
    var u = document.querySelector('.resumo')

    if (x.value === "" || x.value.length < 2) {
      r.innerHTML = "Informe pelo menos 2 valores";
      document.querySelector('.valor-1').focus();
    } 
    else if (y.value === "" || y.value.length < 2) {
      r.innerHTML= '[ERROR} - Mínimo 2 valores'     
      document.querySelector('.valor-2').focus();
    } 
    else {
      r.innerHTML =  `${a}`
      u.innerHTML = `O resultado da Multiplicação é! [ ${a} ]`
      setLimpe({
        z: "",
        v: "",
      }) 
    }
  }
  const [limpe, setLimpe] = useState({
    z: "",
    v: "",
  });

  function subtrair () {    
    var x = document.querySelector('.valor-1')
    var y = document.querySelector('.valor-2')
    var r = document.querySelector('.resultado')  
    var b = Number(x.value) - Number(y.value)   
    var u = document.querySelector('.resumo')

    if (x.value === '' || x.value.length < 2) {
      r.innerHTML = "Informe pelo menos 2 valores";
      document.querySelector('.valor-1').focus();
    }
    else if (y.value ==='' || y.value.length <2 ) {
      r.innerHTML= '[ERROR} - Mínimo 2 valores'     
      document.querySelector('.valor-2').focus();

}    else {
      r.innerHTML= `${b}` 
      u.innerHTML = `O resultado da Subtração é! [ ${b} ]`
      setLimpe({
        z: '',
        v: '',
      })
    }
  }

  function multiplicar () {
    var x = document.querySelector('.valor-1')
    var y = document.querySelector('.valor-2')
    var r = document.querySelector('.resultado')  
    var c = Number(x.value) * Number(y.value)  
    var u = document.querySelector('.resumo')

    if (x.value === '' || x.value.length < 3) {
    r.innerHTML = 'Informe pelo menos 2 valores';
    document.querySelector('.valor-1').focus();
  }
  else if(y.value === "" || y.value.length < 3) {
    r.innerHTML= '[ERROR} - Mínimo 2 valores' 
    document.querySelector('.valor-2').focus();  
  }
  else {
    r.innerHTML = `${c}`
    u.innerHTML = `O resultado da Multiplicação é! [ ${c} ]`
    setLimpe({
      z: '',
      v: '',
    })
  }
  }

  function dividir () {
    var x = document.querySelector('.valor-1')
    var y = document.querySelector('.valor-2')
    var r = document.querySelector('.resultado')
    var u = document.querySelector('.resumo')
    var d = Number(x.value) / Number(y.value)

    if (x.value === "" || x.value.length < 2) {
        r.innerHTML = 'Informe pelo menos 2 valores';
        document.querySelector('.valor-1').focus();
    }
    else if (y.value === "" || y.value.length <2) {
      r.innerHTML = '[ERROR} - Mínimo 2 valores' 
      document.querySelector('.valor-2').focus()     
    }
    else {
      r.innerHTML = `${d}`
      u.innerHTML = `O resultado da Divisão é! [ ${d} ]`
    }
  }

  return ( 
    <>
      <div className="dad">
        <label className="l_valor-1" htmlFor=""> Valor 1  </label>
        <input className="valor-1" type="text" value={limpe.z} onChange={(e) => {(
          setLimpe({
            ...limpe, z: e.target.value
        })

        )}} />
        <label className="l_valor-2" htmlFor=""> Valor 2  </label>
        <input className="valor-2" type="text" value={limpe.v} onChange={(e) => {(
          setLimpe({
            ...limpe, v: e.target.value
          })
        )}} />
        <div className="dosbuttons">
        <button className="somar" onClick={somar} > + </button>
        <button className="subtrair" onClick={subtrair} > - </button>
        <button className="multiplicar" onClick={multiplicar} > * </button>
        <button className="dividir" onClick={dividir} > / </button>
        </div>
        <label className="res-resultado" htmlFor=""> Resultado  </label>
        <div className="resultado"></div>
        <div className="resumo"></div>
      </div>
    </>
  );
}
export default Servicos;
