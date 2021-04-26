import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemProducto = (props) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <p>
                {props.producto.nombreProducto}
                <span className="font-weight-bold"> $ {props.producto.precioProducto}</span>
            </p>
            <div>
                <Button variant="warning" className='mr-2'>Editar</Button>
                <Button variant="danger">Eliminar</Button>
            </div>
        </ListGroup.Item>
    );
};

export default ItemProducto;
