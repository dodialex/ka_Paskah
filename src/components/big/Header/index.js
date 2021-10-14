import React from 'react';
import { Navbar, Nav, NavDropdown, OverlayTrigger, Popover } from 'react-bootstrap';
import './header.css'

const Header = () => {
    return (
        <div style={navvv}>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand style={textNav} href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="me-auto"></Nav>

                    <Nav className="me-auto" >
                        <Nav.Link style={textNav}>Home</Nav.Link>
                        <Nav.Link style={textNav}>ShowReel</Nav.Link>
                        <Nav.Link style={textNav}>Portofolio</Nav.Link>

                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                        <Popover.Body>
                                            <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Team</NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">Animation Proccess</NavDropdown.Item>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Nav.Link style={textNav}>About</Nav.Link>
                            </OverlayTrigger>
                        ))}

                        <Nav.Link style={textNav}>Contact</Nav.Link>
                    </Nav>

                    <Nav className="me-auto"></Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}

export default Header


const navvv = {
    marginLeft: '50px',
}
const textNav = {
    color: 'white'
}