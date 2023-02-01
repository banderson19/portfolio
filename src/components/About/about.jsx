import React from 'react';
import AboutMeImg from '../../assets/images/aboutMeImg.jpg';
import profilePic from '../../assets/images/IMG_0014.jpg';


/* have gallery of photos in stead of paragraph about me */

function About() {
    return (
        <section id="about" className="container mt-3 pt-3">
            <h2 className="h1-responsive font-weight-bold text-center my-4">About me</h2>
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
                    <p>
                        I first created <span style={{color: "#ed6868", fontWeight: "bold"}}>'Hello World'</span> on the web back in 2016, and now an aspiring web developer looking for real world experience.
                        Started with a bootcamp hosted by <span style={{color: "#ed6868", fontWeight: "bold"}}>Devmountain</span> and have proceeded reading and writing code ever since; through
                        other universities and most recently the <span style={{color: "#ed6868", fontWeight: "bold"}}>UofU Bootcamp</span>.
                        While developing in <span style={{color: "#ed6868", fontWeight: "bold"}}>MERN</span> stack <span style={{color: "#ed6868", fontWeight: "bold"}}>(MongoDB, 
                        Express, ReactJS, and Node)</span> creating fullstack websites. Processing data and taking the information to intigrate it into a companies current business model
                        to help generate revenue and give a better experience to their clients and customers is what I am passionate about.
                        I am finding my niche to combine both as I move forward into my career. 
                        My goal is the same the companies goals: to reach the final result that is <span style={{color: "#ed6868", fontWeight: "bold"}}>beyond satisfactory</span>. 
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default About;