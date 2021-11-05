import React from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <div>
            <Container style={con}>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand style={nBrand}>
                        <Link to='/'>
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/paskah-133e0.appspot.com/o/logo.png?alt=media&token=c72c45d7-7268-4ca5-8223-f02d826da8a6'
                                width="70"
                                height="70"
                                className="d-inline-block"
                                alt="this a logo,check u'r connection internet"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink to='/' style={link}>
                                    HOME
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/showreel' style={link}>
                                    SHOWREEL
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/portofolio' style={linkActive}>
                                    PORTOFOLIO
                                </NavLink>
                            </Nav.Link>

                            {['bottom'].map((placement) => (
                                <OverlayTrigger
                                    trigger="click"
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Popover id={`popover-positioned-${placement}`}>
                                            <Popover.Body>
                                                <Nav.Link>
                                                    <NavLink to='/about' style={link}>
                                                        ABOUT US
                                                    </NavLink>
                                                </Nav.Link>
                                                <Nav.Link>
                                                    <NavLink to='/team' style={link}>
                                                        TEAM
                                                    </NavLink>
                                                </Nav.Link>
                                                <Nav.Link>
                                                    <NavLink to='/animationprocess' style={link}>
                                                        ANIMATION PROCESS
                                                    </NavLink>
                                                </Nav.Link>
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link style={link}>
                                        ABOUT
                                    </Nav.Link>
                                </OverlayTrigger>
                            ))}

                            <Nav.Link>
                                <NavLink to='/contact' style={link}>
                                    CONTACT
                                </NavLink>
                            </Nav.Link>

                        </Nav>
                        <Nav className="me-auto"></Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container >
        </div>
    )
}

export default Header

const link = {
    textDecoration: 'none',
    color: '#7c7c7c',
    fontWeight: '500'
}
const linkActive = {
    textDecoration: 'none',
    color: '#ea5b23',
    fontWeight: '500'
}
const nBrand = {
    marginLeft: '29%'
}
const con = {
    marginTop: '5%',
}