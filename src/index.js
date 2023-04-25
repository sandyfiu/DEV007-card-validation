import validator from './validator.js';

const numeroTarjeta = document.getElementById("validar")
numeroTarjeta.addEventListener("click", (e) => obtenerNumeroTarjeta(e))

function obtenerNumeroTarjeta(e){
  e.preventDefault();

  const numeroIngresado = document.getElementById("numeroTarjeta").value;

  if (validator.isValid(numeroIngresado)) {
    alert("El Número Ingresado es Válido");

  } 
  else
  {
    alert ("El Número Ingresado NO es válido");

  }
  const numFinal = validator.maskify(numeroIngresado);
  alert("Número de Tarjeta: " + numFinal);


}