import React from 'react';
import AboutMeImg from '../../assets/images/aboutMeImg.jpg';

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 style={{}}>About Me</h1>
            </div>
            <div className="center">
                <img
                   src={AboutMeImg}
                   alt="about-me"
                   className="photo" 
                />
            </div>
            <div className="my-2" >
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
        </section> 
    )
}

export default About;