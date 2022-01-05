import React, {useState} from 'react'
import Anderson_Bradford_Resume from '../../assets/files/Anderson_Bradford_Resume.pdf';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);

    const changeNavbarBackground = () => {
        if(window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbarBackground);
    // <nav id="navbar" className="navbar active fixed-top navbar-expand-lg navbar-light">

    return (
        <nav id="navbar" className={navbar ? 'navbar active fixed-top navbar-expand-lg navbar-dark' : 'navbar fixed-top navbar-expand-lg navbar-light'}>
            <div className="container">
            <a className={navbar ? 'navbar-brand' : "navbar-brand-top"}  href="#">Bradford Anderson</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
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