const url = "https://rolling-vet-backend.vercel.app/api/usuarios";

export const agregarUsuario = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};
