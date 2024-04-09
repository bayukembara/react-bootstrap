import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import MENU from "../json/menu.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "../../pages/about.jsx";
import Contact from "../../pages/contact.jsx";
import App from "../../App.jsx";
import ErrorPage from "../../pages/error/errorPage.jsx";

function Navigation() {
  const menu = MENU.map((item, index) => (
    <Nav.Link as={Link} to={item.path} key={index}>
      {item.name}
    </Nav.Link>
  ));

  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">{menu}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default Navigation;
