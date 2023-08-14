export const validationLogin = (values) => {
  let errors = {};
  if (!values.correo) {
    errors.correo = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
    errors.correo = "El email no es válido";
  } else if (values.correo.length > 30) {
    errors.correo = "El email no debe poseer más de 30 caracteres";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 3) {
    errors.password = "La contraseña debe tener como mínimo 3 caracteres";
  } else if (values.password.length > 30) {
    errors.password = "La contraseña no debe poseer más de 30 caracteres";
  }
  return errors;
};
