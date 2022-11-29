import React, { useState } from 'react'


import '../Modal/modal.css';


const Modal = () => {
    return (
        <>
       <div id='modal-promoção' className="modal-container">
        <div className="modal">
        <button className='fechar'>X</button>
        <h3 className="newsletter" >Cadastre-se na Newsletter</h3>
        <form>
            <input type="text" placeholder='e-mail' className='input-form' />
            <input type="button" value="Cadastrar" className='input-cadastrar' />
        </form>




        </div>
       </div>
        </>
    )
}
export default Modal;