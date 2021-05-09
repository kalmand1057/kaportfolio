import React from "react";
import { Container, Jumbotron } from 'react-bootstrap';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 100,
    },
    big: {
        fontSize: 115,
        fontFamily: "'Cormorant Garamond', serif",
        color: "#1a1918",
        opacity: 2,
    },
    big2: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 60,
        color: "#1a1918",
        opacity: 2,
    },
    fix: {
        height: "103vh",
    },
    cont: {
        marginTop: 40,
        padding: 60,
        backgroundColor: "rgba(236, 237, 238, .3)",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "rgba(236, 237, 238, .5)",
        borderRadius: 50,
        // padding: 40,
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
            <Jumbotron fluid>
                <Container style={styles.heading}>
                    <animated.div style={props}>
                        <h1 style={styles.big}>Hello, I'm Kalena</h1>
                        <h1 style={styles.big2}>A full stack developer</h1>
                    </animated.div>
                </Container>
            </Jumbotron>
        </div>
    </div>
    )
};