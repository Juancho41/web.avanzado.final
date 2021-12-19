import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Catalogo from './componentes/Catalogo';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comentarios from './componentes/Comentarios';


function App() {
  return (
    <BrowserRouter >
      <div className='fondo'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes>

      <Footer />

      </div>

      


    </BrowserRouter>

  );
}

export default App;
