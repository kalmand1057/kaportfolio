import React from "react";
import { Container, Grid, Header } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 180
    },
    big: {
        fontSize: 80,
        fontFamily: "'Nanum Myeongjo', serif"
    },
    bkgd: {
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 50%, rgba(51, 51, 51, 0.3) 100%)`,
        height: "100vh",
    },
    big2: {
        fontFamily: "'Nanum Myeongjo', serif",
        fontSize: 50,
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
                <animated.div style={props}>
                    <Header as='h1'style={styles.big}>Hello, I'm Kalena</Header>
                    <Header as='h1' style={styles.big2}>A full stack developer</Header>
                </animated.div>
            </Container>
        </Grid>
    </div>
    )
};