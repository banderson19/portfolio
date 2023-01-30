import React from 'react';
import  { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { About, Strava, Contact, Nav, Portfolio, Footer, Header } from  './components/index';

function App() {
  return (
    <div className="gradient_bg">
				<Nav/>
        <Header/>
        <Strava/>
        <About/>
        <Contact/>
        <Portfolio/>
        <Footer/>

		</div>
  );
}

export default App;
