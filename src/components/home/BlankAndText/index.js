import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const BlankAndText = ({ text1, text2, text3 }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md={7}>
                        <Card className="text-center" style={card}>
                            <Card.Text style={c_text}>
                                {text1}
                            </Card.Text>
                            <Card.Text style={c_text}>
                                {text2}
                            </Card.Text>
                            <Card.Text style={c_text}>
                                {text3}
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlankAndText;

const card = {
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 0
};

const c_text = {
    textAlign: 'center',
};






