import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navegacion = () => {
    return (
        <Navbar bg="danger" variant='dark' expand="lg">
            <Navbar.Brand href="#home"> CRUD-Cafetería</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className='nav-link' exact={true} to='/'>Inicio</NavLink>
                    <NavLink className='nav-link' exact={true} to='/productos'>Porductos</NavLink>
                    <NavLink className='nav-link' exact={true} to='/productos/nuevo'>Nuevo Producto+</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navegacion;