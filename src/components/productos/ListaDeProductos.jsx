import React from "react";
import { ListGroup } from "react-bootstrap";

const ListaDeProductos = (props) => {
    return (
        <div>
            <h1>Página lista de productos</h1>
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default ListaDeProductos;
