import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Swal from 'sweetalert2';

const AgregarProducto = () => {
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState(0);
    const [categoria, setCategoria] = useState("");
    const [error, setError] = useState(false);

    const cambiarCategoria = (e) => {
        setCategoria(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validar datos
        if (
            nombreProducto.trim() === "" ||
            precioProducto <= 0 ||
            precioProducto > 5000 ||
            categoria === ""
        ) {
            // muestro cartel de error
            setError(true);
        } else {
            // si todo está bien mando a la api
            setError(false);
            // crear el objeto enviado
            const producto = {
                nombreProducto,
                precioProducto,
                categoria,
            };
            console.log(producto);

            try {
                // aquí escribo normalmente el código, lo que quiero que pase
                const datosAEnviar = {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(producto)
                };

                const respuesta = await fetch("http://localhost:3004/cafeteria", datosAEnviar);
                console.log(respuesta);

                if(respuesta.status ===201){
                    // mostrar un cartel al usuario, se agregó al producto
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    // otras tareas

                }
            } catch (error) {
                console.log(error);
                // en la variable que acabo de inventar (error) se guardan todos los datos del error que pasó en el try,
                //asi entiendo que se rompe
                // mostrar cartel al usuario
                Swal.fire(
                    'Ocurrió un error',
                    'Inténtelo en unos minutos',
                    'error'
                )
            }
        }
    };

    return (
        <div className="container w-75 my-4 ">
            <h1 className="text-center">Agregar nuevo producto</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <div className="">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre del producto*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: Café con leche"
                            onChange={(e) => setNombreProducto(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Precio*</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ej: $50"
                            onChange={(e) =>
                                setPrecioProducto(parseInt(e.target.value))
                            }
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
                            value="bebidaCaliente"
                            onChange={(e) => cambiarCategoria(e)}
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Bebida fría`}
                            value="bebidaFria"
                            onChange={(e) => cambiarCategoria(e)}
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Sandwich`}
                            value="sandwich"
                            onChange={(e) => cambiarCategoria(e)}
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Dulce`}
                            value="dulce"
                            onChange={(e) => cambiarCategoria(e)}
                            className="m-2"
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Salado`}
                            value="salado"
                            onChange={(e) => cambiarCategoria(e)}
                            className="m-2"
                        />
                    </div>
                </Form.Group>
                <Button variant="danger" className="w-100 mb-4" type="submit">
                    Agregar Producto
                </Button>
                {error === true ? (
                    <Alert variant="warning">
                        Todos los campos son obligatorios!
                    </Alert>
                ) : null}
            </Form>
        </div>
    );
};

export default AgregarProducto;
