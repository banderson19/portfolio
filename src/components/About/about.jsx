import React from 'react';
import AboutMeImg from '../../assets/images/aboutMeImg.jpg';
import profilePic from '../../assets/images/IMG_0014.jpg';

function About() {
    return (
        <section id="about" className="container mt-3 pt-3">
            <div className="row justify-content-md-center">
                <div className="col col-lg-2 m-4">
                    <img
                    src={profilePic}
                    alt="about-me"
                    className="justify-content-md-center" 
                    style ={{"border-radius": "50%", "height": "250px"}}
                    />
                </div>
                <div className="col col-lg-6 m-2">
                    <p>
                        I first created <span style={{color: "#ed6868", fontWeight: "bold"}}>'Hello World'</span> on the web back in 2016, and now an aspiring web developer looking for real world experience.
                        Started with a bootcamp hosted by <span style={{color: "#ed6868", fontWeight: "bold"}}>Devmountain</span> and have proceeded learning and reading code through other universities and most recently the <span style={{color: "#ed6868", fontWeight: "bold"}}>UofU Bootcamp</span>.
                        Creating fullstack websites mainly in the ReactJS framework. At SLCC <span style={{color: "#ed6868", fontWeight: "bold"}}>java</span>, <span style={{color: "#ed6868", fontWeight: "bold"}}>C#</span>, and <span style={{color: "#ed6868", fontWeight: "bold"}}>PHP</span> was introduced to me. Between working in the outdoor industry 
                        and running my own Christmas light installation company. What I have learned is how programming a user friendly application to help run businesses is  
                        what I am passionate about. Processing data and taking the information to intigrate it into a companies current business model to help generate revenue and 
                        give a better experience to their clients and customers. While developing in <span style={{color: "#ed6868", fontWeight: "bold"}}>MERN</span> stack <span style={{color: "#ed6868", fontWeight: "bold"}}>(MongoDB, Express, ReactJS, and Node)</span> Passionate about coding and business, I am finding my niche to combine both as I move forward into my career. 
                        My goal is the same the companies goals: to reach the final result that is <span style={{color: "#ed6868", fontWeight: "bold"}}>beyond satisfactory</span>. 
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default About;