import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './containers/index'
import { Navbar } from './components/index'

const App = () => {
  return (
      <div className={"app"}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
  );
}

export default App;
