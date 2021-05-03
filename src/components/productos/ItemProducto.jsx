import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';


const ItemProducto = (props) => {

    const eliminarProducto = (id) => {
        Swal.fire({
            title: "Seguro que quieres eliminar este producto?",
            text: "No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar Producto!",
            cancelButtonText: "Cancelar"
        }).then( async(result) => {
            if (result.isConfirmed) {
                // agregar la lógica para borrar el producto
                try {
                    const URL = `${process.env.REACT_APP_API_URL}/${id}`;
                    //console.log(URL);
                    const respuesta = await fetch(URL,{
                        method: "DELETE",
                        headers: {"Content-Type":"application/json"}
                    });
                    //console.log(respuesta);
                    if (respuesta.status === 200) {
                        Swal.fire(
                            "Eliminado!", 
                            "El producto fué removido.", 
                            "success");
                            props.consultarAPI();
                    }
                    
                } catch (error) {
                    console.log(error);
                    // mostrar ventana de error
                }
                
            }
        });
    };

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <p>
                {props.producto.nombreProducto}
                <span className="font-weight-bold">
                    {" "}
                    $ {props.producto.precioProducto}
                </span>
            </p>
            <div>
                <Link to={'/productos/editar/' + props.producto.id} className="mr-3 btn btn-warning text-light">
                    Editar
                </Link>
                <Button
                    variant="danger"
                    onClick={() => eliminarProducto(props.producto.id)}
                >
                    Eliminar
                </Button>
            </div>
        </ListGroup.Item>
    );
};

export default ItemProducto;
