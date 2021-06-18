import React from 'react';
import Project from '../Project';

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
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;