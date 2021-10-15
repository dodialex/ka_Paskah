import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const Footer = ({ title, text }) => {
    return (
        <div>
            <Container>
                <p style={title1}>{title}</p>
                <p style={text1}> {text} </p>
            </Container>

        </div>
    )
}

export default Footer;
const title1 = {
    color: '#3a668b',
    fontWeight: 'bold'
}
const text1 = {
    color: '#3a668b',
    marginBottom: '-5%'
}