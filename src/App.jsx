import Header from './Componentes/Header';
import {Outlet} from 'react-router-dom';

function App() {
  
  const menuItems
   = [
    
    { text: 'Home', link: '/' },
    { text: 'Sobre', link: '/Servicos' },
    { text: 'Contato', link: '/Contato1' },
    { text: 'Contato', link: '/Home2' },
  
  ];
  
  return (
        <> 
          <Header    menuItems={menuItems} />
          <Outlet/>
          
        </>
  )
}

export default App
