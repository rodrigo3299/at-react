import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import {Outlet} from 'react-router-dom';

function App() {
  
  const menuItems
   = [
    
    { text: 'Home', link: '/' },
    { text: 'Sobre', link: '/Servicos' },
    { text: 'Contato', link: '/Contato1' },
  
  ];
  
  return (
        <> 
          <Header    menuItems={menuItems} />
          <Outlet/>
          <Footer />
        </>
  )
}

export default App
