function validar () {
    var nombre, apellido, correo, asunto, consulta;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    asunto = document.getElementById("asunto").value;
    consulta = document.getElementById("consulta").value;

    expresion = /\w+@\w+\.+[a.z]/;

    if (nombre === "" || apellido === "" || correo === "" || asunto === "" || consulta === "") {
        alert("Todos los campos marcados con * son obligatorios");
        return false;
    }

    else if (nombre.length>30) {
        alert ("El nombre es muy largo.");
        return false;
    }

    else if (apellido.length>20) {
        alert ("El apellido es muy largo.");
        return false;
    }

    else if (correo.length<10) {
        alert ("El correo es muy corto.");
        return false;
    }

    else if (correo.length>100) {
        alert ("El correo es muy largo.");
        return false;
    }

    else if (!expresion.test(correo)){
        alert("El correo no es válido.");
        return false;
    }

    else if (asunto.length>50) {
        alert ("El asunto es muy largo.");
        return false;
    }



}
