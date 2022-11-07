import React from 'react';

import './NewProject.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const NovoProjeto = () => {

    const alerta = () => {
        return (
            Swal.fire({
                toast: true,
                icon: 'success',
                title: 'Projeto criado com sucesso',
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                // PENIS ENIS
            })
        )
    }

    return (
        <>
            <div className="formulario">
                <div className="txt">
                    <h1>Criar projeto</h1>
                    <p>Crie se projeto para depois adicionar os serviços</p>
                </div>

                <form action="">

                    <h4 className='titulo'>Nome do projeto</h4>
                    <input type="text" placeholder='nome do projeto' />

                    <h4 className='titulo'>Orçamento do projeto</h4>
                    <input type="number" name="orçamento" id="orçamento" placeholder='orçamento do projeto' />

                    <h4 className='titulo'>Selecione a categoria</h4>
                    <select name="" id="">
                        <option value="selecione a opção">Selecione a opção</option>
                        <option value="selecione a opção">Opção 1</option>
                        <option value="selecione a opção">Opção 2</option>
                        <option value="selecione a opção">Opção 3</option>
                        <option value="selecione a opção">Opção 4</option>
                    </select>

                    <Link to="/"><button onClick={alerta} className='botao'><a href=' '>Criar projeto</a></button></Link>
                </form>
            </div>
        </>
    );
}

export default NovoProjeto;