import React from "react";
import { Container, Grid, Header } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 120
    },
    font: {
        fontSize: "70px",
        fontFamily: "'Poppins', sans-serif",
        padding: "15px 0px 15px 30px",
        color: "whitesmoke",
    },
    font2: {
        fontSize: "40px",
        fontFamily: "'Poppins', sans-serif",
        listStyleType: "none",
        color: "#0af5be",
    },
    font3: {
        fontSize: "35px",
        fontFamily: "'Poppins', sans-serif",
        listStyleType: "none",
        color: "#121212",
        background: "#0af5be",
    },
    fix: {
        height: "103vh",
    }
}


export default function Home() {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: { mass: 1, tension: 170, friction: 180 },
    })

    return (
    <div style={styles.fix}>
        <Grid centered>
            <Container style={styles.heading}>
                <h1 style={styles.font}>TECHNOLOGIES</h1>
                <div>
                    <p style={styles.font3}> HTML / CSS / Javascript / APIs / Node.js / Express / MySQL / MongoDB / React </p>
                </div>
                <br />
                <a href="https://docs.google.com/document/d/1X1Bj0mDYDib8btaEo9UiwRb3H2kSgvShm8ZN4pjydIs/edit?usp=sharing" target="_blank" style={styles.font2}> You can view my resume here</a>
            </Container>
        </Grid>
    </div>
    )
};