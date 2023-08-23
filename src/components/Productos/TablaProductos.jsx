import "./TablaProductos.css";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import FormProducto from "./FormProducto/FormProducto";
import {
  actualizarProducto,
  agregarProducto,
  borrarProducto,
  traerProductos,
} from "../../helpers/ApiProductos";

const TablaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleAdd = async (nuevoProducto) => {
    try {
      const response = await agregarProducto(nuevoProducto);
      if (response.status === 200) {
        console.log("Producto generado exitosamente");
        setProductos([...productos, nuevoProducto]);
        setShowAddModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (nuevoProducto) => {
    try {
      const response = await actualizarProducto(nuevoProducto, nuevoProducto.pid);
      if (response.status === 200) {
        console.log("Producto editado exitosamente");
        const productosActualizados = productos.map((producto) =>
          producto === productoSeleccionado
            ? { ...producto, ...nuevoProducto }
            : producto
        );
        setProductos(productosActualizados);
        setProductoSeleccionado(null);
        setShowEditModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (productoToDelete) => {
    try {
      const response = await borrarProducto(productoToDelete.pid);
      if (response.status === 200) {
        const productosActualizados = productos.filter(
          (producto) => producto !== productoToDelete
        );
        setProductos(productosActualizados);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const traerTodosLosProductos = async () => {
    try {
      const productosInicio = await traerProductos();
      setProductos(productosInicio.productos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerTodosLosProductos();
  }, []);


  return (
    <>
    
    <div className="producto-tabla">
      <article className="row my-2 d-flex justify-content-center table-responsive">
        <Table striped bordered hover className="tabla-productos text-center">
          <thead>
            <tr>
              <th>Nombre del producto</th>
              <th>Detalle</th>
              <th>Precio</th>
              <th>Link Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.pid}>
                <td>{producto.name}</td>
                <td>{producto.detail}</td>
                <td>{producto.price}</td>
                <td>{producto.img}</td>
                <td>
                  <Button
                    className="m-1"
                    variant="success"
                    onClick={() => {
                      setProductoSeleccionado(producto);
                      setShowEditModal(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} className="me-2" />
                  </Button>
                  <Button
                    className="mx-1 tabla-producto-btn"
                    variant="danger"
                    onClick={() => handleDelete(producto)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="me-2" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </article>
      <div className="tabla-productos-btn-agregar">
        <Button
          className="btn btn-dark mx-2 my-3"
          variant="primary"
          onClick={() => setShowAddModal(true)}
        >
          Agregar Producto
        </Button>
      </div>
      <FormProducto
        show={showAddModal || showEditModal}
        onHide={() => {
          setShowAddModal(false);
          setShowEditModal(false);
          setProductoSeleccionado(null);
        }}
        onSave={showAddModal ? handleAdd : handleEdit}
        producto={productoSeleccionado}
        isEdit={showEditModal}
      />
    </div>
    </>
  );
};

export default TablaProductos;
