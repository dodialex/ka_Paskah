import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
const Card1 = () => {
    return (
        <div>
            <Container fluid>
                <Row style={row}>
                    <Col>
                        <Card style={card}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tXO9cp-A8aM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            {/* <Card.Body>
                                <Card.Img />
                                <Card.ImgOverlay>
                                    <Card.Title></Card.Title>
                                    <Card.Text></Card.Text>
                                </Card.ImgOverlay>
                            </Card.Body> */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Card1;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem'
}
const card = {
    backgroundColor: '#d9d9d9',
    height: '500px',
    borderRadius: '20px'
}
