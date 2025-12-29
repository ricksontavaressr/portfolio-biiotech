import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import ComoAtuamos from './pages/ComoAtuamos';
import Sobre from './pages/Sobre';
import Casos from './pages/Casos';
import Modelo from './pages/Modelo';
import Contato from './pages/Contato';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como-atuamos" element={<ComoAtuamos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/modelo" element={<Modelo />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
