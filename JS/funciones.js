function valida() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var nacim = document.getElementById("dtFechaNac").value;
    var edad = parseInt(document.getElementById("nbEdad").value);
    var correo = document.getElementById("txtCorreo").value;
    var mensaje='';

    if (nombre=='') {
        mensaje += "El nombre no puede quedar en blanco\n";
    }
    if (apellido=='') {
        mensaje += "El apellido no puede quedar en blanco\n";
    }
    if (nacim == null || nacim=='') {
        mensaje += "La fecha de nacimiento no puede quedar en blanco\n";
    }
    if (edad == 0) {
        mensaje += "La edad no puede quedar en blanco\n";
    }
    if (correo == '') {
        mensaje += "El correo no puede quedar en blanco\n";
    }
    if (mensaje.length >0) {
        alert("favor de verificar los siguientes campos:\n"+mensaje);
    }

}