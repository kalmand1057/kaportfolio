import React from "react";
import { Container, } from 'react-bootstrap';

const styles = {
    font: {
        fontSize: "70px",
        fontFamily: "'Cormorant Garamond', serif",
        padding: "15px 0px 15px 30px",
        textAlign: "center",
        color: "#1a1918",
    },
    font2: {
        fontSize: "25px",
        fontFamily: "'Cormorant Garamond', serif",
        listStyleType: "none",
        color: "#1a1918",
    },
    font3: {
        fontSize: "30px",
        fontFamily: "'Cormorant Garamond', serif",
        listStyleType: "none",
        color: "#1a1918",
    },
    cont: {
        marginTop: 40,
    },
    fix: {
        height: "103vh",
    }
}


export default function Home() {
    return (
    <div style={styles.fix}>
        <Container style={styles.cont}>
            <h1 style={styles.font}>TECHNOLOGIES</h1>
            <hr />
            <div>
                <p style={styles.font3}> HTML • CSS • Javascript • APIs • Node.js • Express • MySQL • MongoDB • React </p>
                <br />
            <a href="https://docs.google.com/document/d/1X1Bj0mDYDib8btaEo9UiwRb3H2kSgvShm8ZN4pjydIs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={styles.font2}> You can view my resume here</a>
            </div>
        </Container>
    </div>
    )
};