import React, { useState } from "react";
import { Container, Button, ModalBody } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import SeleccionServicio from "./TurnosUsuarioReg/SeleccionServicio";
import CalendarioHora from "./TurnosUsuarioReg/CalendarioHora";
import "./turnosusuario.css";
import { agregarTurno } from "../../helpers/ApiTurnos";
import { validationTurno } from "../../helpers/validations";

function TurnosUsuario() {
  const services = [
    {
      title: "Consulta",
      imageS:
        "https://www.clinicaveterinariaejea.com/wp-content/uploads/2014/05/clinica_veterinaria_ejea_073-1024x682.jpeg",
    },
    {
      title: "Vacunación",
      imageS:
        "https://www.sudoesteba.com/adjuntos/800/sudoba/2023/04/cloudfrontuseast1.images.arcpublishing-2.png",
    },
    {
      title: "Peluqueria",
      imageS:
        "https://sumimascotas.com/wp-content/uploads/2023/05/7.-Que-es-una-peluqueria-canina-1.jpg",
    },
  ];

  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMascota, setSelectedMascota] = useState("");
  const [selectedVeterinario, setSelectedVeterinario] = useState("Jose Veterinario");
  const [reservedTurn, setReservedTurn] = useState(null);
  const [modalError, setModalError] = useState(false);
  const [errors, setErrors] = useState({});

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  const handleMascotaChange = (e) => {
    setSelectedMascota(e.target.value);
  };

  const handleVeterinarioChange = (e) => {
    setSelectedVeterinario(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = async () => {
    let erroresForm = {};
    if (
      !selectedService ||
      !selectedDate ||
      !selectedTime ||
      !selectedMascota ||
      !selectedVeterinario
    ) {
      erroresForm.datos = "Complete todos los campos del formulario antes de enviar";
      setErrors(erroresForm);
      setModalError(true);
    }
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
      erroresForm.usuario = "Error al obtener los datos del usuario, intentelo nuevamente";
      setErrors(erroresForm);
      setModalError(true);
    }
    const nuevaReserva = {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
    };
    const nuevoTurno = {
      ownerName: usuario.nombre,
      email: usuario.email,
      name: selectedMascota,
      vet: selectedVeterinario,
      date: selectedDate,
      time: selectedTime,
      detail: selectedService,
    };
    const erroresValidation = validationTurno(nuevoTurno);
    erroresForm = {...erroresForm, ...erroresValidation};
    console.log(erroresForm);
    if (Object.keys(erroresForm).length === 0) {
      try {
        const response = await agregarTurno(nuevoTurno);
        if (response.status === 200) {
          console.log("Turno generado exitosamente");
          setReservedTurn(nuevaReserva);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(erroresForm);
      setModalError(true);
    }
  };

  return (
    <>
      <Container data-aos="fade-up" className="container-turnos-usuario">
        <SeleccionServicio
          services={services}
          selectedService={selectedService}
          onSelectService={handleServiceChange}
        />
        <CalendarioHora
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />
        <div className="input-turno-general">
          <div className="inputs-turno">
            <label htmlFor="mascota">Mascota:</label>
            <input
              type="text"
              id="mascota"
              name="mascota"
              value={selectedMascota}
              onChange={handleMascotaChange}
            />
            <label htmlFor="veterinario">Veterinario:</label>
            <select
              id="veterinario"
              name="veterinario"
              value={selectedVeterinario}
              onChange={handleVeterinarioChange}
            >
              <option value="Jose Veterinario">Jose Veterinario</option>
              <option value="Pedro Veterinario">Pedro Veterinario</option>
            </select>
          </div>
        </div>
        <Button variant="primary" onClick={handleSubmit}>
          Enviar
        </Button>

        {reservedTurn && (
          <div className="datos-enviados">
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
              Turno Reservado
            </h4>
            <p>Servicio: {reservedTurn.service}</p>
            <p>Fecha: {reservedTurn.date}</p>
            <p>Hora: {reservedTurn.time}</p>
          </div>
        )}
        {modalError && (
          <Modal
            show={modalError}
            onHide={() => setModalError(false)}
            backdrop="static"
            keyboard={true}
          >
            <Modal.Header closeButton>
              <h4>Errors! </h4>
            </Modal.Header>
            <ModalBody>
              {Object.keys(errors).map((key) => (
                <h5 key={key}>{errors[key]}</h5>
              ))}
            </ModalBody>
          </Modal>
        )}
      </Container>
    </>
  );
}

export default TurnosUsuario;
