let regex = /\w+\@\w{1,7}\.com/gi;
let InputRegex = document.getElementsByName("inputs")[1];
let CambioColorLineaRegex = document.getElementsByName("linea")[1];
let CajaInputEmail = document.getElementsByName("divEmail")[0];

let MensajeError = document.createElement("p");
MensajeError.classList.add("absolute","text-[#EE1427]","text-[1rem]","mt-[14%]","z-[-1]","opacity-0","font-medium");
MensajeError.innerHTML = "* Ingrese un email válido!";
CajaInputEmail.appendChild(MensajeError);

function validar(){
    if((regex.test(InputRegex.value) == false) && (InputRegex.value != "")){
        CambioColorLineaRegex.classList.remove("bg-[#8BC140]");
        CambioColorLineaRegex.classList.add("bg-[#EE1427]");
        InputRegex.setAttribute("id","ShakeDivNo");
        MensajeError.classList.remove("opacity-0");
        MensajeError.classList.add("opacity-1");
        MensajeError.classList.remove("z-[-1]");
        MensajeError.classList.add("z-0");

        setTimeout(()=>{
            InputRegex.setAttribute("id","");
        },500);
    }
    else{
        if(InputRegex.value != ""){
            CambioColorLineaRegex.classList.remove("bg-[#EE1427]");
            CambioColorLineaRegex.classList.add("bg-[#8BC140]");
            InputRegex.setAttribute("id","ShakeDivYes");
            MensajeError.classList.remove("opacity-1");
            MensajeError.classList.add("opacity-0");
            MensajeError.classList.remove("z-0");
            MensajeError.classList.add("z-[-1]");

                    setTimeout(()=>{
                InputRegex.setAttribute("id","");
            },500);
        }
    }
}

InputRegex.addEventListener("change", validar);