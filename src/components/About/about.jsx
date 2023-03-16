import React from 'react';
import AboutMeImg from '../../assets/images/aboutMeImg.jpg';
import profilePic from '../../assets/images/IMG_0014.jpg';


/* have gallery of photos in stead of paragraph about me */

function About() {
    return (
        <section id="about" className="container mt-3 pt-3">
            <div className="row justify-content-md-center aboutContent">
                <div className="col col-lg-2 mt-4 profilePic">
                    <img
                    src={profilePic}
                    alt="about-me"
                    className="ali" 
                    style ={{"border-radius": "50%", "height": "250px"}}
                    />
                </div>
                <div className="col col-lg-6 mt-2 text-center ">
                    <p style={{color: "#ed6868", fontWeight: "bold"}}>
                        I'm <span style={{color: "black", fontWeight: "bold"}}>Junior React Developer</span> with expertise in the MERN stack. 
                        I specialize in building scalable web applications with <span style={{color: "black", fontWeight: "bold"}}>React, 
                        integrating with RESTful APIs, and creating robust backend solutions using Node.js, Express, and MongoDB. </span> 
                        I'm passionate about creating efficient and user-friendly applications, and I enjoy collaborating with other developers to 
                        deliver <span style={{color: "black", fontWeight: "bold"}}>high-quality code. </span> With my strong understanding of the MERN stack, I'm capable of developing full-stack applications from scratch.
                        If you're looking for a <span style={{color: "black", fontWeight: "bold"}}>skilled and dedicated</span> Junior React Developer, please feel free to get in touch with me.
                        I'm excited to discuss your project and see how I can help <span style={{color: "black", fontWeight: "bold"}}>bring your ideas to life.</span>
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default About;