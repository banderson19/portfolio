import React from 'react'

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
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                <div className="inner-circle"></div>
                                <p className="h6 mt-3 mb-1">2016</p>
                                <p className="h6 text-muted mb-0 mb-lg-0">Devmountain Bootcamp</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                <div className="inner-circle"></div>
                                <p className="h6 mt-3 mb-1">2018</p>
                                <p className="h6 text-muted mb-0 mb-lg-0">Devmountain Bootcamp x2</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                <div className="inner-circle"></div>
                                <p className="h6 mt-3 mb-1">2019</p>
                                <p className="h6 text-muted mb-0 mb-lg-0">SLCC<br/> Computer Science and Information Systems</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                <div className="inner-circle"></div>
                                <p className="h6 mt-3 mb-1">2021</p>
                                <p className="h6 text-muted mb-0 mb-lg-0">UofU Coding Bootcamp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline