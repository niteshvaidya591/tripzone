import React from "react";
import "./Footer.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Footer() {
  return (
    <Router>
      <footer className="footer-container">
        <div className="footer-section">
          <div className="footer-col">
            <h2>Tripzone</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Awards</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Feedback</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-col">
            <h2>Main Offices</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">The United States</Link>
                </li>
                <li>
                  <Link to="/">India</Link>
                </li>
                <li>
                  <Link to="/">Brazil</Link>
                </li>
                <li>
                  <Link to="/">Canada</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-col">
            <h2>Sub Offices</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">Australia</Link>
                </li>
                <li>
                  <Link to="/">England</Link>
                </li>
                <li>
                  <Link to="/">France</Link>
                </li>
                <li>
                  <Link to="/">Germany</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-col">
            <h2>Disclaimer</h2>
            <p>
              This layout is created as per part of Sirius UI Recruitments. All
              the above content has no direct relation with Sirius business.
            </p>
          </div>
          <Switch>
            <Route path="/">
              <About />
            </Route>
            <Route path="/">
              <Awards />
            </Route>
            <Route path="/">
              <Contact />
            </Route>
            <Route path="/">
              <Feedback />
            </Route>
          </Switch>
        </div>
      </footer>
    </Router>
  );
}
function About() {
  return <h2></h2>;
}

function Awards() {
  return <h2></h2>;
}

function Contact() {
  return <h2></h2>;
}
function Feedback() {
  return <h2></h2>;
}
