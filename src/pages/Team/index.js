import React from 'react'
import Header from '../../components/team/Header'
import { Footer } from '../../components/big';
import { Tulisan } from '../../components/small';
import Card1 from '../../components/team/Card1';
import { charElen, charTarana,charSoleil,charPaskah } from '../../assets/images';


const Team = () => {
    return (
        <div>
            <Header />
            <p style={br} />
            <Tulisan
                teks='Boosted Animations Team'
                teks5='We asked our animators to create animated self-potraits of themselves.'
                teks6='Then we wrote biographies for them. You can see the work everyone has created in our animation portfolio.' />
            <p style={br} />
            <Card1 
                src={charSoleil}
                name='Nama' 
                teks='Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit
                anim id est laborum.' />

            <Card1 
                src={charPaskah}
                name='Nama' 
                teks='Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit
                anim id est laborum.' />

            <Card1 
                src={charTarana}
                name='Nama' 
                teks='Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit
                anim id est laborum.' />
            <Card1 
                src={charElen}
                name='Nama' 
                teks='Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit
                anim id est laborum.' />
            <Footer />
        </div>
    )
}

export default Team;
const br = {
    marginBottom: '100px'
}
