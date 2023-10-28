/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" bg="light" variant="light">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>AWARENESS.ORG</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/posts/post">
              <Nav.Link>Campaigns</Nav.Link>
            </Link>
            <Link passHref href="/posts/new">
              <Nav.Link>Start a Campaign</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-secondary" onClick={signOut}>Sign Out</Button>
      </Container>
    </Navbar>
  );
}
