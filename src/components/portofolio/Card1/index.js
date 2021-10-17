import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Card1 = ({ teks1, teks2, teks3, teks4, teks5 }) => {
    return (
        <div>
            {/* <Row xs={1} md={2} style={row}>
                <Col> */}
            <Card style={card}>
                <Card.Img style={cardImg} />
                <Card.Body>
                    <Card.ImgOverlay style={cardBody}>
                        <Card.Title style={title}>{teks1}</Card.Title>
                        <Card.Text style={text}>{teks2} </Card.Text>
                        <Card.Text style={text}>{teks3} </Card.Text>
                        <Card.Text style={text}>{teks4} </Card.Text>
                        <Card.Text style={text}>{teks5} </Card.Text>
                    </Card.ImgOverlay>
                </Card.Body>
            </Card>
            {/* </Col>
            </Row> */}
        </div>
    )
}

export default Card1;
// const row = {
//     marginRight: '0.1rem',
//     marginLeft: '0.1rem',
//     marginBottom: '40px'
// }
const card = {
    height: '800px',
    borderWidth: '0',
    borderBottomWidth: '2px',
    borderColor: '#c8c8c8'
}
const cardImg = {
    height: '500px',
    backgroundColor: '#d9d9d9',
    borderRadius: '20px'
}
const cardBody = {
    marginTop: '600px'
}
const title = {
    color: '#7f7f7f',
    textDecoration: 'underline',
    textDecorationLine: '10px',
    marginLeft: '3%',
    marginBottom: '20px'
}
const text = {
    marginBottom: '-1px',
    color: '#7f7f7f',
    marginLeft: '3%'
}
