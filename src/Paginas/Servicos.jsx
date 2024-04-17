import {Outlet, Link} from 'react-router-dom'
const Servicos = ()=>{
    return(
        <div className="inform1">
            <h1>Bem vindo à</h1>
            <h1>revolução dos</h1>
            <h1>videos!</h1>
            <h3>Somos uma startup com o objetivo de facilitar <br /> a produção de conteúdo em larga escala com <br /> qualidade profissional, capaz de atingir uma <br /> audiência de milhões de seguidores. </h3><br/>
            <Outlet/>
        </div>
    )
}

export default Servicos