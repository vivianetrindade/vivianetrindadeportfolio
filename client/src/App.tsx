import React from 'react';
import './App.css';
import NavBarComponent from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './pages/Banner';
import Technologies from './pages/Technologies';
import Timeline from './pages/Timeline';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <Banner />
      <Technologies/>
      <Timeline/>
      <Contact/>
    </div>
  );
}

export default App;
