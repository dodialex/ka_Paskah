import React from 'react'
import { Container, Card, Row, Col, CardGroup } from 'react-bootstrap'
import './Card1.css';

const Card1 = () => {
    return (
        <div style={di}>
            <Container>
                <Row xs={1} md={5} >

                    <Col className='tengah tengah1'>
                        <Card className='cardd'>
                            <Card.Body className='img'>
                                <Card.Img />
                                <Card.ImgOverlay>
                                    <Card.Title className='text1'>Logo</Card.Title>
                                    <Card.Text className='text2'>
                                        Animations
                                </Card.Text>
                                </Card.ImgOverlay>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col></Col>

                    <Col className='tengah' >
                        <Card className='cardd'>
                            <Card.Body className='img'>
                                <Card.Img />
                                <Card.ImgOverlay>
                                    <Card.Title className='text1'>Video</Card.Title>
                                    <Card.Text className='text2'>
                                        Animations
                                </Card.Text>
                                </Card.ImgOverlay>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col></Col>


                    <Col className='tengah'>
                        <Card className='cardd'>
                            <Card.Body className='img'>
                                <Card.Img />
                                <Card.ImgOverlay>
                                    <Card.Title className='text1'>Graphic</Card.Title>
                                    <Card.Text className='text2'>
                                        Design
                                </Card.Text>
                                </Card.ImgOverlay>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div >
    )
}

export default Card1;

const di = {
    backgroundColor: 'grey',
    padding: '5%',
};




