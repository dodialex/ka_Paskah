import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

const Card1 = ({ src, name, teks, teks2, teks3, teks4, teks5, teks6 }) => {
    return (
        <div>
            <Container fluid>
                <Row xs={1} md={2} style={row}>
                    <Col md={{ offset: 2 }} xs={{ offset: 2 }} style={col1}>
                        <Image
                            src={src}
                            roundedCircle
                            style={image}
                        />
                    </Col>
                    <Col style={col2}>
                        <h2 style={nama}>{name}</h2>
                        <p style={teksnya}>{teks}</p>
                        <p style={teksnya}>{teks2}</p>
                        <p style={teksnya}>{teks3}</p>
                        <p style={teksnya}>{teks4}</p>
                        <p style={teksnya}>{teks5}</p>
                        <p style={teksnya}>{teks6}</p>
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
    marginBottom: '40px'
}
const image = {
    height: '100%',
    width: '100%',
    backgroundColor: '#d9d9d9',
    borderWidth: 'none'
}
const col1 = {
    height: '350px',
    width: '350px',
    marginLeft: 'auto'
}
const col2 = {
}
const nama = {
    color: '#182a42',
    fontWeight: '200',
    textDecoration: 'underline',
    marginBottom: '10%'
}
const teksnya = {
    color: '#7f7f7f'
}
