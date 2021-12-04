import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { aboutBottom, aboutTop } from '../../../assets/images';

const Card1 = () => {
    return (
        <div>
            <Container fluid>
                <Row xs={1} md={1} style={row}>
                    <Col style={col}>
                        <Card style={card}>
                            <Card.Img src={aboutTop} style={cardImg} />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={card}>
                            <Card.Img src={aboutBottom} style={cardImg} />
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
    height: '720px',
    // backgroundColor: '#d9d9d9',
    borderRadius: '30px',
    width: '98%',
    marginLeft: 'auto',
    marginRight: 'auto'

}
const cardImg = {
    height: '720px',
    borderRadius: '30px',
}

const col = {
    marginBottom: '40px'
}