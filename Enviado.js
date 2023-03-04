let BotonE = document.getElementsByName("boton_enviar")[0];
let ImagenE = document.getElementsByName("imagen_enviar")[0];
let TextoE = document.getElementsByName("texto_enviar")[0];

function PararEfecto(){
    BotonE.classList.add("w-[6%]","bg-[#6fb07f]","rounded-[100%]");
    ImagenE.setAttribute("src","./Images/Checkicon.png");
}

function AgregarEfecto(){
    TextoE.classList.add("opacity-0");
    TextoE.innerText= "";
    BotonE.setAttribute("id","Enviado");
    setTimeout(PararEfecto,500);
}

BotonE.addEventListener("click", AgregarEfecto);