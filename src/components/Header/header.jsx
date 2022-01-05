import React from 'react'
import Typed from 'react-typed';
import github from '../../assets/images/github.png';
import linkedIn from '../../assets/images/linkedin.png';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Full stack web developer</h1> 
                <Typed
                    className="typed-text"
                    strings={["Javascript ES6", "HTML5", "CSS", "React", "Bootstrap", "JQuery", "Node.js", "Express.js", "Sequelize", "mongoDB", "GraphQL"]}
                    typeSpeed={60}
                    backSpeed={30}
                    loop
                />
                <div className="container">
                    <div className="linkButton">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/banderson19">
                            <img src={github} alt="github url"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/bradford-anderson-9731087b">
                            <img src={linkedIn} alt="linkedIn url"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header


