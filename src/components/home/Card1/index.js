import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import HoverVideoPlayer from 'react-hover-video-player';
import { Lamp, Rocket, Tablet } from '../../../assets/mp4';
import './Card1.css';

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
                            <a href='/showreel/#logo' style={tagA}>
                                {/* <a href='http://localhost:3000/showreel/#logo' style={tagA}> */}
                                <HoverVideoPlayer
                                    videoSrc={Rocket}
                                />
                                <Card className='cardd' >
                                    <div style={div}>
                                        <p style={teks1}>Logo</p>
                                        <p>Animations</p>
                                    </div>
                                </Card>
                            </a>
                        </Col>


                        <Col className='tengah'>
                            <a href='/showreel/#video' style={tagA}>
                                {/* <a href='http://localhost:3000/showreel/#video' style={tagA}> */}
                                <HoverVideoPlayer
                                    videoSrc={Lamp}
                                />
                                <Card className='cardd'>
                                    <div style={div}>
                                        <p style={teks1}>Video</p>
                                        <p>Animations</p>
                                    </div>
                                </Card>
                            </a>
                        </Col>



                        <Col className='tengah'>
                            <a href='/showreel/#graphic' style={tagA}>
                                {/* <a href='http://localhost:3000/showreel/#graphic' style={tagA}> */}
                                <HoverVideoPlayer
                                    videoSrc={Tablet}
                                />
                                <Card className='cardd'>
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





