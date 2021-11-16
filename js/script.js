//FASE DI INPUT

//Numero Km
const numKm = parseInt ( prompt ("Quanti Kilometri devi percorrere?") );

//Eta passeggero
const numEta = parseInt ( prompt ("Qual e' la tua eta?") );

//FASE DI CALCOLO

//Prezzo biglietto
let prezzoB = ( numKm * 0.21 );

//Sconto minorenni
const prezzoMin = ( ( prezzoB * 20 ) / 100 );

//Sconto Over65
const prezzoOver = ( ( prezzoB * 40 ) / 100 );

//OUTPUT
if (numEta < 18) {
    prezzoB -= prezzoMin
    document.getElementById('prezzoBiglietto').innerHTML = prezzoB.toFixed(2);

} else if (numEta > 65) {
    prezzoB -= prezzoOver
    document.getElementById('prezzoBiglietto').innerHTML = prezzoB.toFixed(2);

} else {

    document.getElementById('prezzoBiglietto').innerHTML = prezzoB.toFixed(2);

}