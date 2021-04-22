import React from "react";
import { Button, Form } from "react-bootstrap";

const EditarProducto = () => {
    return (
        <div className='container w-75 my-4'>
            <h1 className='text-center'>Edición de productos</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Producto a editar</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre del Producto"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nuevo Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nuevo nombre del Producto"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nuevo precio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Nuevo precio del Producto"
                    />
                </Form.Group>
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
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Bebida fría`}
                            value='bebidaFria'
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Sandwich`}
                            value='sandwich'
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Dulce`}
                            value='dulce'
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Salado`}
                            value='salado'
                            className="m-2"
                        />
                    </div>
                </Form.Group>
                <Button variant="danger" className='w-100 mb-4' type="submit">
                    Editar
                </Button>
            </Form>
        </div>
    );
};

export default EditarProducto;
