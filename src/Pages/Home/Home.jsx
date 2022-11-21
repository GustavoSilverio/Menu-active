import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Pig from '../../assets/img/pig.svg'

const Home = () => {
    return (
        <>
            <div className="title">
                <h1 className='greeting'>Bem-vindo ao <span className='name'>Costs</span></h1>

                <p className='frase'>Começe a gerenciar os seus projetos agora mesmo!</p>

                <Link to="/newproject"><a className='botao-h' href=' '>Criar projeto</a></Link>
            </div>
            <img className="img" src={Pig} alt="money pig" />
        </>
    );
    
}

export default Home;