import React from "react";
import { Container, Image } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';
import profpic from "../images/profpic.jpg";

const styles = {
    heading: {
        marginTop: 130
    },
    font: {
        fontSize: "35px",
        fontFamily: "'Nanum Myeongjo', serif"
    },
    font2: {
        fontSize: "20px",
        fontFamily: "'Nanum Myeongjo', serif"
    },
    bkgd: {
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 50%, rgba(51, 51, 51, 0.3) 100%)`,
        height: "103vh",
    },
    img: {
        background: "url(/profpic.jpg)",
    },
    row: {
      height: "300px",
      borderRadius: "200px",
      align: "centered"
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
       <Container style={styles.heading}>
            <div className="ui stackable two column centered grid">
                <div className="two column row">
                    <div className="six wide column">
                        <Image src={profpic}  style={styles.row} alt='blah' />
                    </div>
                    <div className=" ten wide column">
                    <h1 style={styles.font}>ABOUT ME</h1>
                    <p style={styles.font2}>My name is Kalena Almand. I am a full stack developer student with experience creating front end, 
                    mobile-responsive websites. I strive for clean, simple, and polished designs for users, currently working on diverse projects. My overall goal is to contribute to helping companies update their image in this information age.</p>
                    </div>
                </div>
            </div>
       </Container>
    </div>
    )
};