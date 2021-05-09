import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Languages from "./pages/Languages";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";

const styles = {
  bkgd: {
      background: `linear-gradient(120deg, rgba(255, 243, 242, 1) 30%, rgba(255, 243, 242, 1) 100%)`,
      backgroundAttachment: "fixed",
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
