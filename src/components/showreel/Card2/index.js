import React from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'

const Card2 = () => {
    return (
        <div>
            <Container fluid>
                <Row xs={1} md={3} style={row}>
                    <Col style={col}>
                        <Card style={card}>
                            <Card.Img variant="top" />
                        </Card>
                    </Col>
                    <Col style={col}>
                        <Card style={card}>
                            <Card.Img variant="top" />
                        </Card>
                    </Col>
                    <Col style={col}>
                        <Card style={card}>
                            <Card.Img variant="top" />
                        </Card>
                    </Col>
                </Row>

                <Row xs={1} md={2} style={row1}>
                    <Col style={col}>
                        <Card style={card}>
                            <Card.Img variant="top" />
                        </Card>
                    </Col>
                    <Col style={col}>
                        <Card style={card}>
                            <Card.Img variant="top" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Card2;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
    marginBottom: '40px',
    marginTop: '-10%'
}
const row1 = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
    marginBottom: '40px',
    marginTop: '-21%'
}
const card = {
    width: '100%',
    backgroundColor: '#d9d9d9',
    height: '350px',
    borderRadius: '20px'

}
const col = {
    marginTop: '10%',
    marginBottom: '10%'
}

