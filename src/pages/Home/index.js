import React from 'react';
import { Footer } from '../../components/big';
import { BlankAndText, Card1, Card2, H_atas } from '../../components/home';
const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <H_atas />
            <BlankAndText text2='Our animation portofolio features a selection work 
            created over the years, incluiding branded content, music, video
            and the passion project we are espesially proud of.' />
            <Card1 />
            <Card2 />
            <Footer />
        </div>
    )
}

export default Home;


