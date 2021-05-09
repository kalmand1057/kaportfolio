import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "./style.css";

const styles = {
  font: {
      fontFamily: "'Cormorant Garamond', serif",
      color: "#1a1918",
      fontSize: 22,
  },
  bottom: {
    borderBottom: "solid 1px",
    borderColor: "rgba(26, 25, 24, .1)",
  }
}

function Menu() {
    return (
    <div style={styles.bottom}>
      <Navbar collapseOnSelect expand="lg" bg="#fff3f2" variant="light" style={styles.font}>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/aboutme">About Me</Nav.Link>
          <Nav.Link href="/languages">Languages</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="/work">Work</Nav.Link>
          <Nav.Link eventKey={2} href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
    )

    }

export default Menu;
