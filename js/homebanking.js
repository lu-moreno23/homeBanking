//Declaración de variables
const nombreUsuario = 'Lu Moreno';
let saldoCuenta = 1000;
let limiteExtraccion = 3000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

function sumarDineroACuenta(cantidadDinero){
  saldoCuenta += cantidadDinero;
}

function restarDineroACuenta(cantidadDinero){
  return saldoCuenta -= cantidadDinero;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  let ingresoNuevoLimiteExtraccion = prompt ("Ingresar nuevo límite de extracción");
  let nuevoLimiteExtraccion = parseInt (ingresoNuevoLimiteExtraccion);
  if (limiteExtraccionEsNaN(nuevoLimiteExtraccion)){
    return alert("Solo puedes ingresar numeros");
  } else if (limiteExtraccionEsNegativo(nuevoLimiteExtraccion)){
    return alert ("Solo puedes ingresar montos mayores a 0")
  } else {
    limiteExtraccion = nuevoLimiteExtraccion;
  }
  actualizarLimiteEnPantalla();
  alert ("Tu nuevo límite de extracción es: " + nuevoLimiteExtraccion);
}

//Validaciones para límites de extracción
function limiteExtraccionEsNaN(nuevoLimiteExtraccion){
  return (isNaN(nuevoLimiteExtraccion));
}

function limiteExtraccionEsNegativo(nuevoLimiteExtraccion){
  return (nuevoLimiteExtraccion <= 0);
}


function extraerDinero() {
  const saldoAnteriorAExtraccion = saldoCuenta;
  const cantidadExtraccion = prompt ("¿Cuánto desea extraer?");
  const saldoAExtraer = parseInt(cantidadExtraccion);
  if (extraerDineroEsNaN(cantidadExtraccion)){
    alert("Solo puedes ingresar números")
  } else if (extraccionEsNegativa(cantidadExtraccion)){
    alert ("Solo puedes ingresar montos mayores a 0")
  } else if (limiteExtraccionNoEsValido(saldoAExtraer,limiteExtraccion)){
    alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción");
  } else if (noHaySaldoDisponibleEnCuenta(saldoAExtraer,saldoCuenta)){
    alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
  } else if (noEntregaBilletesDeCien(saldoAExtraer)){
    alert("Solo puedes extraer billetes de 100");
  } else {restarDineroACuenta(saldoAExtraer);
  const saldoPosteriorAExtraccion = saldoCuenta;
  alert("Has extraído: " + cantidadExtraccion + "\n Saldo Anterior: " + saldoAnteriorAExtraccion + "\n Saldo Actual: " + saldoPosteriorAExtraccion);
  actualizarSaldoEnPantalla();
}
actualizarSaldoEnPantalla();
}

  //Funciones utilizadas en extraerDinero
function limiteExtraccionNoEsValido(saldoAExtraer, limiteExtraccion) {
  return saldoAExtraer > limiteExtraccion;
}

function noHaySaldoDisponibleEnCuenta(saldoAExtraer,saldoCuenta){
  return saldoAExtraer > saldoCuenta;
}

function noEntregaBilletesDeCien(saldoAExtraer){
  return saldoAExtraer%100 != 0;
}

//Validaciones para extracción de dinero
function extraerDineroEsNaN(cantidadExtraccion){
  return isNaN(cantidadExtraccion)
}

function extraccionEsNegativa(cantidadExtraccion){
  return (cantidadExtraccion <= 0);
}

  
function depositarDinero() {
  let saldoAnteriorAlDeposito = saldoCuenta;
  let cantidadDeposito = prompt("¿Cuánto desea depositar?");
  let saldoADepositar = parseInt(cantidadDeposito);
  if (depositarDineroEsNaN(saldoADepositar)){
    return alert("Solo puedes ingresar números");
  } else if (depositoEsNegativo(saldoADepositar)){
    return alert ("Solo puedes ingresar montos mayores a 0");
  } sumarDineroACuenta(saldoADepositar);
  let saldoPosteriorAlDeposito = saldoCuenta;
  actualizarSaldoEnPantalla();
  alert("Has depositado: " + cantidadDeposito + "\n Saldo Anterior: " + saldoAnteriorAlDeposito + "\n Saldo Actual: " + saldoPosteriorAlDeposito);
}

//Validaciones para deposito de dinero
function depositarDineroEsNaN(saldoADepositar){
  return isNaN(saldoADepositar);
}

function depositoEsNegativo(saldoADepositar){
  return (saldoADepositar <= 0);
}

function pagarServicio() {

const agua = 350;
const telefono = 425;
const luz = 210;
const internet = 570;

let servicioAPagarSeleccionado = parseInt(prompt("Ingrese el número que corresponda con el servicio que desea pagar" + "\n" + 
"1- Agua" + "\n" + 
"2- Teléfono" + "\n" + 
"3- Luz" + "\n" + 
"4- Internet"));

if (servicioAPagarEsNaN(servicioAPagarSeleccionado)){
  return alert("Solo puedes ingresar números");
}

switch(servicioAPagarSeleccionado){
  case 1:
  ejecutarPagoDeServicio(agua);
    break;
  case 2:
  ejecutarPagoDeServicio(telefono);
    break;
  case 3:
  ejecutarPagoDeServicio(luz);
    break;
  case 4:
  ejecutarPagoDeServicio(internet);
    break;
  default: 
    alert("El servicio seleccionado no existe");
  }
actualizarSaldoEnPantalla();
}

//Función para el pago de servicio
function ejecutarPagoDeServicio(servicioAPagarSeleccionado){
  if (servicioAPagarSeleccionado > saldoCuenta){
    alert("Tu saldo es insuficiente para pagar este servicio");
  } else {
    saldoCuenta -= servicioAPagarSeleccionado;
    alert("Tu pago fue realizado con éxito");
  }
}

function servicioAPagarEsNaN(servicioAPagarSeleccionado){
  return isNaN(servicioAPagarSeleccionado);
}

function prestamoEsNaN(confirmacionOtorgamientoDePrestamo){
  return isNaN(confirmacionOtorgamientoDePrestamo);
}

function prestamoEsNumeroNegativo(confirmacionOtorgamientoDePrestamo){
  return confirmacionOtorgamientoDePrestamo <= 0
}

function transferirDinero() {
const cuentaAmiga1 = 1234567;
const cuentaAmiga2 = 7654321;
let cuentaSeleccionada= parseInt(prompt("Seleccione la cuenta a la que desea transferir" + 
"\n" + 
"Cuentas amigas:" + 
"\n" + 
cuentaAmiga1 + 
"\n" + 
cuentaAmiga2));

if(cuentaSeleccionada !== cuentaAmiga1 && cuentaSeleccionada !== cuentaAmiga2){
  return alert("La cuenta ingresada no pertenece a tus amigos");
} 

let montoATransferir = parseInt(prompt("Ingrese el monto que desea transferir"));
if (montoATransferirEsNaN(montoATransferir)){
  return alert("Solo puedes ingresar números");
} else if (montoATransferirEsNegativo(montoATransferir)){
  return alert("Solo puedes ingresar montos mayores a 0")
} else if (montoATransferir > saldoCuenta) {
  alert("No posees la suficiente cantidad de dinero para la transferencia");
} else {
  restarDineroACuenta(montoATransferir)
  alert("Se ha transferido: " + montoATransferir + "\n" + "Cuenta destino: " + cuentaSeleccionada);
}
actualizarSaldoEnPantalla()
}

//Validaciones transferencia de dinero
function montoATransferirEsNaN(montoATransferir){
  return isNaN(montoATransferir)
}

function montoATransferirEsNegativo(montoATransferir){
  return (montoATransferir <= 0);
}

//Funcionalidad nueva: otorgamiento de préstamo

function otorgarPrestamo(servicioAPagarSeleccionado){
  let totalPrestamo = 10000
  let tasaDeInteresDecimal = 0.012;
  let tasaDeInteresEntera = (tasaDeInteresDecimal * 100);
  const confirmacionOtorgamientoDePrestamo = parseInt(prompt("Desea acceder a un préstamo por " + totalPrestamo + " con una tasa de interés del " + 
  tasaDeInteresEntera + "\n" + 
  "1 - Si" + "\n" + 
  "2- No"))
  
  if (servicioAPagarEsNaN(confirmacionOtorgamientoDePrestamo)){
    return alert("Solo puedas ingresar números");
  } else if (prestamoEsNumeroNegativo(confirmacionOtorgamientoDePrestamo)){
    return alert("Solo puedes elegir entre las opciones 1- Si o 2- No")
  } else if (confirmacionOtorgamientoDePrestamo === 2){
    alert("Gracias por operar con Homebanking")
  } else{
    saldoCuenta += totalPrestamo + (totalPrestamo * tasaDeInteresDecimal);
  }
  actualizarSaldoEnPantalla()
}

function iniciarSesion() {
  const passwordCuenta = 4343;
  const codigoCuentaIngresado = parseInt(prompt("Ingrese la constraseña de su cuenta"));

  if (codigoCuentaIngresado !== 4343){
    saldoCuenta -= saldoCuenta;
    alert("Tu dinero ha sido retenido por cuestiones de seguridad");
  }else { 
    alert("Bienivenido/a " + nombreUsuario + " ya puedes ingresar a tu cuenta");
  }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    iniciarSesion();
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
