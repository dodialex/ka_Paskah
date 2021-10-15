import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const CardTest = ({ title, text, src }) => {
    return (
        <Card style={card}>
            <Card.Body>
                <Card.Img src={src} />
                <Card.ImgOverlay style={overlay}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.ImgOverlay>
            </Card.Body>
        </Card>
    )
}

export default CardTest;
const card = {
    borderWidth: 0,
}

const overlay = {
    marginTop: '300px'
}
