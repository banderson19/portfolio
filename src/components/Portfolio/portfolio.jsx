import React from 'react';
import Project from '../Project/project';

//images 
import run_buddy from '../../assets/images/run_buddy.png';
import work_day_scheduler from '../../assets/images/work_day_scheduler.png';

function Portfolio() {
    const projects = [
        {
            name: 'Work Day Schedule',
            description: 'this a daily scheduling app',
            image: work_day_scheduler,
            github: 'https://github.com/banderson19/work-day-scheduler',
            deployed: 'https://banderson19.github.io/work-day-scheduler/'
        },{
            name: 'Run Buddy',
            description: 'sign up for a personal trainer and hit your fitness goals',
            image: run_buddy,
            github: 'https://github.com/banderson19/run-buddy',
            deployed: 'https://banderson19.github.io/run-buddy/'
        }
    ];


    return (
        <section id="portfolio" className="container">
            <div className="text-center m-5">
                <h1>My Portfolio</h1>
            </div>
            <div className="portfolioContainer">
                <div className="">
                    <Project projects={projects[0]}></Project>
                </div> 
                <div className="">
                    <Project projects={projects[1]}></Project>
                </div>
                    
                
              
            </div>
        </section>
    )
}

export default Portfolio;