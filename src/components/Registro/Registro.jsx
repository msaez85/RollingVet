import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./registro.css";

const Registro = () => {

    const [resp, setResp] = useState("");
    const [value, setValue] = useState({
        usuario: "",
        email: "",
        password1: "",
        password2: "",
    });

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        if (!validateEmail(value.email)) {
            setEmailError("Ingrese un correo electrónico válido");
            return;
        }

        if (value.password1 !== value.password2) {
            setPasswordError("Las contraseñas no coinciden");
            return;
        }

        setResp(value);
        clearForm();
    }

    const clearForm = () => {
        setValue({
            usuario: "",
            email: "",
            password1: "",
            password2: "",
        });
        setEmailError("");
        setPasswordError("");
    }

    const validateEmail = (email) => {
        // Utiliza una expresión regular simple para validar el formato del correo electrónico
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <>
            <Form onSubmit={handleSumbit} className="registro-usuario">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control required type="text" name="usuario" id="usuario" placeholder="Ingrese su Usuario" value={value.usuario} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" name="email" id="email" placeholder="Ingrese su Email" value={value.email} onChange={handleChange} />
                    <Form.Text className="text-danger">{emailError}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control required type="password" name="password1" id="password1" placeholder="Ingrese su contraseña" value={value.password1} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control required type="password" name="password2" id="password2" placeholder="Repita su contraseña" value={value.password2} onChange={handleChange} />
                    <Form.Text className="text-danger">{passwordError}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check required type="checkbox" label="Acepto terminos y condiciones" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>

            <h3>{Object.values(resp)}</h3>
        </>
    );
};

export default Registro;