import React from "react";
import "./Navbar.css";
// import { Container, Col, Row } from "react-bootstrap";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">VamsiBooking</span>
          <div className="navItems">
            <button className="nab-Btn">Register</button>
            <button className="nab-Btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
