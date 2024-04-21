import React from 'react';
import InformPessoas from '../Componentes/InformPessoas';
import Contato from '../Componentes/Contato';
import {Outlet, Link} from 'react-router-dom'
import Imgfoto from '../Componentes/imagens/at2.jpg'
import ImgFoto from '../Componentes/imagens/at4.jpg'



const Servicos = ()=>{
    return (
        <div className="topo">
          <div className="inform1">
            <h1>Bem-vindo à </h1>
            <h1>revolução dos vídeos!</h1> 
            <h1>vídeos!</h1> <br />
            <h3>Somos uma startup com o objetivo de facilitar <br /> a produção de conteúdo em larga escala com  <br /> qualidade profissional, capaz de atingir uma <br /> audiência de milhões de seguidores.</h3><br />
            <button className="enviar-button" type="submit">Baixe o app</button>
            <img src={ImgFoto}  style={{ width: '651px', height: '569px', marginLeft: '700px',marginTop: '-300px' }} /> 
            <Outlet />
          </div>
          <div className="card-container-2">
            <div className="card1-2">
              <InformPessoas
                
                topo="Individual"
                text="1 Usuario"
                inform="10 vídeos R$15"
              />
               <button className="enviar-button2-1" type="submit">Cadastrar</button>
            </div>
            <div className="card2-2">
              <InformPessoas
                topo="Profissional - Times"
                text="1-10 Usuários"
                inform="vídeos ilimitados R$40"
                items="+10 Usuários"
                baixo="Vídeos ilimitados R$20"

                />
             <button className="enviar-button2-2" type="submit">Cadastrar</button>
            </div>
            <div className="card3-2">
              <InformPessoas
                topo="Corporativo"
                img={Imgfoto} 
                /> 
               <button className="enviar-button2" type="submit">Contato</button>
            </div>
           </div>
          <Contato />
        </div>
      );
    }
export default Servicos