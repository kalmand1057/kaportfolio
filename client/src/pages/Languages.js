import React from "react";
import { Container, Grid, Header } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 50
    },
    font: {
        fontSize: "35px",
        fontFamily: "'Nanum Myeongjo', serif",
        padding: "15px 0px 15px 30px"
    },
    font2: {
        fontSize: "16px",
        fontFamily: "'Nanum Myeongjo', serif",
        listStyleType: "none"
    },
    bkgd: {
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 50%, rgba(51, 51, 51, 0.3) 100%)`,
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
    <div style={styles.bkgd}>
        <Grid centered>
            <Container style={styles.heading}>
                <h1 style={styles.font}>Technologies</h1>
                <ul style={styles.font2}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                </ul>
                <br />
                <a href="https://docs.google.com/document/d/1X1Bj0mDYDib8btaEo9UiwRb3H2kSgvShm8ZN4pjydIs/edit?usp=sharing" target="_blank" style={styles.font2}> You can view my resume here</a>
            </Container>
        </Grid>
    </div>
    )
};