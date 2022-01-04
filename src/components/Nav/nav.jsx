import React from 'react'
import Anderson_Bradford_Resume from '../../assets/files/Anderson_Bradford_Resume.pdf';

const Nav = () => {
    
    return (
        <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-light">
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
                </ul>
                <div className="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        RESUME
                    </button>
                    <div className="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton">
                        <a href={Anderson_Bradford_Resume} download>Resume</a>
                    </div>
                </div>
            </div>
            </div>
        </nav>

    )
}

export default Nav;