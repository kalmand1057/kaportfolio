import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Languages from "./pages/Languages";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";

const colorArr = ["#98f5e1", "#a3c4f3", "#fde4cf", "#b9fbc0", "#fcbf82"]
const newColor = Math.floor(Math.random()*colorArr.length)

const styles = {
  bkgd: {
      background: `${colorArr[newColor]}`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }
}

function App() {
  return (
    <div style={styles.bkgd}>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
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
