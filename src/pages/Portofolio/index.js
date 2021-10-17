import React from 'react'
import { Header, Card1, Card2 } from '../../components/portofolio'
import { Footer } from '../../components/big'
import { Tulisan } from '../../components/small'
import { Row, Col } from 'react-bootstrap'

const Portofolio = () => {
    return (
        <div>
            <Header />
            <Tulisan 
            teks='Animation Portofolio'
            teks2='Our animation portofolio showcases some of our favourite and most recent animations we’ve created for some 
            of the amazing brands we’ve had the pleasure of working with.'
            teks3='You can watch a much wider selection of animations in our animation archive'
            />

            <Row xs={1} md={2} style = {row}>
                <Col style={col}>
                    <Card1 
                        teks1='TITLE'
                        teks2='CLIENT-'
                        teks3='DIRECTED-'
                        teks4='ANIMATED-'
                        teks5='AUDIO-'
                    />
            </Col>
            <Col style={col}>
                    <Card1 
                        teks1='TITLE'
                        teks2='CLIENT-'
                        teks3='DIRECTED-'
                        teks4='ANIMATED-'
                        teks5='AUDIO-'
                    />
            </Col>
            </Row>
            <Row xs={1} md={2} style = {row}>
                <Col style={col}>
                    <Card1 
                        teks1='TITLE'
                        teks2='CLIENT-'
                        teks3='DIRECTED-'
                        teks4='ANIMATED-'
                        teks5='AUDIO-'
                    />
            </Col>
            <Col style={col}>
                    <Card1 
                        teks1='TITLE'
                        teks2='CLIENT-'
                        teks3='DIRECTED-'
                        teks4='ANIMATED-'
                        teks5='AUDIO-'
                    />
            </Col>
            </Row>
            
            <Tulisan 
            teks='Design Graphic Portfolio'
            teks2='Our animation portofolio showcases some of our favourite and most recent design graphic we’ve created for some 
            of the amazing brands we’ve had the pleasure of working with.'
            teks3='You can watch a much wider selection of animations in our animation archive'
            />

            <Card2/>

            <Footer />
        </div>
    )
}

export default Portofolio;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
}
const col = {
    marginBottom: '5%'
}
