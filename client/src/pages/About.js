import React from "react";
import { Container, Image, Row, Col } from 'react-bootstrap';
import profpic from "../images/profpic.jpg";

const styles = {
    font: {
        fontSize: "35px",
        fontFamily: "'Cormorant Garamond', serif",
        color: "#1a1918",
    },
    img: {
        background: "url(/profpic.jpg)",
        alignContent: "center"
    },
    row: {
      height: "350px",
    //   borderRadius: "200px",
    },
    fix: {
        height: "103vh",
    },
    cont: {
        marginTop: 40,
    }
}

export default function Home() {
    return (
    <div style={styles.fix}>
        <Container style={styles.cont}>
            <Row className="justify-content-md-center">
                <Col sm={4}>
                    <Image src={profpic}  style={styles.row} alt='me' />
                </Col>
                <Col sm={8}>
                    <p style={styles.font}>My name is Kalena Almand. I am a full stack developer student with experience creating front end, 
                    mobile-responsive websites. I strive for clean, simple, and polished designs for users, currently working on diverse projects. My overall goal is to contribute to helping companies update their image in this information age.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
    )
};