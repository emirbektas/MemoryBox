import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <Nav.Link as={Link} to="/">
            <Navbar.Brand>Memory Box</Navbar.Brand>
          </Nav.Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/create">
                <Button variant="outline-info">Create a memory</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
