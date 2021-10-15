import React from 'react'
import {H_atas, BlankAndText, Card1, Card2} from '../../components/home';
import {Footer} from '../../components/big';
const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <H_atas />
            <BlankAndText text2='Our animation portofolio features a selection work 
            created over the years, incluiding branded content, music, video
            and the passion project we are espesially proud of.' />
            <Card1/>
            <Card2/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home;


