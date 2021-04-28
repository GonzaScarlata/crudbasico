import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListaDeProductos = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Página lista de productos</h1>
            <ListGroup className='mb-5'>
                {
                    props.productos.map((producto)=> <ItemProducto producto={producto} consultarAPI={props.consultarAPI} key={producto.id}/>)
                }
                
            </ListGroup>
        </div>
    );
};

export default ListaDeProductos;
