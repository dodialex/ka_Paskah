import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'

const Card2 = () => {
    return (
        <div>
            <Row xs={1} md={3} style={row}>
                <Col>
                    <Card style={card}>
                        <Card.Img variant="top" />
                    </Card>
                </Col>
                <Col>
                    <Card style={card}>
                        <Card.Img variant="top" />
                    </Card>
                </Col>
                <Col>
                    <Card style={card}>
                        <Card.Img variant="top" />
                    </Card>
                </Col>
            </Row>

            <Row xs={1} md={2} style={row}>
                <Col>
                    <Card style={card}>
                        <Card.Img variant="top" />
                    </Card>
                </Col>
                <Col>
                    <Card style={card}>
                        <Card.Img variant="top" />
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default Card2;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
    marginBottom: '40px'
}
const card = {
    width: '100%',
    backgroundColor: '#d9d9d9',
    height: '500px',
    borderRadius: '45px'

}

