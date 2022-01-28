//Esta función valida si el texto ingresado incluye mayúsculas, de ser así el mensaje será restringido.

function validarText(){
    var text_cod = inputUser.value;
    var text_minuscula = text_cod.toLowerCase();

    if(text_cod === text_minuscula){ //Si el texto está escrito solo en minúscula, ingresa al IF.
        validar = true;
    }
    else{ //Si el texto incluye alguna mayúscula, incluye al ELSE.           
        alert("Caracteres invalidos!. \nPor favor ingrese solo letras minúsculas y sin acento.");
        validar = false;
        console.log(validar);
    }
    return validar; //Retorna un valor true o false.
}