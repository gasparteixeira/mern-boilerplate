import React from "react";
import { H1 } from "../components/Heading";
import { Container, Row, Col } from "reactstrap";

const Home = () => (
    <Container fluid>
        <H1 text="Welcome to my website" />
        <p>That's the home container</p>
    </Container>
)

export default Home;