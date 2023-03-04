let InputColor0 = document.getElementsByName("inputs")[0];
let InputColor1 = document.getElementsByName("inputs")[1];
let InputColor2 = document.getElementsByName("inputs")[2];
let CambioColorLinea0 = document.getElementsByName("linea")[0];
let CambioColorLinea1 = document.getElementsByName("linea")[1];
let CambioColorLinea2 = document.getElementsByName("linea")[2];

function Linea0_azul(){
    InputColor0.classList.add("outline-0");
    CambioColorLinea0.classList.add("bg-[#00ccff]");
    InputColor0.setAttribute("placeholder","");
}

function Linea1_azul(){
    InputColor1.classList.add("outline-0");
    CambioColorLinea1.classList.add("bg-[#00ccff]");
    InputColor1.setAttribute("placeholder","");
}

function Linea2_azul(){
    InputColor2.classList.add("outline-0");
    CambioColorLinea2.classList.add("bg-[#00ccff]");
    InputColor2.setAttribute("placeholder","");
}

function Linea0_original(){
    CambioColorLinea0.classList.remove("bg-[#00ccff]");
    InputColor0.setAttribute("placeholder","Enter your name");
}

function Linea1_original(){
    CambioColorLinea1.classList.remove("bg-[#00ccff]");
    InputColor1.setAttribute("placeholder","Enter your email address");

    if(InputColor1.value == ""){
        CambioColorLinea1.classList.remove("bg-[#8BC140]");
        CambioColorLinea1.classList.remove("bg-[#EE1427]");
    }
}

function Linea2_original(){
    CambioColorLinea2.classList.remove("bg-[#00ccff]");
    InputColor2.setAttribute("placeholder","Hi!, I think we need to design something, how soon you can hop on to discuss this?");
}

InputColor0.addEventListener("focus", Linea0_azul);
InputColor1.addEventListener("focus", Linea1_azul);
InputColor2.addEventListener("focus", Linea2_azul);
InputColor0.addEventListener("blur", Linea0_original);
InputColor1.addEventListener("blur", Linea1_original);
InputColor2.addEventListener("blur", Linea2_original);

