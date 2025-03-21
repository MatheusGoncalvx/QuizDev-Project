import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>


    </>
  )
}

export default App
