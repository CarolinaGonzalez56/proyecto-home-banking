//Declaración de variables
var nombreUsuario;
nombreUsuario = "Carolina Gonzalez";

var saldoCuenta;
saldoCuenta = 15000;

var limiteExtraccion;
limiteExtraccion = 5000;

var agua = 350;

var telefono = 425;

var luz = 210;

var internet = 570;

var cuentaAmiga1;
cuentaAmiga1 = 1234567;

var cuentaAmiga2;
cuentaAmiga2 = 7654321;

var codigoDeSeguridad;
codigoDeSeguridad = 1219;

function ingresoDeDinero(dineroIngresado) {
    console.log(saldoCuenta+dineroIngresado); 
}

function retirarDinero(dineroRetirado) {
    console.log(saldoCuenta+dineroRetirado);
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
window.onload(iniciarSesion());

//nuevas funciones

function extraer() {
  var saldoAnterior = saldoCuenta;
  saldoCuenta = saldoCuenta - cantidad;
  actualizarSaldoEnPantalla();
  alert("Ha retirado: $ " + cantidad + "\nSaldo Anterior: $ " + saldoAnterior + "\nSaldo Actual: $ " + saldoCuenta);
}

function ingresoDeDinero() {
  var saldoAnterior = saldoCuenta;
  saldoCuenta = saldoCuenta + cantidad;
  actualizarSaldoEnPantalla();
  alert("Han ingresado: $ " + cantidad + "\nSaldo Anterior: $ " + saldoAnterior + "\nSaldo Actual: $ " + saldoCuenta);
}



//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
  limiteExtraccion = prompt("Ingrese el nuevo límite de extracción: ");
    cantidad = parseInt (limiteExtraccion);
    if (!isNaN(cantidad)) {
        alert("El nuevo límite de extracción es: $ " + cantidad);
        actualizarLimiteEnPantalla(); }
    else {
        alert("Datos incorrectos. Vuelva a intentar.");
    }
}

function extraerDinero() {
  var extraccion = prompt("Cuanto dinero desea extraer?");
  if (extraccion == null || extraccion == "") {
    alert("No se ingreso monto para extraer.");
  }else {
  cantidad = parseInt(extraccion);
  if (extraccion > saldoCuenta) {
    alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
  }
  else if (extraccion > limiteExtraccion){
    alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion.");
  }
  else if (extraccion %100 >0){
    alert("Solo puedes extraer billetes de $100.");
  }
  else {
     extraer();
  }
 } 
}

function depositarDinero() {
  var deposito = prompt("Ingrese el monto que desea depositar:");
  cantidad = parseInt(deposito);
  if (!isNaN(cantidad)) {
      ingresoDeDinero();
  }else {
      alert("Datos incorrectos. Vuelva a intentar.");
  }
}


function pagarServicio() {
  var servicios = prompt("Ingrese el numero que corresponda con el servicio que queres pagar: \n1- Agua \n2- luz \n3- Internet \n4- Telefono");
  //cantidad = parseInt(servicios);
  switch (servicios){
    case '1':
      if (agua > saldoCuenta){
        alert("No hay suficiente saldo para pagar este servicio.");
      }else{
         saldoCuenta -= agua;
         actualizarSaldoEnPantalla();
         alert("Has pagado el servicio Agua. \nDinero descontado: $ " + luz + " \nSaldo actual: $ " + saldoCuenta);
      }
      break;
      case '2':
          if (luz > saldoCuenta){
            alert("No hay suficiente saldo para pagar este servicio.");
          }else{
            saldoCuenta -= luz;
          actualizarSaldoEnPantalla();
        alert("Has pagado el servicio Luz. \nDinero descontado: $ " + luz + " \nSaldo actual: $ " + saldoCuenta);
          }
        break;
        case '3':
            if (internet > saldoCuenta){
              alert("No hay suficiente saldo para pagar este servicio.");
            }else{
              saldoCuenta -= internet;
            actualizarSaldoEnPantalla();
          alert("Has pagado el servicio Internet. \nDinero descontado: $ " + internet + " \nSaldo actual: $ " + saldoCuenta);
            }
          break;
          case '4':
              if (telefono > saldoCuenta){
                alert("No hay suficiente saldo para pagar este servicio.");
              }else{
                saldoCuenta -= telefono;
              actualizarSaldoEnPantalla();
            alert("Has pagado el servicio Telefono. \nDinero descontado: $ " + telefono + " \nSaldo actual: $ " + saldoCuenta);
              }
            break;
            default:
              alert("No existe el servicio que se ha seleccionado.");
  }
}

function transferirDinero() {
  var transferencia = prompt("Ingrese el monto que desea transferir.");
  cantidad = parseInt(transferencia);
  if (transferencia > saldoCuenta){
    alert("No se puede transferir esa cantidad de dinero.");
  }else{
    var numeroCuenta = prompt("Ingrese el numero de cuenta:");
    switch(numeroCuenta){
      case "1234567":
          var saldoAnterior = saldoCuenta;
          saldoCuenta = saldoCuenta - transferencia;
          actualizarSaldoEnPantalla();
          alert("Se han transferido $ " + transferencia + " \nCuenta destino: " + cuentaAmiga1);
      break;
      case "7654321":
          var saldoAnterior = saldoCuenta;
          saldoCuenta = saldoCuenta - transferencia;
          actualizarSaldoEnPantalla();
          alert("Se han transferido $ " + transferencia + " \nCuenta destino: " + cuentaAmiga2);
          break;
          default:
            alert("Solo puede transferirse dinero a una cuenta amiga.");
    }
  }
}



function iniciarSesion() {
  var ingresar = prompt("Ingrese el codigo de su cuenta.");
  codigo = parseInt(ingresar);
  if (ingresar ==codigoDeSeguridad){
    alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
  }else{
    var saldoAnterior = saldoCuenta;
    saldoCuenta = 0;
    alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
  }
  Iniciarsesión ();
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