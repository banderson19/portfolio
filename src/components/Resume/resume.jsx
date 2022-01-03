import React from 'react';
import Anderson_Bradford_Resume from '../../assets/files/Anderson_Bradford_Resume.pdf';


function Resume() {
    return (
        <section>
            <div>
                <h1>My Resume</h1>
            </div>
            <div>
                <a href={Anderson_Bradford_Resume} download>
                    <h4>download my resume</h4> 
                </a>
            </div>
        </section>
    )
}

export default Resume;