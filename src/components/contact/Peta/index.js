import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Mapnya from '../Mapnya';
const Peta = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <Card style={card}>
                            <Mapnya />
                            <Card.Text>
                                <p>teks 1</p>
                                <p>teks 2</p>
                                <p>teks 3</p>
                                <p>teks 4</p>
                                <p>teks 5</p>
                            </Card.Text>
                        </Card>
                    </Col>




                    <Col>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Label style={labelAtas}>Name</Form.Label>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Control
                                        style={kotak}
                                        required
                                        type="text"
                                        placeholder=""
                                    />
                                    <Form.Label style={labelBawah}>First Name</Form.Label>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Control
                                        style={kotak}
                                        required
                                        type="text"
                                        placeholder=""
                                    />
                                    <Form.Label style={labelBawah}>Last name</Form.Label>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>



                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    <Form.Label style={labelAtas}>Email Address</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            style={kotak}
                                            type="text"
                                            placeholder=""
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="3">
                                    <Form.Label style={labelAtas}>Subject</Form.Label>
                                    <Form.Select style={subject} id="inlineFormCustomSelect">
                                        <option value="0">New Business</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row className="mb-5">
                                <Form.Label style={labelAtas}>Message</Form.Label>
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Form.Control
                                        style={pesan}
                                        required
                                        as="textarea"
                                        placeholder=""
                                    />
                                </Form.Group>
                            </Row>

                            <Button style={btn} type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Peta;
const kotak = {
    backgroundColor: '#d9d9d9'
}
const labelAtas = {
    color: '#7f7f7f',
    fontWeight: 'bold',
    marginBottom: '-1px'
}
const labelBawah = {
    color: '#7f7f7f',
    fontWeight: 'bold',
    fontSize: '11px'
}
const subject = {
    padding: '1px',
    color: '#7f7f7f',
    fontWeight: 'bold',
    borderWidth: '3px'
}
const pesan = {
    backgroundColor: '#d9d9d9',
    height: '100px'
}
const btn = {
    backgroundColor: '#d9d9d9',
    borderColor: '#7f7f7f',
    color: 'black'
}
const card = {
    width: '100%'
}
