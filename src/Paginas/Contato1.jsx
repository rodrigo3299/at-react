import React from 'react';
import Site from '../Componentes/site';
import Contato from '../Componentes/Contato';
import { Outlet, Link } from 'react-router-dom'
import ImgFoto from '../Componentes/imagens/at5.jpg';

const Contato1 = () => {
  return (
    <div className="topo">
      <div className="container">
        <div className="inform3">
          <h1>Dúvidas e</h1>
          <h1>suporte, entre</h1>
          <h1>em contato:</h1>
          <img src={ImgFoto} style={{ width: '190px', height: '50px', marginLeft: '-8px', marginTop: '30px' }} />
          <section id="contact">
            <form>
              <input type="text" name="Email: id" placeholder="Digite seu email" />
              <input type="email" placeholder="Digite seu email" />
              <textarea placeholder="Digite sua mensagem" />
              <button type="submit">Enviar</button>
            </form>
          </section>
        </div>
        <Contato />
      </div>
      <Outlet />
      <Site/>
    </div>
  );
};

export default Contato1;