import React from 'react';
import './style.css';
import {Label, Input, FormText } from 'reactstrap';

const CardRegister = (props) => {
    const initialStateValues = {
        nombre: "",
        precio: "",
        cantidad: "",
        foto: ""
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({ ...initialStateValues });
    };

    const addProduct = async (linkObject) => {
        try {
          if (currentId === "") {
            await db.collection("Products").doc().set(linkObject);
            toast("New Link Added", {
              type: "success",
            });
          } else {
            await db.collection(database).doc(currentId).update(linkObject);
            toast("Link Updated Successfully", {
              type: "info",
            });
            setCurrentId("");
          }
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <section class="card-section">
            <div class="card">
                <form onSubmit={handleSubmit} class="inputs">
                    <div>

                        <div>
                            <label htmlFor="product">Ingrese el nombre del producto</label>
                            <input
                                name="nombre"
                                type="Text"
                                value={values.nombre}
                                id="product"
                                className="form-control"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="price">Precio</label>
                            <input
                                name="precio"
                                type="number"
                                value={values.precio}
                                id="price"
                                className="form-control"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Label for="exampleSelect">Categoria</Label>
                            <Input type="select" name="category" id="exampleSelect">
                                <option>Cono</option>
                                <option>Vaso</option>
                                <option>Smooth</option>
                            </Input>
                        </div>
                        <div>
                            <label htmlFor="cant">Cantidad</label>
                            <input
                                name="cantidad"
                                type="number"
                                value={values.cantidad}
                                id="cant"
                                className="form-control"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <div class="avatar">
                                <label for="">Subir Foto</label>
                                <input type="file" id="file-uploader" name="Foto" />
                                <label for="file-uploader" class="avatar-selector">
                                    <i class="fa fa-camera"></i>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="botones">
                        <input class="button-design" name="Registrar" type="submit" value="Registrar" />
                        <input class="button-design" type="submit" value="Cancelar" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CardRegister;