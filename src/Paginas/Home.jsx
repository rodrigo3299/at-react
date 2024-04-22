import React from 'react';
import Site from '../Componentes/site';
import Contato from '../Componentes/Contato';
import { Outlet, Link } from 'react-router-dom'
import ImgFoto from '../Componentes/imagens/at3.jpg'

function Home() {
  return (
    <div className="topo">
      <div className="inform1">
        <h1>Crie seus vídeos </h1>
        <h1>online</h1> <br />
        <h3>Transforme suas ideias em filmes <br /> memoráveis: onde a criatividade <br /> encontra a simplicidade.</h3><br />
        <button className="enviar-button" type="submit">Começar agora!</button>
        <img src={ImgFoto}  style={{ width: '651px', height: '469px', marginLeft: '700px',marginTop: '-300px' }} /> 
        <Outlet />
      </div>
      <div className="card-container">
        <div className="card1">
          <Site
            title="01"
            text="Youtube"
            inform="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."
          />
        </div>
        <div className="card2">
          <Site
            title="02"
            text="Tik Tok"
            inform="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."
          />
        </div>
        <div className="card3">
          <Site
            title="03"
            text="Facebook"
            inform="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
          />
        </div>
        <div className="card4">
          <Site
            title="04"
            text="Instagram"
            inform="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
          />
        </div>
      </div>
      <Contato />
    </div>
  );
}

export default Home;