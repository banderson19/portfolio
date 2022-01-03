import React from 'react';
import AboutMeImg from '../../assets/images/aboutMeImg.jpg';

function About() {
    return (
        <section id="about" className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-2 m-4">
                    <img
                    src={AboutMeImg}
                    alt="about-me"
                    className="justify-content-md-center" 
                    style ={{"border-radius": "50%", "height": "250px"}}
                    />
                </div>
                <div className="col col-lg-4 m-2">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                    condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                    mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                    Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                    justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                    dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                    Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default About;