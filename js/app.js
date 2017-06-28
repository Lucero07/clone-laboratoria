var api = {
    url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var $contenedorLista = $("#listaAlumnas");

var cargarPagina = function () {
    cargarLista();
};

var cargarLista = function () {

    $.getJSON(api.url, function (alumnas) {

        alumnas.forEach(formatoAlumna);
    });
};

var formatoAlumna = function (alumna) {

    var numLista = alumna.id;
    var nombreAlumna = alumna.name + " " + alumna.pLastName + " " + alumna.mLastName;
    
    var $filaAlumna = $('<tr/>');
    var $listaDato = $('<td/>').append(numLista);
    var $nombreDato = $('<td/>').append(nombreAlumna);
    var $check = $('<td/>').append('<input type="checkbox"/>');

    $filaAlumna.append($listaDato).append($nombreDato).append($check);
    $contenedorLista.append($filaAlumna);

    console.log(alumna)
}


$(document).ready(cargarPagina);
