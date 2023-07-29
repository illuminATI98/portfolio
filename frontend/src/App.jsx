import { useState } from 'react'
import './App.css'
import { About, Footer, Skills, Header } from './container';
import { Navbar } from './components';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
