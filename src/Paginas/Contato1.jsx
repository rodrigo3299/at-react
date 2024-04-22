import React from 'react';
import Site from '../Componentes/site';
import Contato from '../Componentes/Contato';
import {Outlet, Link} from 'react-router-dom'
import ImgFoto from '../Componentes/imagens/at5.jpg'




const Contato1 = ()=>{
    return (
        <div className="topo">
          <div className="inform3">
            <h1>Duvidas e</h1>
            <h1>suporte, entre</h1>
            <h1>em contato:</h1>
            <img src={ImgFoto}  style={{ width: '190px', height: '50px', marginLeft: '-8px',marginTop: '30px' }} />  
        <section id="contact"> <br /> <br />
      
      <form>
       <input type="text" name="Email: id "placeholder="Nome:" />
       <input type="email" placeholder="E-mail:" />
      <textarea placeholder="Mensagem" />
      <button type="submit">Enviar</button>
      </form>
      </section>
  <Outlet />
       </div>
    <Contato />
    </div>
      );
    }
export default Contato1