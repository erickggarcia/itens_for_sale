import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contato from './components/Contato';
import Produtos from './components/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';
import Produto from './components/Produto';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Produtos/>}/>
            <Route path='produto/:id' element={<Produto/>}/>
            <Route path='contato' element={<Contato/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
