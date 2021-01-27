import React from "react";
import { Container, Grid, Header } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 180
    },
    big: {
        fontSize: 60,
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
            <Container>
            <h1>CONTACT</h1>
            <ul className="contacts">
                <li><a href="https://github.com/kalmand1057">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/kalena-almand/">LinkedIn</a></li>
                <li>Phone: 210-788-1111</li>
                <li>Email: kalenaalmand@gmail.com</li>
            </ul>
            </Container>
        </Grid>
    </div>
    )
};