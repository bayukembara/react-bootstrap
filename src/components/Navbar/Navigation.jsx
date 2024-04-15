import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import MENU from "../json/menu.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import About from "../../pages/about.jsx";
import Contact from "../../pages/contact.jsx";
import Blog from "../../pages/blog.jsx";
import App from "../../App.jsx";
import ErrorPage from "../../pages/error/errorPage.jsx";

function Navigation() {
  const menu = MENU.map((item, index) => (
    <Nav.Link
      as={NavLink}
      to={item.path}
      key={index}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {item.name}
    </Nav.Link>
  ));

  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className={({ isActive }) => ""}>
            Testing
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
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default Navigation;
