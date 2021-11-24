import React from "react";
import { Container, Card, Button, CardGroup } from 'react-bootstrap';
import nightin from "../images/nightin.png";
import pizzaclaw from "../images/pizza-claw.png";
import getawayguru from "../images/getawayguru.png";

const styles = {
    big: {
        fontSize: 60,
    },
    row: {
        // width: "300px",
        height: "250px",
        // borderRadius: "100px",
        alignContent: "center"
    },
    font: {
        fontSize: "70px",
        fontFamily: "'Cormorant Garamond', serif",
        padding: "15px 0px 15px 30px",
        textAlign: "center",
        color: "#1a1918",
    },
    font2: {
        fontSize: "20px",
        fontFamily: "'Cormorant Garamond', serif",
        color: "#1a1918",
    },
    fix: {
        height: "103vh",
    },
    cont: {
        marginTop: 40,
    }
}


export default function Home() {
    return (
    <div style={styles.fix}>
            <Container style={styles.cont}>
                <h1 style={styles.font}>PREVIOUS PROJECTS</h1>
                <hr />

<CardGroup>
  <Card>
    <Card.Img variant="top" src={nightin}  style={styles.row} alt='nightin' />
    <Card.Body style={styles.font2}>
      <Card.Title>A Night In</Card.Title>
      <Card.Text>
      Utilizing multiple APIs, HTML, CSS and Javascript,  this website allows the user to browse new movies, and new recipes for food and cocktails to try.
      </Card.Text>
      <Button variant="outline-dark" href="https://cascutter.github.io/Project-1-Night-In/" target="_blank" rel="noopener noreferrer">Find Something To Do</Button>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={pizzaclaw}  style={styles.row} alt='pizzaclaw' />
    <Card.Body style={styles.font2}>
      <Card.Title>Pizza Claw</Card.Title>
      <Card.Text>
      Using Node, Express, Passport, MySQL and Sequelize this app will allow the user to create a login, create their own pizzas, and access previous creations
      </Card.Text>
      <Button variant="outline-dark" href="https://pizzaclawfeda.herokuapp.com/" target="_blank" rel="noopener noreferrer">Make A Pizza</Button>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={getawayguru}  style={styles.row} alt='getawayguru' />
    <Card.Body style={styles.font2}>
      <Card.Title>Getaway Guru</Card.Title>
      <Card.Text>
      Putting together our knowledge of React and previous languages learned, we created an app for a budget friendly traveler that will give the user access to Google Maps, a Budget tracker, 5 day weather forecast and notes to make traveling easier.
      </Card.Text>
      <Button variant="outline-dark" href="https://getawayguru.herokuapp.com/" target="_blank" rel="noopener noreferrer">Explore</Button>
    </Card.Body>
  </Card>
</CardGroup>

            </Container>
    </div>
    )
};
