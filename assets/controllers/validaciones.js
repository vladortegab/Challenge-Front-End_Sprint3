// export function valida(input) {
//   const tipoDeInput = input.dataset.tipo

//   if (input.validity.valid) {
//     input.parentElement.classList.remove("input-container--invalid");
//     input.parentElement.querySelector(".input-message-error").innerHTML = "";
//   } else {
//     input.parentElement.classList.add("input-container--invalid");
//     input.parentElement.querySelector(".input-message-error").innerHTML =
//       mostrarMensajeDeError(tipoDeInput, input);
//   }
// }

// const mensajesDeError = {
//   email: {
//     valueMissing: "El campo correo no puede estar vacío",
//     typeMismatch: "El correo no es válido",
//   },
//   password: {
//     valueMissing: "El campo contraseña no puede estar vacío",
//     patternMismatch:
//       "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
//   },
// };

// function mostrarMensajeDeError(tipoDeInput, input) {
//   let mensaje = "";
//   tipoDeErrores.forEach((error) => {
//     if (input.validity[error]) {
//       console.log(tipoDeInput, error);
//       console.log(input.validity[error]);
//       console.log(mensajesDeError[tipoDeInput][error]);
//       mensaje = mensajesDeError[tipoDeInput][error];
//     }
//   });
//   return mensaje;
// }

// inputs.forEach(input => input.addEventListener('blur', valida))

const inputs = document.querySelectorAll('.form-input');

const valid = (e) => {
    const input = e.target;
    console.log(e)
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
    } else {
        input.parentElement.classList.add("input-container--invalid");
        showMessageError(input)
    }
}

const showMessageError = (input) => {
    let message;
    if(input.validity.valueMissing){
        message = '*Este campo no puede estar vacío';
    } else if(input.validity.typeMismatch){
        message = '*El correo no es válido';
    } else {
        message = '*Error en el campo';
    }
    input.parentElement.querySelector(".input-message-error").innerHTML = message;
}

inputs.forEach(input => input.addEventListener('blur', valid))