import { useState } from 'react'
import './App.scss'
import { About, Works, Footer, Skills, Header } from './container';
import { Navbar } from './components';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
