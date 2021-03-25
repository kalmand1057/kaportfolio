import React from "react";
import { Container, Grid, Header } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 100,
    },
    big: {
        fontSize: 115,
        fontFamily: "'Poppins', sans-serif",
        color: "#ffffff",
        opacity: 2,
    },
    big2: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 60,
        color: "#ffffff",
        opacity: 2,
    },
    fix: {
        height: "103vh",
        width: "95vw"
    },
    cont: {
        marginTop: 40,
        padding: 60,
        backgroundColor: "rgba(236, 237, 238, .3)",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "rgba(236, 237, 238, .5)",
        borderRadius: 50,
        padding: 40,
        boxShadow: "5px 25px 18px rgba(35, 35, 35, 0.3)",
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
        <div>
            <Grid centered>
                <Container style={styles.heading}>
                    <div style={styles.cont}>
                        <animated.div style={props}>
                            <Header as='h1'style={styles.big}>Hello, I'm Kalena</Header>
                            <Header as='h1' style={styles.big2}>A full stack developer</Header>
                        </animated.div>
                    </div>
                </Container>
            </Grid>
        </div>
    </div>
    )
};