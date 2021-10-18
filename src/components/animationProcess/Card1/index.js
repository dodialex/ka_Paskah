import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const Card1 = () => {
    return (
        <div>
            <Container fluid>
                <Row style={row}>
                    <Col>
                        <Card style={card}>
                            <Card.Img style={cardImg} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Card1;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
}
const card = {
    height: '450px',
    backgroundColor: '#d9d9d9',
    borderRadius: '30px',
    marginLeft: 'auto',
    marginRight: 'auto'

}
const cardImg = {

}
