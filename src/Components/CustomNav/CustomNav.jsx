import { GithubOutlined } from "@ant-design/icons";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './CustomNav.css'
import { NavLink } from "react-router-dom";


const CustomNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="Main">
        <Container>
          <Navbar.Brand className="logo">Simulated Api</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="List">
              <NavLink to={"home"}>Home </NavLink>
              <NavLink to={"Docs"}>Docs</NavLink>
              <NavLink to="https://github.com/AbdulRehman1632/Building-API"> <button> <GithubOutlined /> GitHub</button></NavLink> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNav;
