import React from 'react';
import { Container, Navbar, Nav, NavDropdown, OverlayTrigger, Popover } from 'react-bootstrap';
import './header.css'

const Header = () => {
    return (
        <Container className='con'>
            <Navbar collapseOnSelect expand="lg">

                <Navbar.Brand className='nBrand' href="#home" >
                    <img
                        src='https://firebasestorage.googleapis.com/v0/b/paskah-133e0.appspot.com/o/logo.png?alt=media&token=c72c45d7-7268-4ca5-8223-f02d826da8a6'
                        width="70"
                        height="70"
                        className="d-inline-block"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto" >
                        <Nav.Link className='textNav'>HOME</Nav.Link>
                        <Nav.Link className='textNav'>SHOWREEL</Nav.Link>
                        <Nav.Link className='textNav'>PORTOFOLIO</Nav.Link>

                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                        <Popover.Body>
                                            <NavDropdown.Item href="#action3">ABOUT US</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">TEAM</NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">ANIMATION PROCESS</NavDropdown.Item>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Nav.Link className='textNav'>ABOUT</Nav.Link>
                            </OverlayTrigger>
                        ))}

                        <Nav.Link className='textNav'>CONTACT</Nav.Link>
                    </Nav>

                    <Nav className="me-auto"></Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >
    )
}

export default Header


const navvv = {
    marginLeft: '50px',
}
const textNav = {
    color: 'white'
}