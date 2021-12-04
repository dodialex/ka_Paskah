import React from 'react';
import { Card1, Header } from '../../components/about';
import { Footer } from '../../components/big';
import { Tulisan } from '../../components/small';


const About = () => {
    return (
        <div>
            <Header />
            <p style={br} />
            <Tulisan teks='About Boosted Animations' teks4='BOOSTED ANIMATION WAS FOUNDED BY' />
            <Card1 />
            <Tulisan teks4='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
            <Footer />
        </div>
    )
}

export default About
const br = {
    marginBottom: '100px'
}