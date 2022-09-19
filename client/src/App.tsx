import React from 'react';
import './App.css';
import NavBarComponent from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './pages/Banner';
import Technologies from './pages/Technologies';
import Timeline from './pages/Timeline';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <Banner />
      <Technologies/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
