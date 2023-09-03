import React from "react";

const CalendarioHora = ({
  selectedDate,
  selectedTime,
  turnsAlreadyTaken,
  onDateChange,
  onTimeChange,
}) => {
  const currentDate = new Date();

  const filteredDates = Array.from({ length: 27 }, (_, i) =>
    i % 2 === 0 ? i / 2 + 8 : Math.floor(i / 2) + 8.5
  ).filter((hour) => {
    const currentTime = new Date();
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(Math.floor(hour), hour % 1 === 0.5 ? 30 : 0, 0, 0);
    const formattedTime = `${Math.floor(hour)}:${hour % 1 === 0.5 ? "30" : "00"}`;
    return selectedDateTime > currentTime && !turnsAlreadyTaken.includes(formattedTime);
  });

  return (
    <>
      <div className="input-turno-general">
        <h4 style={{ textAlign: "center", margin: "1rem" }}>
          {" "}
          Seleccione fecha y horario para su turno:
        </h4>
        <div className="inputs-turno">
          <input
            type="date"
            value={selectedDate}
            onChange={onDateChange}
            min={currentDate.toISOString().split('T')[0]}
            required
          />
          <select value={selectedTime} onChange={onTimeChange} required>
            <option value="" disabled>
              Selecciona el Horario
            </option>
            {filteredDates.map((hour) => (
            <option
              key={hour}
              value={`${Math.floor(hour)}:${hour % 1 === 0.5 ? "30" : "00"}`}
            >
              {`${Math.floor(hour)}:${hour % 1 === 0.5 ? "30" : "00"}`}
            </option>
          ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CalendarioHora;
