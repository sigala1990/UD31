
function mueveReloj(){
    momentoActual = new Date()
    document.getElementById("hores").innerHTML = momentoActual.getHours()
    document.getElementById("minuts").innerHTML  = momentoActual.getMinutes()
    document.getElementById("segons").innerHTML = momentoActual.getSeconds()

    setTimeout("mueveReloj()",1000)
}