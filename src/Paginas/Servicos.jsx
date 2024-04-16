import {Outlet, Link} from 'react-router-dom'
const Servicos = ()=>{
    return(
        <div className="inform">
            <h1>Projetos de 2023</h1><br/>
            <h2> Estes são alguns dos nossos projetos:</h2><br/>
            <Outlet/>
        </div>
    )
}

export default Servicos