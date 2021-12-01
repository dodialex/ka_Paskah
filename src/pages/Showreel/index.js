import React from 'react';
import { Header, Card1, Card2 } from '../../components/showreel';
import { Tulisan } from '../../components/small';
import { Footer } from '../../components/big';

const Showreel = () => {
    return (
        <div>
            <Header />
            <div style={teksnya} id='video'>
                <Tulisan teks="Video Animations" />
            </div>
            <Card1 src="https://www.youtube.com/embed/DxfQnxU3g2Y" />
            <div style={teksnya} id='logo'>
                <Tulisan teks="Logo Animations" />
            </div>
            <Card1 src="https://www.youtube.com/embed/tXO9cp-A8aM" />
            <div style={teksnya} id='graphic'>
                <Tulisan teks="Graphic Design" />
            </div>
            <Card2 />
            <Footer />
        </div>
    )
}

export default Showreel;
const teksnya = {
    marginTop: '42px'
}