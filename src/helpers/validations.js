const ExpRegNombre = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
  ExpRegEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  ExpRegTelefono = /^\d{3}-\d{3}-\d{4}$/,
  ExpRegTexto = /^[\x00-\xFF]*$/,
  ExpRegFecha = /^\d{4}-(0[1-9]|1[0-2])-([12][0-9]|3[01])$/,
  ExpRegHora = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/,
  ExpRegPass = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;


export const validationLogin = (values) => {
  let errors = {};
  if (!values) {
    errors.Form = "El formulario esta vacío, complete los campos antes de enviarlo";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (values.email.length == 1 || !ExpRegEmail.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 30) {
    errors.email = "El email no debe poseer más de 30 caracteres";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 3 || !ExpRegPass.test(values.password)) {
    errors.password = "La contraseña debe tener como mínimo 3 caracteres y ser valida";
  } else if (values.password.length > 30) {
    errors.password = "La contraseña no debe poseer más de 30 caracteres";
  }

  return errors;
};

export const validationPaciente = (values) => {
  let errors = {};
  if (!values) {
    errors.Form = "El formulario esta vacío, complete los campos antes de enviarlo";
  }

  if (!values.ownerName) {
    errors.ownerName = "El nombre del dueño es obligatorio";
  } else if (values.ownerName.length == 1 || !ExpRegNombre.test(values.ownerName)) {
    errors.ownerName = "El nombre del dueño no es válido";
  } else if (values.ownerName.length > 60) {
    errors.ownerName = "El nombre del dueño no debe poseer más de 60 caracteres";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (values.email.length == 1 || !ExpRegEmail.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 30) {
    errors.email = "El email no debe poseer más de 30 caracteres";
  }

  if (!values.phone) {
    errors.phone = "El telefono es obligatorio";
  } else if (values.phone.length == 1 || !ExpRegTelefono.test(values.phone)) {
    errors.phone = "El telefono no es válido";
  } else if (values.phone.length > 30) {
    errors.phone = "El telefono no debe poseer más de 30 caracteres";
  }

  if (!values.name) {
    errors.name = "El nombre de la mascota es obligatorio";
  } else if (values.name.length == 1 || !ExpRegNombre.test(values.name)) {
    errors.name = "El nombre de la mascota no es válido";
  } else if (values.name.length > 60) {
    errors.name = "El nombre de la mascota no debe poseer más de 60 caracteres";
  }
  if (values.race) {
    if (values.race.length == 1 || !ExpRegTexto.test(values.race)) {
      errors.race = "La raza de la mascota no es válida";
    } else if (values.race.length > 60) {
      errors.race = "La raza de la mascota no debe poseer más de 60 caracteres";
    }
  }

  if (values.species) {
    if (values.species.length == 1 || !ExpRegTexto.test(values.species)) {
      errors.species = "La especie de la mascota no es válida";
    } else if (values.species.length > 60) {
      errors.species = "La especie de la mascota no debe poseer más de 60 caracteres";
    }
  }

  return errors;
};


export const validationTurno = (values) => {
  let errors = {};
  if (!values) {
    errors.Form = "El formulario esta vacío, complete los campos antes de enviarlo";
  }

  if (!values.ownerName) {
    errors.ownerName = "El nombre del dueño es obligatorio";
  } else if (values.ownerName.length == 1 || !ExpRegNombre.test(values.ownerName)) {
    errors.ownerName = "El nombre del dueño no es válido";
  } else if (values.ownerName.length > 60) {
    errors.ownerName = "El nombre del dueño no debe poseer más de 60 caracteres";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (values.email.length == 1 || !ExpRegEmail.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 30) {
    errors.email = "El email no debe poseer más de 30 caracteres";
  }

  if (!values.name) {
    errors.name = "El nombre de la mascota es obligatorio";
  } else if (values.name.length == 1 || !ExpRegNombre.test(values.ownerName)) {
    errors.name = "El nombre de la mascota no es válido";
  } else if (values.name.length > 60) {
    errors.name = "El nombre de la mascota no debe poseer más de 60 caracteres";
  }

  if (!values.vet) {
    errors.vet = "El nombre del veterinario es obligatorio";
  } else if (values.vet.length == 1 || !ExpRegNombre.test(values.vet)) {
    errors.vet = "El nombre del veterinario no es válido";
  } else if (values.vet.length > 60) {
    errors.vet = "El nombre del veterinario no debe poseer más de 60 caracteres";
  }

  if (!values.date) {
    errors.date = "La fecha del turno es obligatoria";
  } else if (values.date.length == 1 || !ExpRegFecha.test(values.date)) {
    errors.vet = "La fecha del turno no es válida";
  } else if (values.date.length > 10) {
    errors.date = "La fecha del turno no debe poseer más de 10 caracteres";
  }

  if (!values.time) {
    errors.time = "La hora del turno es obligatoria";
  } else if (values.time.length == 1 || !ExpRegHora.test(values.time)) {
    errors.vet = "La hora del turno no es válida";
  } else if (values.time.length > 5) {
    errors.time = "La hora del turno no debe poseer más de 5 caracteres";
  }
  if (values.detail) {
    if (values.detail.length == 1 || !ExpRegTexto.test(values.detail)) {
      errors.detail = "El detalle del turno no es válido";
    } else if (values.detail.length > 100) {
      errors.detail = "El detalle del turno no debe poseer más de 100 caracteres";
    }
  }

  return errors;
};

export const validationRegistro = (values) => {
  let errors = {};
  if (!values) {
    errors.Form = "El formulario esta vacío, complete los campos antes de enviarlo";
  }

  if (!values.usuario) {
    errors.usuario = "El nombre es obligatorio";
  } else if (values.usuario.length == 1 || !ExpRegNombre.test(values.usuario)) {
    errors.usuario = "El nombre no es válido";
  } else if (values.usuario.length > 60) {
    errors.usuario = "El nombre no debe poseer más de 60 caracteres";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (values.email.length == 1 || !ExpRegEmail.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 30) {
    errors.email = "El email no debe poseer más de 30 caracteres";
  }

  if (!values.password1) {
    errors.password1 = "La contraseña es obligatoria";
  } else if (values.password1.length < 3 || !ExpRegPass.test(values.password1)) {
    errors.password = "La contraseña debe tener como mínimo 3 caracteres y ser valida";
  } else if (values.password1.length > 30) {
    errors.password1 = "La contraseña no debe poseer más de 30 caracteres";
  }

  if (!values.password2) {
    errors.password2 = "Repetir la contraseña es obligatorio";
  } else if (values.password2.length < 3 || !ExpRegPass.test(values.password2)) {
    errors.password2 = "La contraseña debe tener como mínimo 3 caracteres y ser valida";
  } else if (values.password2.length > 30) {
    errors.password2 = "La contraseña no debe poseer más de 30 caracteres";
  }

  if (!(values.password1 && values.password2 && (values.password1 === values.password2))) {
    errors.matchPassword = "Las contraseñas deben ser iguales";
  }

  return errors;
};

