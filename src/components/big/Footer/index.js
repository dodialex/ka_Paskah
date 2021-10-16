import React from 'react'
import { Container, Image, Row, Col, Card, Navbar } from 'react-bootstrap'
import { TitleFooter } from '../../small'

const Footer = ({ text1, text2, text3 }) => {
    return (
        <div style={divFooter}>
            <Card style={di}>
                <Container style={container}>
                    <Row xs={2} md={6}>
                        <Col md={{ span: 3 }}>
                            <TitleFooter title="Our Work" />
                            <TitleFooter text="Animation Showreel" />
                            <TitleFooter text="Animation Portofolio" />
                            <TitleFooter text="Animation Archive" />
                            <TitleFooter text="Lottie Animations" />
                            <TitleFooter text="Dribble GIFs" />
                            <TitleFooter text="Animation blog" />
                        </Col>
                        <Col style={margin} md={{ offset: 1 }}>
                            <TitleFooter title="Info" />
                            <TitleFooter text="About Us" />
                            <TitleFooter text="Animation Process" />
                            <TitleFooter text="Contact Us" />
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} md={{ span: 2, offset: 1 }}>
                            <TitleFooter title="Social" />
                            <TitleFooter text="YouTube" />
                            <TitleFooter text="Vimeo" />
                            <TitleFooter text="Instagram" />
                            <TitleFooter text="Facebook" />
                            <TitleFooter text="Twitter" />
                            <TitleFooter text="Tiktok" />
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
                                    src="https://cdn-icons.flaticon.com/png/512/3992/premium/3992556.png?token=exp=1634321130~hmac=cc3468865c57d0ad2306693d983de59c"
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
    paddingBottom: '5%',
    paddingRight: '-10%'

}
const img = {
    marginTop: '-15%'
}

