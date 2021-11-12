//FASE DI INPUT

//Numero Km
const numKm = parseInt ( prompt ("Quanti Kilometri devi percorrere?") );
console.log(numKm);
//Eta passeggero
const numEta = parseInt ( prompt ("Qual e' la tua eta?") );
console.log(numEta);
//FASE DI CALCOLO

//Prezzo biglietto
const prezzoB = ( numKm * 0.21 );
console.log(prezzoB);

//Sconto minorenni
const prezzoMin = ( ( prezzoB * 20 ) / 100 );

//Sconto Over65
const prezzoOver = ( ( prezzoB * 40 ) / 100 );

//OUTPUT
if (numEta < 18) {

    document.getElementById('prezzoBiglietto').innerHTML = prezzoMin;

} else if (numEta > 65) {

    document.getElementById('prezzoBiglietto').innerHTML = prezzoOver;

} else {

    document.getElementById('prezzoBiglietto').innerHTML = prezzoB;

}