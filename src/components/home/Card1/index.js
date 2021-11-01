import React from 'react'
import { Container, Card, Row, Col, CardGroup } from 'react-bootstrap'
import './Card1.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

class Card1 extends React.Component {
    constructor(props) {
        super(props);
        this.player = React.createRef(); // initialize your ref
    }
    render() {
        return (
            <div style={di}>
                <Container>
                    <Row xs={1} md={3} style={row}>
                        <Col className='tengah'>
                            <a style={tagA} href='https://lottiefiles.com/82362-green-loading-dots'>
                                <Card className='cardd'>
                                    <Player
                                        hover
                                        loop
                                        src="https://assets5.lottiefiles.com/packages/lf20_t1ga2e1n.json"
                                        style={{ display: 'flex', height: '270px' }}
                                    >
                                    </Player>
                                    <div style={div}>
                                        <p style={teks1}>Logo</p>
                                        <p>Animations</p>
                                    </div>
                                </Card>
                            </a>
                        </Col>


                        <Col className='tengah'>
                            <a style={tagA} href='https://lottiefiles.com/81535-clapping'>
                                <Card className='cardd'>
                                    <Player
                                        hover
                                        loop
                                        src="https://assets5.lottiefiles.com/packages/lf20_dflqwg4a.json"
                                        style={{ display: 'flex', height: '270px' }}
                                    >
                                    </Player>
                                    <div style={div}>
                                        <p style={teks1}>Video</p>
                                        <p>Animations</p>
                                    </div>
                                </Card>
                            </a>
                        </Col>



                        <Col className='tengah'>
                            <a style={tagA} href='https://lottiefiles.com/77378-sunset'>
                                <Card className='cardd'>
                                    <Player
                                        hover
                                        loop
                                        src="https://assets8.lottiefiles.com/packages/lf20_uujfair3.json"
                                        style={{ display: 'flex', height: '270px' }}
                                    >
                                    </Player>
                                    <div style={div}>
                                        <p style={teks1}>Graphic</p>
                                        <p>Animations</p>
                                    </div>
                                </Card>
                            </a>
                        </Col>

                    </Row>
                </Container>
            </div >
        );
    }
}
export default Card1;
const tagA = {
    textDecoration: 'none',
    color: 'black'
}
const teks1 = {
    fontWeight: '500',
    fontSize: '20px',
    marginBottom: '1px'
}
const div = {
    marginLeft: '20px',
}
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem'
}

const di = {
    backgroundColor: 'grey',
};





