import React from 'react';
import img from '../img/logo.png';


class Header extends React.Component {
    render(){
        return(
            <header data-testid = 'header'>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="./">
                        <img src={img} width="30" height="30" className="d-inline-block align-top" alt="" data-testid="img"/>Burger Queen
                    </a>

                    <ul className="nav nav-pills nav-end">
                    <li className="nav-item">
                        <a className="nav-link" href="./">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./">Menú</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./">Registro de Pedidos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./">Lista de pedidos</a>
                    </li>
                </ul>
                </nav>
            </header>
        );
    }

}


export default Header;
