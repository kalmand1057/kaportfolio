import React from "react";
import { Container, Grid } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 120
    },
    font: {
        fontSize: "70px",
        fontFamily: "'Poppins', sans-serif",
        padding: "15px 0px 15px 30px",
        textAlign: "center",
        color: "whitesmoke",
    },
    font2: {
        fontSize: "25px",
        fontFamily: "'Poppins', sans-serif",
        listStyleType: "none",
        color: "whitesmoke",
    },
    fix: {
        height: "103vh",
    },
    font3: {
        fontSize: "25px",
        fontFamily: "'Poppins', sans-serif",
        listStyleType: "none",
        color: "#0af5be",
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
       <Grid centered>
        <Container style={styles.cont}>
            <h1 style={styles.font}>CONTACT</h1>
                <ul className="contacts">
                    <li style={styles.font2}><a href="https://github.com/kalmand1057"  style={styles.font3}>GitHub</a></li>
                    <br />
                    <li style={styles.font2}><a href="https://www.linkedin.com/in/kalena-almand/"  style={styles.font3}>LinkedIn</a></li>
                    <br />
                    <li style={styles.font2}>210-788-1111</li>
                    <br />
                    <li style={styles.font2}>kalenaalmand@gmail.com</li>
                </ul>
        </Container>
       </Grid>
    </div>
    )
};



