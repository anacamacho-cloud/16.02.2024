var tempoFilme = 60;
var inicioFilme = 0;

for (var t = 0 ; t < tempoFilme; t++){
    setTimeout(function(){
        console.clear();
        console.log("Assistindo filme:[" + (tempoFilme - inicioFilme) + "] segundos.");
        inicioFilme++;
    },t*1000);
}
