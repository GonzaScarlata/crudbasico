import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { rangoPrecio, campoRequerido } from "../common/helpers";

const EditarProducto = () => {
    const [categoria, setCategoria] = useState("");
    const [error, setError] = useState(false);
    const codProducto = useParams().id;
    const [producto, setProducto] = useState({});
    // sería lo mismo escribir esta sintáxis
    // const {id} = useParams();
    const URL = process.env.REACT_APP_API_URL + "/" + codProducto;
    //console.log("🚀 ~ file: EditarProducto.jsx ~ line 12 ~ EditarProducto ~ URL", URL)
    const nombreProductoRef = useRef("");
    const precioProductoRef = useRef(0);

    useEffect(async () => {
        try {
            const respuesta = await fetch(URL);
            if (respuesta.status === 200) {
                const productoSolicitado = await respuesta.json();
                setProducto(productoSolicitado);
            }
        } catch (error) {
            console.log(
                "🚀 ~ file: EditarProducto.jsx ~ line 16 ~ useEffect ~ error",
                error
            );
        }
    }, []);

    const cambiarCategoria = (e) => {
        setCategoria(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let categoriaModificada =
            (categoria === "") ? (producto.categoria) : (categoria);
        
        // console.log(nombreProductoRef.current.value)
        if (
            campoRequerido(nombreProductoRef.current.value) &&
            rangoPrecio(parseFloat(precioProductoRef.current.value)) &&
            campoRequerido(categoriaModificada)
        ) {
            setError(false);
        } else {
            setError(true);
        }
    };
    return (
        <div className="container w-75 my-4">
            <h1 className="text-center">Edición de productos</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre Producto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nuevo nombre del Producto"
                        defaultValue={producto.nombreProducto}
                        ref={nombreProductoRef}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Nuevo precio del Producto"
                        defaultValue={producto.precioProducto}
                        ref={precioProductoRef}
                    />
                </Form.Group>
                <Form.Group controlId="">
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
                            className="m-2"
                            defaultChecked={
                                producto.categoria &&
                                producto.categoria === "bebidaCaliente"
                            }
                            onChange={(e) => cambiarCategoria(e)}
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Bebida fría`}
                            value="bebidaFria"
                            className="m-2"
                            defaultChecked={
                                producto.categoria &&
                                producto.categoria === "bebidaFria"
                            }
                            onChange={(e) => cambiarCategoria(e)}
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Sandwich`}
                            value="sandwich"
                            className="m-2"
                            defaultChecked={
                                producto.categoria &&
                                producto.categoria === "sandwich"
                            }
                            onChange={(e) => cambiarCategoria(e)}
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Dulce`}
                            value="dulce"
                            className="m-2"
                            defaultChecked={
                                producto.categoria &&
                                producto.categoria === "dulce"
                            }
                            onChange={(e) => cambiarCategoria(e)}
                        />
                        <Form.Check
                            type="radio"
                            name="categoria"
                            label={`Salado`}
                            value="salado"
                            className="m-2"
                            defaultChecked={
                                producto.categoria &&
                                producto.categoria === "salado"
                            }
                            onChange={(e) => cambiarCategoria(e)}
                        />
                    </div>
                </Form.Group>
                <Button variant="danger" className="w-100 mb-4" type="submit">
                    Editar
                </Button>
            </Form>
        </div>
    );
};

export default EditarProducto;
