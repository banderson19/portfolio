import React, { useState } from 'react';
import Card from "react-bootstrap/Card";

function Project(props) {
    console.log(props)
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const appLink = currentProject.deployed;
    const gitLink = currentProject.github;

    return (

        <div className="container d-flex p-4 align-self-center ">
            <hr />
            <div className="card text-center d-flex align-self-center" style={{ width: "500px", height: '275px', background: 'none', border: 'none' }}>
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <img className="card-img img-fluid" src={`${image}`} alt={name} />
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <a href={gitLink} target="_blank" className="card-link" style={{ hover: "bold", color: "black" }}>{name} Github</a>
                            <br/>
                            <a href={appLink} target="_blank" className="card-link" style={{ hover: "bold", color: "black" }}>{name} App</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Card className="col-6" style={{ backgroundColor: "grey", width: "500px" }}>
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <Card.Img
                            variant="top"
                            src={`${image}`}
                            className="card-image"
                            style={{ paddingTop: ".5rem", height: '18rem' }}
                        />
                    </div>
                    <div className="col-sm-7">
                        <Card.Body style={{ backgroundColor: "grey" }}>
                            <Card.Title className="card-title">{name}</Card.Title>
                            <Card.Text className="card-text">{description}</Card.Text>
                            <Card.Link href={appLink} target="_blank" className="card-link" style={{ hover: "bold", color: "black" }}>
                                {name} App
                            </Card.Link>
                            <br></br>
                            <Card.Link href={gitLink} target="_blank" className="card-link" style={{ hover: "bold", color: "black" }}>
                                {name} Github
                            </Card.Link>
                        </Card.Body>
                    </div>
                </div>
            </Card> */}


            {/* <div className="row">
                <div>
                    <img className="mx-auto mt-3 d-block col-3 img-fluid img-thumbnail" src={`${image}`} style={{ width: "18.75rem", height: "18.75rem" }} alt="Generic placeholder image" />
                </div>
                <div className=" my-auto text-center">
                    <h1 className="text-danger fw-bold"><span className="fst-italic">{`${name}`}</span> </h1>
                    <a href={`${appLink}`}><p className="fw-bold">{`${appLink}`}</p></a>
                    <a href={`${gitLink}`}><p className="fw-bold">{`${gitLink}`}</p></a>

                    <h4>{`${description}`}</h4>
                </div>
            </div> */}
        </div>
    )
}


export default Project;
