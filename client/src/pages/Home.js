import React from "react";
import { Container, Grid, Header } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 180
    },
    big: {
        fontSize: 120,
        fontFamily: "'Poppins', sans-serif",
        color: "whitesmoke",
    },
    big2: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 60,
        color: "whitesmoke",
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
                <animated.div style={props}>
                    <Header as='h1'style={styles.big}>Hello, I'm Kalena</Header>
                    <Header as='h1' style={styles.big2}>A full stack developer</Header>
                </animated.div>
            </Container>
        </Grid>
    </div>
    )
};