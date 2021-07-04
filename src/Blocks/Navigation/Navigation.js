import './Navigation.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

function Navigation() {
    return (
        <Router>
                <nav className="nav-container app-container">
                    <ul className="nav-links__group">
                        <li className="nav-links__item"><Link className="nav-links__item-link" to="#weather">WEATHER</Link></li>
                        <li className="nav-links__item"><Link className="nav-links__item-link" to="#destinations">DESTINATIONS</Link></li>
                        <li className="nav-links__item"><Link className="nav-links__item-link" to="#quote">GET A QUOTE</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                     
                    </Route>
                    <Route path="/users">
                    
                    </Route>
                    <Route path="/">
                    
                    </Route>
                </Switch>
      
        </Router>

    )
}

export default Navigation
