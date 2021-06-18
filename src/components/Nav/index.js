import {React, useEffect } from 'react';


function Nav(props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <header className="flex-row px-1">
            <h1>
                <a href="/" style={{fontFamily: 'monospace'}}>
                    Bradford Anderson
                </a>
            </h1>
            <nav>
                <ul className="flex-row" style={{fontFamily: 'monospace'}}>
                    <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                        <span onClick={() => setCurrentTab("about")}>About Me</span>
                    </li>
                    <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                        <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
                    </li>
                    <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                        <span onClick={() => setCurrentTab("contact")}>Contact</span>
                    </li>
                    <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
                        <span onClick={() => setCurrentTab("resume")}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header> 
    )
}



export default Nav;