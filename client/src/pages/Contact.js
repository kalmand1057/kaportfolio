import React from "react";
import { Container, Grid } from 'semantic-ui-react';
import {useSpring, animated, } from 'react-spring';

const styles = {
    heading: {
        marginTop: 50
    },
    font: {
        fontSize: "35px",
        fontFamily: "'Nanum Myeongjo', serif",
        padding: "15px 0px 15px 30px",
        textAlign: "center"
    },
    font2: {
        fontSize: "16px",
        fontFamily: "'Nanum Myeongjo', serif",
        listStyleType: "none"
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
       <Container style={styles.heading}>
           <h1 style={styles.font}>CONTACT</h1>
           <div className="ui stackable four column centered grid" style={styles.font2}>
                <div className="column">
                    <a href="https://github.com/kalmand1057">GitHub</a>
                </div>
                <div className="column">
                    <a href="https://www.linkedin.com/in/kalena-almand/">LinkedIn</a>
                </div>
                <div className="column">
                    <p>Phone: 210-788-1111</p>
                </div>
                <div className="column">
                    <p>Email: kalenaalmand@gmail.com</p>
                </div>
           </div>
       </Container>
    </div>
    )
};


{/* <ul className="contacts" style={styles.font2}>
<li><a href="https://github.com/kalmand1057">GitHub</a></li>
<br />
<li><a href="https://www.linkedin.com/in/kalena-almand/">LinkedIn</a></li>
<br />
<li>Phone: 210-788-1111</li>
<br />
<li>Email: kalenaalmand@gmail.com</li>
</ul> */}
