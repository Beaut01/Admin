import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid d-flex">
                <NavLink className="navbar-brand" to="/">Admin</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
                        <NavLink className="nav-link" to="/about">Информация</NavLink>
                    </div>
                </div>
                <NavLink to='/create' >
                    <button className='btn btn-light'>Добавить</button>
                </NavLink>
            </div>
        </nav>
    )
}