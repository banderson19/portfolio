import React, {useState} from 'react';
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
        <Card style={{ width: "18rem", backgroundColor: "grey", marginTop: ".5rem"}}>
            <Card.Img
                variant="top"
                src={`${image}`}
                className="card-image"
                style={{paddingTop: ".5rem"}}
            />
            <div className="center">
                <Card.Body style={{backgroundColor: "grey"}}>
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Card.Link href={appLink} target="_blank" className="card-link" style={{hover: "bold", color:"black"}}>
                        {name} App
                    </Card.Link>
                    <br></br>
                    <Card.Link href={gitLink} target="_blank" className="card-link" style={{hover: "bold", color:"black"}}>
                        {name} Github
                    </Card.Link>
                </Card.Body>
            </div>
        </Card>
    )
}


export default Project;
