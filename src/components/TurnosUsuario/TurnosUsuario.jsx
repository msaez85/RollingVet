import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import SeleccionServicio from "./TurnosUsuarioReg/SeleccionServicio";
import CalendarioHora from "./TurnosUsuarioReg/CalendarioHora";
import "./turnosusuario.css";


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
  const [reservedTurn, setReservedTurn] = useState(null);



  const handleServiceChange = (service) => {
    setSelectedService(service);
  };


  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };



  const handleSubmit = () => {
    if (!selectedService || !selectedDate || !selectedTime) {
      alert("Completa todos los campos antes de enviar.");
      return;
    }

    const reservedInfo = {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
    };
    setReservedTurn(reservedInfo);
    console.log(reservedInfo);
  };

  
  return (
    <>
      <Container data-aos='fade-up' className="container-turnos-usuario">
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
        <Button   variant="primary" onClick={handleSubmit}>
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
      </Container>
    </>
  );
}

export default TurnosUsuario;
