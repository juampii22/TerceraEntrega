const botonMoto = document.getElementById("botMot");
const emergenteMoto = document.getElementById("ventMot");
const cerrarMoto = document.getElementById("cerrarMoto");

const botonAuto = document.getElementById("botAut");
const emergenteAuto = document.getElementById("ventAut");
const cerrarAuto= document.getElementById("cerrarAuto");


botonMoto.addEventListener("click", () =>{
    emergenteMoto.classList.add("accion");
});

botonAuto.addEventListener("click", () =>{
    emergenteAuto.classList.add("accion");
});


cerrarAuto.addEventListener("click", () =>{
    emergenteAuto.classList.remove("accion");
});

cerrarMoto.addEventListener("click", () =>{
    emergenteMoto.classList.remove("accion");
});

const cotizarMoto = document.getElementById("botonCotizarMoto");
const cotizarAuto = document.getElementById("botonCotizarAuto");

const divResumenMoto= document.getElementById("resumenMoto");
const divResumenAuto= document.getElementById("resumenAuto");
const divResultadoMoto= document.getElementById("resultadoMoto");
const divResultadoAuto= document.getElementById("resultadoAuto");

const marcaMoto = document.getElementById("marcaMoto");
const anioMoto = document.getElementById("anioMoto");
const planMoto = document.getElementById("planMoto");
const marcaAuto = document.getElementById("marcaAuto");
const anioAuto = document.getElementById("anioAuto");
const planAuto = document.getElementById("planAuto");

cotizarMoto.addEventListener("click", () =>{

    divResumenMoto.classList.add("accion");
    divResumenMoto.classList.add("accionResumen");

    divResumenMoto.innerHTML= `
    <h2> Resumen de cotizacion</h2>
    <ul>
        <li>Marca: ${marcaMoto.value}</li>
        <li>Año: ${anioMoto.value}</li>
        <li>Plan: ${planMoto.value}</li>
    </ul>
    `
});

cotizarAuto.addEventListener("click", () =>{

    divResumenAuto.classList.add("accion");

    divResumenAuto.innerHTML= `
    <h2> Resumen de cotizacion</h2>
    <ul>
        <li>Marca: ${marcaAuto.value}</li>
        <li>Año: ${anioAuto.value}</li>
        <li>Plan: ${planAuto.value}</li>
    </ul>
    `
});
