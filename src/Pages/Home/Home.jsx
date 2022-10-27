import React from 'react';
import './home.css';
import Nav from '../../Components/Nav/Nav';


const Home = () => {
    return (
        <>
            <Nav />
            <h1 className='greeting'>Bem-vindo ao <span className='name'>Costs</span></h1>
        </>
    );
}

export default Home;