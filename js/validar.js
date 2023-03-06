"user strict";

const Validar = () => {
    let numero_ced, total, residuo, dig_valido, text;

    numero_ced = document.getElementById("numero_ced").value;//se guarda el número de cédula

    if (numero_ced == "") {//Por si el campo está vacío.
        text = "<i "
            + "style='color:rgb(200, 200, 0); "
            + "filter: drop-shadow(-1px 1px 0px black); "
            + "font-size: 120%;' "
            + "class='fa-solid fa-triangle-exclamation'></i> "
            + "Es necesarios que llene el campo para validar.";
    } else if (isNaN(numero_ced)) {//Por si el valor NO es numérico.
        text = "<i "
            + "style='color:rgb(200, 200, 0); "
            + "filter: drop-shadow(-1px 1px 0px black); "
            + "font-size: 120%;' "
            + "class='fa-solid fa-triangle-exclamation'></i> "
            + "Debe entrar solo dígitos numéricos."
    } else if (numero_ced.length != 11 || numero_ced < 0) {//Por si no tiene 11 dígitos o es negativo.
        text = "<i "
            + "style='color:rgb(200, 200, 0); "
            + "filter: drop-shadow(-1px 1px 0px black); "
            + "font-size: 120%;' "
            + "class='fa-solid fa-triangle-exclamation'></i> "
            + "El campo debe llevar un número<br>entero positivo de 11 cifras.";
    } else {
        let digitos = numero_ced.split(""); //Array con cada digito almacenado.
        total = 0;
        for (let i = 0; i < 10; i++) {//Solo se examinarán los primero 10 dígitos.
            if ((i + 1) % 2 == 0) {//si la posición del número es par...
                digitos[i] = String(parseInt(digitos[i]) * 2);// Se duplica
                if (digitos[i].length == 2) {//si el número tiene 2 cifras
                    let cifras = digitos[i].split("");//se almacena cada cifras
                    digitos[i] = String(parseInt(cifras[0]) + parseInt(cifras[1]));//se suman dichas cifras
                    //Nota: también se le puede restar 9.
                }
            }
            total += parseInt(digitos[i]);//acumula la suma de los dígitos.
        }
        residuo = total % 10;

        dig_valido = residuo > 0 ? 10 - residuo: residuo;
        
        if (digitos[10] == dig_valido) {//si el último dígito es igual al dígito validado...
            text = "<i s"
                + "tyle='color:rgb(0, 200, 0); "
                + "filter: drop-shadow(-1px 1px 0px black); "
                + "font-size: 120%;' "
                + "class='fa-solid fa-circle-check'></i> "
                + "El número de cédula está correcto.";
        } else {
            text = "<i "
                + "style='color:rgb(150, 0, 0); "
                + "filter: drop-shadow(0px 0px 2px #fff); "
                + "font-size: 120%;' "
                + "class='fa-solid fa-circle-xmark'></i> "
                + "El número de cédula <em><mark "
                + "style='background:rgb(200,200,0,.5);"
                + "color:rgb(160, 1, 1);'>"
                + "NO</mark></em> está correcto.";
        }
    }
    document.getElementById("mensaje").innerHTML = text;
}

document.getElementById("numero_ced").addEventListener("keypress", e => {
    if (e.key == "Enter") Validar();
});

document.querySelector(".btn").addEventListener("click", Validar);