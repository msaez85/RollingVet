const url = "https://rolling-vet-backend.vercel.app/api/turnos";

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
      const resp = await fetch(url + "?desde=0&limite=100", {
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

  export const traerTurnosDiarios = async (fecha, vet) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const veterinario = vet.replaceAll(" ", "%20");
    try {
      const resp = await fetch(url + "/" + fecha + "/" + veterinario + "?desde=0&limite=100", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      });
      console.log(url + "/" + fecha + "/" + veterinario + "?desde=0&limite=100");
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
      return { msg: "No se conectó con backend" };
    }
  };


