import React from 'react';
import { Link } from 'react-router-dom'



const Header = () => {
    return(
        <nav className="navbar ">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Начало</Link>
                    <Link className="navbar-brand" to="/users/login">Вход</Link>
                    <Link className="navbar-brand" to="/users/register">Регистрация</Link>
                    <Link className="navbar-brand" to="/offer/add-offer-props">Добави Опции</Link>
                    <Link className="navbar-brand" to="/offer/add-offer"> Добави оферта </Link>
                </div>
            </div>  
        </nav>
    )
}


export default Header;