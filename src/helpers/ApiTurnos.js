const url = "http://localhost:8080/api/turnos";

export const agregarTurno = async (datos) => {
    const token = JSON.parse(localStorage.getItem("token"));
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};

export const actualizarTurno = async (datos, id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const resp = await fetch(url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      });
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
      return { msg: "No se conectó con backend" };
    }
  };

  export const borrarTurno = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
        console.log(url + "/" + id);
      const resp = await fetch(url + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      });
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
      return { msg: "No se conectó con backend" };
    }
  };

  export const traerTurnos = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const resp = await fetch(url + "?desde=0&limite=10", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      });
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
      return { msg: "No se conectó con backend" };
    }
  };

