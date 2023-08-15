const url = "http://localhost:8080/api/auth/login";
import { validationLogin } from "./validations";
export const authLogin = async (datos) => {
  try {
    const errors = await validationLogin(datos);
    if (Object.keys(errors).length === 0) {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await resp.json();
      return data;
    } else {
      throw errors;
    }
  } catch (error) {
    console.log(error);
  }
};
