import React, { useState, useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    // const ctx = useContext(myContext)  

    return (
      <Menu secondary className="navbar">
        <Link to="/" onClick={closeMobileMenu} className="navitem"> Home </Link>
        <Link to="/aboutme" onClick={closeMobileMenu} className="navitem"> About Me </Link>
        <Link to="/languages" onClick={closeMobileMenu} className="navitem"> Technologies </Link>
        <Link to="/work" onClick={closeMobileMenu} className="navitem"> Work </Link>
        <Link to="/contact" onClick={closeMobileMenu} className="navitem"> Contact </Link>
      </Menu>
    )

    }

export default Navbar;