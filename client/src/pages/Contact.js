import React from "react";
import { Container } from 'react-bootstrap';

const styles = {
    font: {
        fontSize: "70px",
        fontFamily: "'Cormorant Garamond', serif",
        padding: "15px 0px 15px 30px",
        textAlign: "center",
        color: "#1a1918",
    },
    font2: {
        fontSize: "25px",
        fontFamily: "'Cormorant Garamond', serif",
        listStyleType: "none",
        textAlign: "center",
        color: "#1a1918",
    },
    fix: {
        height: "103vh",
    },
    font3: {
        fontSize: "25px",
        fontFamily: "''Cormorant Garamond', serif",
        listStyleType: "none",
        color: "#1a1918",
    },
    cont: {
        marginTop: 40,
    }
}


export default function Home() {
    return (
    <div style={styles.fix}>
        <Container style={styles.cont}>
            <h1 style={styles.font}>CONTACT</h1>
            <hr />
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
    </div>
    )
};



