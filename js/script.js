const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFive = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
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
const tabla = document.querySelector('.table-body');
const subTitle = document.querySelector('.subtitle');
const btnGuardar = document.querySelector('.btnEnviar');


const input = document.querySelectorAll('txtNom');
let current = 1;
let objetoPersona = [];

document.addEventListener('DOMContentLoaded', ()=>{
  if(localStorage.getItem('Pacientes')){
    objetoPersona  = JSON.parse(localStorage.getItem('Pacientes')) || [];
    pruebafuction(objetoPersona);
     
}  
});
nextBtnFirst.addEventListener("click", (e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-100%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});


prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});



function guardar() {
  const objeto  = {
      id:   Math.floor(Math.random() * 1000),
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

  } 

  const existe = objetoPersona.some(pro => pro.id === objeto.id);
  if (existe) {
    
      objetoPersona = [...objeto];
      
  }else{
    objetoPersona = [...objetoPersona, objeto];
  }
  console.log(existe);

  pruebafuction(objetoPersona);
  localStorage.setItem('Pacientes' , JSON.stringify(objeto));

}

function pruebafuction(objeto) {
  tabla.innerHTML = '';
  objeto.forEach(element => {
     tabla.innerHTML += `
     <tr>
     <td>${element.nombrePaciente + element.Apellido}</td>
     <td>${element.direccion}</td>
     <td>${element.tipoSangre}</td>
     <td>${ element.nombreFamiliar}</td>
     <td>${element.tiempo}</td>
     <td>${element.hospital}</td>
     <td>
       <button data-id="${element.id}" class="btn-editar">Editar</button>
     </td>
  </tr>
 `        
});


}

btnGuardar.addEventListener('click', ()=>{
  guardar();
});

function validar() {
  if(input.length == 0 ){
    subTitle.innerHTML = `Todos los Campos son Requeridos`;
    return false;
}
return true;
}

function btnAccion(e){
  if(e.target.classList.contains('btn-editar')){
      const id = e.target.dataset.id;
    const existe = objetoPersona.some(obj=>  obj.id === id);
    console.log(existe);
    console.log(id);
    console.log(existe.id);
    if(existe){
    console.log(existe);
  
    }   
}
}

tabla.addEventListener('click', e =>{
  btnAccion(e);
 //console.log(e.target);
});


