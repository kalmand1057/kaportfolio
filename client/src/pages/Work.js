import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';
import nightin from "../images/nightin.png";
import pizzaclaw from "../images/pizza-claw.png";
import getawayguru from "../images/getawayguru.png";

const styles = {
    heading: {
        marginTop: 120
    },
    big: {
        fontSize: 60,
    },
    row: {
        width: "300px",
        height: "200px",
        borderRadius: "100px",
        alignContent: "center"
    },
    font: {
        fontSize: "70px",
        fontFamily: "'Poppins', sans-serif",
        padding: "15px 0px 15px 30px",
        textAlign: "center",
        color: "whitesmoke",
    },
    font2: {
        fontSize: "20px",
        fontFamily: "'Poppins', sans-serif",
        color: "#0af5be",
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
                <h1 style={styles.font}>PREVIOUS PROJECTS</h1>
                <div className="ui stackable four column grid">
                    <div className="column centered">
                        <Image src={nightin}  style={styles.row} alt='nightin' />
                        <br />
                        <a style={styles.font2} href="https://cascutter.github.io/Project-1-Night-In/">Night In</a>
                    </div>
                    <div className="column centered">
                        <Image src={pizzaclaw}  style={styles.row} alt='pizzaclaw' />
                        <br />
                        <a style={styles.font2} href="https://pizzaclawfeda.herokuapp.com/">Pizza Claw</a>
                    </div>
                    <div className="column centered">
                        <Image src={getawayguru}  style={styles.row} alt='getawayguru' />
                        <br />
                        <a style={styles.font2} href="https://getawayguru.herokuapp.com/">Getaway Guru</a>
                    </div>
                </div>
            </Container>
            </Grid>
    </div>
    )
};

{/* <div className="card-container">
    <div className="card-work">
        <img src={props.image} class="card-img-top" alt="readmegen" id="workimg" />
        <div class="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.website} className="card-link">Website</a>
            <a href={props.github} className="card-link">GitHub</a>
        </div>
    </div>
</div> */}