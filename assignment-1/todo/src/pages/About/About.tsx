import { Component } from "solid-js";
import { Card } from "solid-bootstrap";

const About: Component<{}> = () => {
    return ( 
        <Card
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
            class="m-2"
        >
            <Card.Header>Impressum</Card.Header>
            <Card.Body>
            <Card.Title>This website was made by</Card.Title>
            <Card.Text>
                Daniil Alekseev and Denis Koshelev
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default About;
