const txtNombre = document.querySelector('.txtNombre');
const txtApellido = document.querySelector('.txtApellido');
const txtFechaNaciemiento = document.querySelector('.txtFechaNaci');
const txtDireccion = document.querySelector('.txtDireccion');
const txtTiposangre = document.querySelector('.txtTipoSangre');
const txtNombreFamiliar = document.querySelector('.txtNombreFamiliar');
const txtParentesco = document.querySelector('.txtParentesco');
const txtEdad = document.querySelector('.txtEdad');
const txtNum = document.querySelector('.txtNum');
const txtEnfermedad = document.querySelector('.txtEnfermedad');
const txtTiempo = document.querySelector('.txtTiempo');
const txtDetalle = document.querySelector('.txtDetalle');
const txtFechaInterno = document.querySelector('.txtFechaInterno');
const txtHospital = document.querySelector('.txtHospital');
const txtDiagnostico = document.querySelector('.txtDiagnostico');
const tabla = document.querySelector('.table');

const input = document.querySelectorAll('.txtNom');
let id = 1
let objet = []
const Btn = document.querySelector(".btnEnviar");
//const prueba = document.querySelector(".btn");

document.addEventListener('DOMContentLoaded', ()=>{
 
    if(localStorage.getItem('Pacientes')){
        objet  = JSON.parse(localStorage.getItem('Pacientes')) || [];
          
    }  
});




function enviar() {


    const objeto= [{
        id: id + 1,
        nombrePaciente: txtNombre.value,
        Apellido: txtApellido.value,
        fechanacimiento: txtFechaNaciemiento.value,
        direccion: txtDireccion.value,
        tipoSangre: txtTiposangre.value,
        nombreFamiliar: txtNombreFamiliar.value,
        parentesco: txtParentesco.value,
        edad: txtEdad.value,
        numero: txtNum.value,
        enfermedad: txtEnfermedad.value,
        tiempo: txtTiempo.value,
        detalle: txtDetalle.value,
        fechaInterno: txtFechaInterno.value,
        hospital: txtHospital.value,
        diagnostico: txtDiagnostico.value

    } ]
    console.log(objeto);
    localStorage.setItem('Pacientes' , JSON.stringify(objeto));
    pruebafuction();

}
Btn.addEventListener('click', ()=>{
   enviar();
})

function pruebafuction() {
     objet  = JSON.parse(localStorage.getItem('Pacientes')) || [];
     objet.forEach(element => {
        tabla.innerHTML += `
        <h2>Nombre Paciente: <span>${element.nombrePaciente +' '+ element.Apellido}</span></h2>
        <h2>Tipo Sangre: <span>${element.tipoSangre}</span></h2>
        <h2>Enfermedad: <span>${element.enfermedad}</span></h2>
        <h2>Direccion: <span>${element.direccion}</span></h2>
    `    
      
   });
}


function botones() {
    if (!input === "") {
        alert("Todos Los Campos deben de estar llenos")
    } 
}


