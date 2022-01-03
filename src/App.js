import React from 'react';
import  { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { About, Contact, Nav, Portfolio, Project, Resume } from  './components/index';

function App() {
  return (
    <div className="gradient_bg">
				<Nav/>
        <About/>
        <Contact/>
        <Portfolio/>
        {/* <Project/> */}
        <Resume/>

		</div>
  );
}

export default App;
