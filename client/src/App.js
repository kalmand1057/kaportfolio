import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Languages from "./pages/Languages";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const styles = {
  bkgd: {
      background: `linear-gradient(120deg, rgba(248, 63, 118, 1) 30%, rgba(63, 161, 248, 1) 100%)`,
      backgroundAttachment: "fixed",
    }
}

function App() {
  return (
    <div style={styles.bkgd}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <Languages />
            <Work />
            <Contact />
          </Route>
            <Route exact path="/aboutme">
              <About />
            </Route>
            <Route exact path="/languages">
              <Languages />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
