import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
    const [currentTab, setCurrentTab] = useState("about")

    const renderTab = () => {
      switch (currentTab) {
        case "about":
          return <About />;
        // case "portfolio":
        //   return <Portfolio />;
        case "contact":
          return <Contact />;
        // case "resume":
        //   return <Resume />;
        default:
          return null;
      }
    };
  return (
    <div>
      <div className="mobile-header">
				<Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
			</div>
		</div>
  );
}

export default App;
