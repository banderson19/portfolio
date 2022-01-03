import React from 'react';
import Project from '../Project/project';

//images 
import run_buddy from '../../assets/images/run_buddy.png';

function Portfolio() {
    const projects = [
        {
            name: 'Work Day Scheduler',
            description: 'this a daily scheduling app',
            image: 'run_buddy.png',
            github: 'https://github.com/banderson19/work-day-scheduler',
            deployed: 'https://banderson19.github.io/work-day-scheduler/'
        },{
            name: 'Run Buddy',
            description: 'sign up for a personal trainer and hit your fitness goals',
            image: 'run_buddy.png',
            github: 'https://github.com/banderson19/run-buddy',
            deployed: 'https://banderson19.github.io/run-buddy/'
        }
    ];

    return (
        <section className="container-fluid">
            <div className="justify-content-md-center">
                <h1 className="col align-self-center">My Portfolio</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col col-4">
                    <Project projects={projects[0]}></Project>
                </div> 
                <div className="col col-4">
                    <Project projects={projects[1]}></Project>
                </div>
                    
                
              
            </div>
        </section>
    )
}

export default Portfolio;