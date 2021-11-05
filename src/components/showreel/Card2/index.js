import React from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'

const Card2 = () => {
    return (
        <div style={divCard}>
            <Container fluid>
                <Row xs={1} md={3} style={row}>
                    <Col>
                        <Card style={card}>
                            <Card.Img style={img} />
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={card}>
                            <Card.Img style={img} />
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={card}>
                            <Card.Img style={img} />
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row style={row}>
                    <Col md={6}>
                        <Card style={card}>
                            <Card.Img style={img} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card style={card}>
                            <Card.Img style={img} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>














                {/* <Row xs={1} md={3} style={row}>
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
                </Row> */}
            </Container>
        </div >
    )
}

export default Card2;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
    marginTop: '-0.6%'
}
const divCard = {
    marginTop: '35px',
    marginBottom: '3%',
    borderWidth: '0px',

}
const card = {
    borderWidth: '0px',
    maxWidth: '100%'
}
const img = {
    height: '350px',
    borderRadius: '25px',
    backgroundColor: 'gainsboro',
}









// const row = {
//     marginRight: '0.1rem',
//     marginLeft: '0.1rem',
//     marginTop: '-10%'
// }
// const row1 = {
//     marginRight: '0.1rem',
//     marginLeft: '0.1rem',
//     marginBottom: '40px',
//     marginTop: '-21%'
// }
// const card = {
//     width: '100%',
//     backgroundColor: '#d9d9d9',
//     height: '350px',
//     borderRadius: '20px'

// }
// const col = {
//     marginTop: '10%',
//     marginBottom: '10%'
// }

