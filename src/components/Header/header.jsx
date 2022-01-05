import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and projects</h1> 
                <Typed
                    className="typed-text"
                    strings={["Here you can find anything", "Be careful  what you wish for"]}
                    typeSpeed={40}
                    backSpeed={70}
                    loop
                />
                <a href='#' className="btn-main-offer">conntact  me</a>
            </div>
        </div>
    )
}

export default Header


