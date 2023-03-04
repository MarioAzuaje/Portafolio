let RelojDigital_Hora = document.getElementsByName("Horas")[0];
let RelojDigital_Minutos = document.getElementsByName("Minutos")[0];

setInterval(
    function Reloj(){
        let hora = new Date;
        RelojDigital_Hora.innerText = hora.getHours();
        RelojDigital_Minutos.innerText = hora.getMinutes();

        if((hora.getHours()) < 10){
            RelojDigital_Hora.innerText = "0" + hora.getHours();
        }

        if((hora.getMinutes()) < 10){
            RelojDigital_Minutos.innerText = "0" + hora.getMinutes();
        }
    },1000)