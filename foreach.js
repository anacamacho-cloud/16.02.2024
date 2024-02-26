//var é uma variavel e esta atribuindo uma valor
var tempoFilme = 60;
var inicioFilme = 0;

// declaração de uma variavel sendo t = 0
//se t for menor q o tempo do filme t + t = 0
for (var t = 0 ; t < tempoFilme; t++){
    //setTimeout é uma função em JavaScript que permite atrasar a execução de um trecho de código por um determinado período de tempo.
    //a função será que no console vai aparecer "Assistindo o filme" + os segundos do filem + segundos
    setTimeout(function(){
        console.clear();
        console.log("Assistindo filme:[" + (tempoFilme - inicioFilme) + "] segundos.");
        inicioFilme++; 
    },t*1000); // a var t será multiplicada por 1000
}
