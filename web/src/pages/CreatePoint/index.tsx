import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowDownLeft />
                    Voltar para home
                </Link>
            </header>

            <form action="">
                <h1>Cadastro do <br /> ponto de colete</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="name">Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <legend>
                            <h2>Endereço</h2>
                            <span>Selecione o endereço no mapa</span>
                        </legend>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf">
                                <option value="0">Selecione um UF</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <legend>
                            <h2>Itens</h2>
                            <span>Selecione um ou mais itens abaixo</span>
                        </legend>

                        <ul className="items-grid">
                            <li className="selected">
                                <img src="http://localhost:3000/public/images/oleo.svg" alt="Oleo"></img>
                                <span>Óleo de Cozinha</span>
                            </li>
                        </ul>
                    </div>
                </fieldset>
            <button type="submit">
                Cadastrar ponto de coleta
            </button>
            </form>
        </div>
    );
}

export default CreatePoint;