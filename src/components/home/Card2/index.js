import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { CardTest } from '../../small';
import { Footer } from '../../big';

const Card2 = ({ text1, text2, text3 }) => {
    return (
        <div style={divCard}>
            <Row style={row}>
                <Col md={8}>
                    <Card style={card}>
                        <Card.Img style={img} />
                        <Card.Body>
                            <Card.ImgOverlay style={textOverlay}>
                                <Card.Text>PICTURE PROJECT</Card.Text>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={card}>
                        <Card.Img style={img} />
                        <Card.Body>
                            <Card.ImgOverlay style={textOverlay}>
                                <Card.Text>PICTURE PROJECT</Card.Text>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row xs={1} md={3} style={row}>
                <Col>
                    <Card style={card}>
                        <Card.Img style={img} />
                        <Card.Body>
                            <Card.ImgOverlay style={textOverlay}>
                                <Card.Text>PICTURE PROJECT</Card.Text>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={card}>
                        <Card.Img style={img} />
                        <Card.Body>
                            <Card.ImgOverlay style={textOverlay}>
                                <Card.Text>PICTURE PROJECT</Card.Text>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={card}>
                        <Card.Img style={img} />
                        <Card.Body>
                            <Card.ImgOverlay style={textOverlay}>
                                <Card.Text>PICTURE PROJECT</Card.Text>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row style={row}>
                <Col md={4}>
                    <Card style={card}>
                        <Card.Img style={img} />
                        <Card.Body>
                            <Card.ImgOverlay style={textOverlay}>
                                <Card.Text>PICTURE PROJECT</Card.Text>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={8}>
                    <Card style={card}>
                        <Card.Img style={img} />
                        <Card.Body>
                            <Card.ImgOverlay style={textOverlay}>
                                <Card.Text>PICTURE PROJECT</Card.Text>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Card2;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem'
}
const divCard = {
    marginTop: '5%',
    marginBottom: '3%',
    marginLeft: '1.5%',
    marginRight: '1%',
    borderWidth: '0px',

}
const card = {
    borderWidth: '0px',
    maxWidth: '100%'
}
const img = {
    height: '350px',
    borderRadius: '50px',
    backgroundColor: 'gainsboro',
}
const textOverlay = {
    marginTop: '300px',
    marginLeft: '3%',
    color: 'white'
}

