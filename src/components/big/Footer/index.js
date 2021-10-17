import React from 'react'
import { Container, Image, Row, Col, Card, Navbar } from 'react-bootstrap'
import { TitleFooter } from '../../small'
import { Link } from 'react-router-dom'

const Footer = ({ text1, text2, text3 }) => {
    return (
        <div style={divFooter}>
            <Card style={di}>
                <Container style={container}>
                    <Row xs={2} md={6}>

                        <Col md={{ span: 3 }}>
                            <TitleFooter title="Our Work" />
                            <Link to='/showreel' style={link}>
                                <TitleFooter text="Animation Showreel" />
                            </Link>
                            <Link to='/portofolio' style={link}>
                                <TitleFooter text="Animation Portofolio" />
                            </Link>
                            <Link to='/' style={link}>
                                <TitleFooter text="Animation Archive" />
                            </Link>
                            <Link to='/' style={link}>
                                <TitleFooter text="Lottie Animations" />
                            </Link>
                            <Link to='/' style={link}>
                                <TitleFooter text="Dribble GIFs" />
                            </Link>
                            <Link to='/' style={link}>
                                <TitleFooter text="Animation blog" />
                            </Link>
                        </Col>
                        <Col style={margin} md={{ offset: 1 }}>
                            <TitleFooter title="Info" />
                            <Link to='/about' style={link}>
                                <TitleFooter text="About Us" />
                            </Link>
                            <Link to='/animationprocess' style={link}>
                                <TitleFooter text="Animation Process" />
                            </Link>
                            <Link to='/contact' style={link}>
                                <TitleFooter text="Contact Us" />
                            </Link>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} md={{ span: 2, offset: 1 }}>
                            <TitleFooter title="Social" />
                            <Link to='https://www.youtube.com/' style={link}>
                                <TitleFooter text="YouTube" />
                            </Link>
                            <Link to='https://vimeo.com/' style={link}>
                                <TitleFooter text="Vimeo" />
                            </Link>
                            <Link to='https://www.instagram.com/' style={link}>
                                <TitleFooter text="Instagram" />
                            </Link>
                            <Link to='https://id-id.facebook.com/' style={link}>
                                <TitleFooter text="Facebook" />
                            </Link>
                            <Link to='https://twitter.com/' style={link}>
                                <TitleFooter text="Twitter" />
                            </Link>
                            <Link to='https://www.tiktok.com/id-ID/' style={link}>
                                <TitleFooter text="Tiktok" />
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Navbar className="justify-content-center">
                            <Navbar.Brand href="https://www.youtube.com/">
                                <img style={img}
                                    src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>

                            <Navbar.Brand href="https://vimeo.com/">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/49/49601.png"
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>

                            <Navbar.Brand href="https://www.instagram.com/">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>

                            <Navbar.Brand href="https://id-id.facebook.com/">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1384/1384021.png"
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>

                            <Navbar.Brand href="https://twitter.com/">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png"
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>

                            <Navbar.Brand href="https://www.tiktok.com/id-ID/">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png"
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                        </Navbar>
                    </Row>

                </Container>
            </Card>
        </div>
    )
}

export default Footer;
const divFooter = {
}
const di = {
    backgroundColor: 'grey',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    paddingRight: '-1%'
}
const margin = {
    marginRight: '-15%',
    marginLeft: '-9%'
}

const container = {
    paddingTop: '5%',
    paddingRight: '-10%',

}
const img = {
    marginTop: '-15%'
}
const link = {
    textDecoration: 'none',
}
