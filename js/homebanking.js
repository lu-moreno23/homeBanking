//Declaración de variables
const nombreUsuario = 'Lu Moreno';
let saldoCuenta = 0;
let limiteExtraccion = 3000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

function sumarDineroACuenta(cantidadDinero){
  saldoCuenta += cantidadDinero;
}

function restarDineroACuenta(cantidadDinero){
  saldoCuenta -= cantidadDinero;
}


//Chequea si hay saldo disponible en la cuenta
function haySaldoDisponible() {
  return saldoCuenta > 0;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  let ingresoNuevoLimiteExtraccion = prompt ("Ingresar nuevo límite de extracción");
  let nuevoLimiteExtraccion = parseInt (ingresoNuevoLimiteExtraccion);
  limiteExtraccion = nuevoLimiteExtraccion;
  actualizarLimiteEnPantalla();
  alert ("Tu nuevo límite de extracción es: " + nuevoLimiteExtraccion);
}

function extraerDinero() {
  let saldoAnteriorAExtraccion = saldoCuenta;
  let cantidadExtraccion = prompt ("¿Cuánto desea extraer?");
  let saldoAExtraer = parseInt(cantidadExtraccion);
  if (puedoSacarPlata()) {
    alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion");
  } else if (saldoAExtraer > saldoCuenta){
    alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
  } else if (saldoAExtraer%100 != 0) {
    alert("Solo puedes extraer billetes de 100")
  } else {
  restarDineroACuenta(saldoAExtraer);
  let saldoPosteriorAExtraccion = saldoCuenta;
  actualizarSaldoEnPantalla();
  alert("Has extraído: " + cantidadExtraccion + "\n Saldo Anterior: " + saldoAnteriorAExtraccion + "\n Saldo Actual: " + saldoPosteriorAExtraccion);
  }
}

function puedoSacarPlata() {
  return haySaldoDisponible() && extraccionValida();
}

function extraccionValida(saldoAExtraer, limiteExtraccion) {
  if (saldoAExtraer > limiteExtraccion) {
    alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion");
  }
}


if (puedoSacarPlata()) {
  hago algo
} else {
  hago otra cosa
}

function depositarDinero() {
  let saldoAnteriorAlDeposito = saldoCuenta;
  let cantidadDeposito = prompt("¿Cuánto desea depositar?");
  let saldoADepositar = parseInt(cantidadDeposito);
  sumarDineroACuenta(saldoADepositar);
  let saldoPosteriorAlDeposito = saldoCuenta;
  actualizarSaldoEnPantalla();
  alert("Has depositado: " + cantidadDeposito + "\n Saldo Anterior: " + saldoAnteriorAlDeposito + "\n Saldo Actual: " + saldoPosteriorAlDeposito);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
