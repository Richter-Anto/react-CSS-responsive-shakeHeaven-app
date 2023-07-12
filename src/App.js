import './App.css';
import React from "react";
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
