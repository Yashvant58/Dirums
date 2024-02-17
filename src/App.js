import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Nav from './Components/Nav';
import Artworks from './Components/Artworks';
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Nav/>
    <Routes>
      <Route path='/'element={<Artworks/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    

  );
}

export default App;
