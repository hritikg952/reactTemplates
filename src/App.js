import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Button } from "./components/Button/Button";
import { GridComponent } from "./components/grid/GridComponent";
import { Cards } from "./components/cards/Cards";
import { forms } from "./components/forms/forms";
import { Alert } from "./components/alert/Alert";
import { Headers } from "./components/Headers/Headers";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <ul>
              <li>
                <Link to="/navbar" style={{ color: "black" }}>
                  Navbar
                </Link>
              </li>
              <li>
                <Link to="/button" style={{ color: "black" }}>
                  Button
                </Link>
              </li>
              <li>
                <Link to="/grid" style={{ color: "black" }}>
                  Grid
                </Link>
              </li>
              <li>
                <Link to="/card" style={{ color: "black" }}>
                  Card
                </Link>
              </li>
              <li>
                <Link to="/forms" style={{ color: "black" }}>
                  forms
                </Link>
              </li>
              <li>
                <Link to="/alert" style={{ color: "black" }}>
                  Alert
                </Link>
              </li>
              <li>
                <Link to="/headers" style={{ color: "black" }}>
                  Headers
                </Link>
              </li>
            </ul>
          );
        }}
      />
      <Route path="/navbar" exact component={NavBar} />
      <Route path="/button" exact component={Button} />
      <Route path="/grid" exact component={GridComponent} />
      <Route path="/card" exact component={Cards} />
      <Route path="/forms" exact component={forms} />
      <Route path="/alert" exact component={Alert} />
      <Route path="/headers" exact component={Headers} />
    </Router>
  );
}

export default App;
