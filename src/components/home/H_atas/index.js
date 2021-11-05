import React from 'react';
import { Parallax } from 'react-parallax';
import { Button } from 'react-bootstrap';
import Header from '../Header';
import './H_atas.css';
import { NavLink, Link } from 'react-router-dom'


const insideStyles = {
    background: 'none',
    color: 'white',
    padding: 10,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white'
};


const H_atas = () => {
    return (
        <div>

            <Parallax style={para} bgImage={''} strength={500}>
                <Header className='header' />
                <div style={{ height: 800 }}>
                    <Button style={insideStyles}>
                        <NavLink to='/showreel' style={link}>
                            ANIMATION SHOWREEL
                        </NavLink>
                    </Button>
                </div>
            </Parallax>

        </div>
    )
}

export default H_atas;

const para = {
    backgroundColor: 'grey'
}
const link = {
    textDecoration: 'none',
    color: 'white',
}
