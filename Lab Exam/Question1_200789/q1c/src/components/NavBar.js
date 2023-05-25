import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='flex' to="/">Home</Link>
                        <Link className='flex' to="about">About</Link>
                        <Link className='flex' to="contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
