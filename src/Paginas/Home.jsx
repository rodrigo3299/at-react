import InformPessoas from '../Componentes/InformPessoas';
import Contato from '../Componentes/Contato'
import Imgfoto from '../Componentes/imagens/rafinha.png'


function Home() {
  

  return (
    <div className="inform">
     
          <InformPessoas
            name=" Sou o Rodrigo Farias Lima, sou uma pessoa que gosta de ajudar pessoas, praticar esporte como futebol, e torço pro São Paulo Futebol Clube. " 
            email="rodrigolima7192@gmail.com" 
            phone="11 99584-2616" 
            text="Comecei na programação em 2022 na Fiap School. No início, foi desafiador, mas com o tempo me adaptei e me destaquei em design/front-end e HTML." 
         
          />
          <InformPessoas
            name="Muito prazer, meu nome é Rafael Quaresma, sou estudante da área de TI no curso da Fiap School. " 
            email="quaresmar290@gmail.com" 
            phone="11 99881-9933" 
            text="Minhas habilidades estão no design, onde eu consigo deselvolver mais coisas com maior facilidade. Mas eu credito que com dedicação, tudo é possível."
            img={Imgfoto}          
          />
          <InformPessoas
            name="Opa, sou o Victor Lauria gosto de jogar, de ir pra academia e jogar futebol." 
            email="VLCruz37@gmail.com" 
            phone="11 94828-2947" 
            text="Tenho o sonho de me tornar alguém bem sucedido na area de tecnologia e viver bem tenho mais facilidade no front-end com o js e junto com o desing."
          />
         <Contato/>
    </div>
  );
}

export default Home;
