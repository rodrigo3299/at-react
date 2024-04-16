import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import {Outlet} from 'react-router-dom';

function App() {
  
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Serviços', link: '/Servicos' },
    { text: 'Contato', link: '/contato' },
  
  ];
  
  return (
        <> 
          <Header   title="Nosso Portfólio - Bem Vindo a nossa página !!" menuItems={menuItems} />
          <Outlet/>
          <Footer />
        </>
  )
}

export default App
