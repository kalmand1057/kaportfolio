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
        <Grid>
            <Container>
            <div className="card-container">
                <div className="card-work">
                    <img src={props.image} class="card-img-top" alt="readmegen" id="workimg" />
                    <div class="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.website} className="card-link">Website</a>
                        <a href={props.github} className="card-link">GitHub</a>
                    </div>
                </div>
            </div>
            </Container>
        </Grid>
    </div>
    )
};