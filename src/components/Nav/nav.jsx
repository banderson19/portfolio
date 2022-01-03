import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

            
            <a className="navbar-brand" href="#">Bradford Anderson</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    )
}

export default Nav;