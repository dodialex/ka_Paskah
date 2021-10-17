import React from 'react'
import { Container } from 'react-bootstrap'

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
    color: '#29455b',
    fontWeight: '900',
    fontSize: '13px'
}
const text1 = {
    color: '#29455b',
    marginBottom: '-5%',
    fontSize: '11px',
    fontWeight: '600',
}