//Haz tú validación en javascript acá
const inputs = document.querySelectorAll("#formulario input");

inputs.forEach((input) => {
    input.addEventListener('focus', (input) => {
        verificar(input.target);
    });
    input.addEventListener('blur', (input) => {
        verificar(input.target);
    });
}
);

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("input[name='nombre']").value;
    const email = document.querySelector("input[name='email']").value;
    const asunto = document.querySelector("input[name='asunto']").value;
    alert("Información enviada");
    document.getElementById("formulario").reset();
});

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^.{10,50}$/,
}

const verificar = (e) => {
    const input__message__error = document.querySelector(`#formulario__${e.name} .input__message__error`);
    if (e.value == "") {
        input__message__error.style.display = "block";
        input__message__error.innerHTML = "El campo esta vacio"
        //el campo esta vacio
    } else if (!expresiones[e.name].test(e.value)) {
        input__message__error.style.display = "block";
        input__message__error.innerHTML = "El valor no cumple"
// el valor no cumple
        
    } else {
        input__message__error.style.display = "none";
    }
    


    


}


/*
function verificar(input) {
    const tipoDeInput = input.dataset.tipo;
    if (valida[tipoDeInput]) {
        valida[tipoDeInput](input);
    }
  
    if (input.validity.valid) {
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
  }
  function limpiarSpan(input){
    const tipoDeInput = input;
    const container = tipoDeInput.parentElement;
    const mensaje = container.children[0];

    if (!input.validity.valid){
        mensaje.innerHTML = "";
    }
}
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  
const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    Asunto: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El estado debe contener entre 10 a 100 caracteres.",
    },
  };

  function mostrarMensajeDeError(tipoData, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  };

  const validarFormulario = (e) =>{

  } */
