import InformPessoas from '../Componentes/InformPessoas';
import Contato from '../Componentes/Contato'
import Imgfoto from '../Componentes/imagens/at.jpg'



function Home() {
  

  return (
    <div className="inform">
     
          <InformPessoas
            text="Crie seus videos online"  
            inform="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."
            img={Imgfoto} 
             
            
          />
          <InformPessoas
              
          />
          <InformPessoas
       
          />
         <Contato/>
    </div>
  );
}

export default Home;
