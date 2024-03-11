import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './containers'
import { Navbar } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'
import WeatherAppDemo from "./components/Pages/WeatherAppDemo";

const App = () => {
  return (
      <div className="app">
          <Router>
              <Navbar/>
              <Routes>
                  <Route path="/" element={
                      <>
                          <Header/>
                          <About/>
                          <Work/>
                          <Skills/>
                          <Testimonial/>
                          <Footer/>
                      </>
                  }/>
                  <Route path="/page" element={<WeatherAppDemo/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
