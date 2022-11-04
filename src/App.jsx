import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projetos from './Pages/Projects/Projetos';
import Empresa from './Pages/Empresa/Empresa';
import Contato from './Pages/Contato/Contato';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
