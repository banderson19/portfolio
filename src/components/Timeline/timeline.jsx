import React from 'react'


/* have timeline scroll  while screen shrinks */
const Timeline = () => {
    return (
        <div className="container mt-5">
            {/* <div className="row text-center justify-content-center mb-5">
                <div className="col-xl-6 col-lg-8">
                    <h2 className="font-weight-bold">Coding Evolution</h2>
                    <p className="text-muted">We’re very proud of the path we’ve taken.</p>
                </div>
            </div> */}

            <div className="row">
                <div className="col">
                    <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="" data-original-title="2016">
                                <div className="inner-circle"></div>
                                <p className="h5 mt-3 mb-1">2016</p>
                                <p className="h5 text-muted mb-0 mb-lg-0">"Hello World"</p>
                                <hr/>
                                <div className="h6 text-muted mb-0 mb-lg-0">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JS</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="" data-original-title="2018">
                                <div className="inner-circle"></div>
                                <p className="h5 mt-3 mb-1">2018</p>
                                <p className="h5 text-muted mb-0 mb-lg-0">Devmountain Bootcamp</p>
                                <hr/>
                                <div className="h6 text-muted mb-0 mb-lg-0">
                                    <p>ReactJS</p>
                                    <p>NodeJS</p>
                                    <p>SQL</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="" data-original-title="2019">
                                <div className="inner-circle"></div>
                                <p className="h5 mt-3 mb-1">2019</p>
                                <p className="h5 text-muted mb-0 mb-lg-0">SLCC - CS & Information Systems</p>
                                <hr/>
                                <div className="h6 text-muted mb-0 mb-lg-0">
                                    <p>Java</p>
                                    <p>Python</p>
                                    <p>Database Relations & AWS</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="" data-original-title="2021">
                                <div className="inner-circle"></div>
                                <p className="h5 mt-3 mb-1">2021</p>
                                <p className="h5 text-muted mb-0 mb-lg-0">UofU Coding Bootcamp</p>
                                <hr/>
                                <div className="h6 text-muted mb-0 mb-lg-0">
                                    <p>MERN FullStack Developer</p>
                                    <p>GraphQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline