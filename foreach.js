var tempoFilme = 60;
var inicioFilme = 0;

function exibirFilme(){
    console.clear();
    if(inicioFilme == tempoFilme){
        console.log("O filme acabou!");
        clearInterval(exibirFilme);
    } else{
        console.log("assistindo filme 60seg.... Ainda faltam["+ (tempoFilme - inicioFilme) +"] segundos.");
    } 
    inicioFilme++;
}

setInterval (exibirFilme, 1000);