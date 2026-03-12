let imagen = document.getElementById("imagenPatria");
let audio = document.getElementById("audioPatria");

imagen.addEventListener("click", function(){

if(audio.paused){
audio.play();
}else{
audio.pause();
}

});