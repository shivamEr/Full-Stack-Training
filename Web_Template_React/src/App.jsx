import React from 'react'
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { Card } from './components/Card';
import { About } from './components/About';
import { Stat } from './components/Stat';
import { GoogleMap } from './components/GoogleMap';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';

const App = () => {
  return (
    <>
      <div className="sticky z-50">
        <Header />
        <Navbar />
      </div>
      <Hero />
      <Card />
      <About />
      <Stat />
      <FAQ />
      <GoogleMap />
      <ContactForm />
    </>
  )
}

export default App;