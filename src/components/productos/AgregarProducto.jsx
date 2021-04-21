import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

const AgregarProducto = () => {
const [nombreProducto, setNombreProducto] = useState('');
const [precioProducto, setPrecioProducto] = useState(0);
const [categoria, setCategoria] = useState('');

const cambiarCategoria = (e) => {
    setCategoria(e.target.value)
}


    return (
        <div className="container w-75 my-4 ">
            <h1 className="text-center">Agregar nuevo producto</h1>
            <Form>
                <div className="">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre del producto*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: Café con leche"
                            onChange={(e)=> setNombreProducto(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Precio*</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Ej: $50" 
                            onChange={(e)=> setPrecioProducto(parseInt(e.target.value))}
                            />
                        
                    </Form.Group>
                </div>
                <Form.Group controlId="formBasicCheckbox">
                    <h3 className="text-center">Categoría</h3>
                    <div
                        key={`default-radio`}
                        className="mb-3 d-flex justify-content-center"
                    >
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Bebida caliente`}
                            value='bebidaCaliente'
                            onChange={cambiarCategoria()}
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Bebida fría`}
                            value='bebidaFria'
                            onChange={cambiarCategoria()}
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Sandwich`}
                            value='sandwich'
                            onChange={cambiarCategoria()}
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Dulce`}
                            value='dulce'
                            onChange={cambiarCategoria()}
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Salado`}
                            value='salado'
                            onChange={cambiarCategoria()}
                            className="m-2"
                        />
                    </div>
                </Form.Group>
                <Button variant="danger" className="w-100 mb-4" type="submit">
                    Agregar Producto
                </Button>
                <Alert variant='warning'>
                    Todos los campos son obligatorios!
                </Alert>
            </Form>
        </div>
    );
};

export default AgregarProducto;
