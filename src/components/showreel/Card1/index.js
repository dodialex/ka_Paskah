import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
const Card1 = () => {
    return (
        <div>
            <Row xs={1} md={1} style={row}>
                <Col md={12} >
                    <Card style={card}>
                        <Card.Body>
                            <Card.Img />
                            <Card.ImgOverlay>
                                <Card.Title></Card.Title>
                                <Card.Text></Card.Text>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Card1;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem'
}
const card = {
    backgroundColor: '#d9d9d9',
    height: '1040px',
    borderRadius: '45px'
}
