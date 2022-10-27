import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projetos from './Pages/Projects/Projetos';
import Empresa from './Pages/Empresa/Empresa';
import Contato from './Pages/Contato/Contato';

function App() {

  
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
