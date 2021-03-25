import React from "react";
import { Container, Image, Grid } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';
import profpic from "../images/profpic.jpg";

const styles = {
    heading: {
        marginTop: 40
    },
    font: {
        fontSize: "50px",
        fontFamily: "'Poppins', sans-serif",
        color: "whitesmoke",
    },
    img: {
        background: "url(/profpic.jpg)",
    },
    row: {
      height: "300px",
      borderRadius: "200px",
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
    <div>
       <Grid centered>
        <Container style={styles.heading}>
            <Image centered src={profpic}  style={styles.row} alt='blah' />

            <div style={styles.cont}>
                <p style={styles.font}>My name is Kalena Almand. I am a full stack developer student with experience creating front end, 
                mobile-responsive websites. I strive for clean, simple, and polished designs for users, currently working on diverse projects. My overall goal is to contribute to helping companies update their image in this information age.</p>
            </div>
            <br />
        </Container>
       </Grid>
    </div>
    )
};