import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

class Main extends Component {
    render() {
      return (
          <div>
            <h1>Simple Single Page Application</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li>
              <li><NavLink to="/About">About</NavLink></li>
            </ul>
            <div className="content">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/about" element={<About />}/> 
            </Routes>
            </div>
          </div>
      );
    }
  }
export default Main;