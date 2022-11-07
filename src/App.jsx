import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NovoProjeto from './Pages/NewProject/NewProject';
import Empresa from './Pages/Empresa/Empresa';
import Contato from './Pages/Contato/Contato';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Projetos from './Pages/Projects/Projetos';

function App() {


  return (
    <>
      <Router>
        <Nav />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' element={<Projetos />} />
            <Route path='/newproject' element={<NovoProjeto />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
