import React from 'react';
import Project from '../Project/project.jsx';

//images 
import run_buddy from '../../assets/images/run_buddy.png';
import work_day_scheduler from '../../assets/images/work_day_scheduler.png';
import swiftBulb from '../../assets/images/swiftbulb.jpg';
import weskraftLogo from '../../assets/images/wklogo2.png';

function Portfolio() {
    const projects = [
        {
            name: 'Swift Holiday Lighting',
            description: 'This is my personal christmas light company that I run every holiday season.',
            image: swiftBulb,
            github: 'https://github.com/banderson19/my-app',
            deployed: 'https://banderson19.github.io/my-app/'
        },
        {
            name: 'Weskraft',
            description: 'FPV drone site',
            image: weskraftLogo,
            github: 'https://github.com/banderson19/wesworldfpv',
            deployed: ' https://banderson19.github.io/wesworldfpv/'
        },
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
                <div className="">
                    <Project projects={projects[2]}></Project>
                </div>
                <div className="">
                    <Project projects={projects[3]}></Project>
                </div>              
            </div>
        </section>
    )
}

export default Portfolio;