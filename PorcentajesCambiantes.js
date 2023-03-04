setTimeout(Retirar,3000)
setTimeout(Limpiar,3000);

let a = setInterval(Textchange0,50);
let b = setInterval(Textchange1,45);
let c = setInterval(Textchange2,35);
let d = setInterval(Textchange3,40);
let e = setInterval(Textchange4,50);

function Limpiar(){
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
    clearInterval(d);
    clearInterval(e);

    let Animacion0 = document.getElementsByName("Porcentaje")[0];
    Animacion0.innerText = "60%";
    let Animacion1 = document.getElementsByName("Porcentaje")[1];
    Animacion1.innerText = "50%";
    let Animacion2 = document.getElementsByName("Porcentaje")[2];
    Animacion2.innerText = "50%";
    let Animacion3 = document.getElementsByName("Porcentaje")[3];
    Animacion3.innerText = "70%";
    let Animacion4 = document.getElementsByName("Porcentaje")[4];
    Animacion4.innerText = "70%";
}

function Textchange0(){

    for (let i=0; i<5; i++){
        let Animacion = document.getElementsByName("Porcentaje")[i];
        Animacion.classList.add("text-inherit");
        Animacion.innerText = "0%";
    }
}

function Textchange1(){

    for (let i=0; i<5; i++){
        let Animacion = document.getElementsByName("Porcentaje")[i];
        Animacion.innerText = "100%";
    }
}

function Textchange2(){

    for (let i=0; i<5; i++){
        let Animacion = document.getElementsByName("Porcentaje")[i];
        Animacion.innerText = "1%";
    }
}

function Textchange3(){

    for (let i=0; i<5; i++){
        let Animacion = document.getElementsByName("Porcentaje")[i];
        Animacion.innerText = "60%";
    }
}

function Textchange4(){

    for (let i=0; i<5; i++){
        let Animacion = document.getElementsByName("Porcentaje")[i];
        Animacion.innerText = "70%";
    }
}

function Retirar(){

    for (let i=0; i<5; i++){
        let Animacion = document.getElementsByName("Barra_C")[i];
        Animacion.setAttribute("id","")
        Animacion.classList.add("w-[100%]");
    }
}
