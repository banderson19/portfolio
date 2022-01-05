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
                        First created 'Hello World' on the web back in 2016, and now an aspiring web developer looking for real world experience.
                        Started with a bootcamp hosted by Devmountain and have proceeded learning and reading code through other universities and more bootcamps.
                        Creating fullstack websites mainly in the ReactJS framework. At SLCC java, C#, and PHP was introduced to me. Between working in the outdoor industry 
                        and running my own Christmas light installation company. What I have learned is how programming an user friendly application to help run businesses is  
                        what I am passionate about. Processing data and taking the information to intigrate it into a companies current business model to help generate revenue and 
                        give a better experience to their clients and customers. Passionate about coding and business, I am finding my niche to combine both as I move forward into my career. 
                        My goal is the same the companies goals: to reach the final result that is beyond satisfactory. 
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default About;