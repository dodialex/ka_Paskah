import React from 'react'
import { Container, Card, Row, Col, CardGroup } from 'react-bootstrap'
import './Card1.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { colors } from '../../../random/colors';

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
                            {/* <a href='https://webkapaskah.netlify.app/showreel/#logo' style={tagA}> */}
                            <a href='/showreel/#logo' style={tagA}>
                                <Card className='cardd' >
                                    <Player
                                        hover
                                        loop
                                        src="https://assets10.lottiefiles.com/packages/lf20_t1ga2e1n.json"
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
                            <a href='https://webkapaskah.netlify.app/showreel/#video' style={tagA}>
                                {/* <a href='http://localhost:3000/showreel/#video' style={tagA}> */}
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
                            <a href='https://webkapaskah.netlify.app/showreel/#graphic' style={tagA}>
                                {/* <a href='http://localhost:3000/showreel/#graphic' style={tagA}> */}
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
                                        <p >Animations</p>
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





