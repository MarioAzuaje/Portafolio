let BotonVer0 = document.getElementsByName("botonver")[0];
let BotonVer1 = document.getElementsByName("botonver")[1];
let BotonVer2 = document.getElementsByName("botonver")[2];
let Imagen0 = document.getElementsByName("imgs")[0];
let Imagen1 = document.getElementsByName("imgs")[1];
let Imagen2 = document.getElementsByName("imgs")[2];

function Agregar0(){
    BotonVer0.classList.add("z-10");
}

function Agregar1(){
    BotonVer1.classList.add("z-10");
}

function Agregar2(){
    BotonVer2.classList.add("z-10");
}

function Quitar0(){
    BotonVer0.classList.remove("z-10");
    BotonVer0.classList.add("z-[-1]");
}

function Quitar1(){
    BotonVer1.classList.remove("z-10");
    BotonVer1.classList.add("z-[-1]");
}

function Quitar2(){
    BotonVer2.classList.remove("z-10");
    BotonVer2.classList.add("z-[-1]");
}

Imagen0.addEventListener("mouseover", Agregar0);
Imagen1.addEventListener("mouseover", Agregar1);
Imagen2.addEventListener("mouseover", Agregar2);
Imagen0.addEventListener("mouseout", Quitar0);
Imagen1.addEventListener("mouseout", Quitar1);
Imagen2.addEventListener("mouseout", Quitar2);