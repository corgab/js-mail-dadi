//genera numeri da 1 a 6 per giocatore e computer
const numeroCasualeGiocatore= Math.floor(Math.random() * 6 +1)
const numeroCasualeComputer= Math.floor(Math.random() * 6 +1)

console.log(`il giocatore ha tirato ${numeroCasualeGiocatore} e il Computer ha tirato ${numeroCasualeComputer}`)
//stabilire vincitore
if (numeroCasualeComputer > numeroCasualeGiocatore) {
    console.log(`vince il computer con ${numeroCasualeComputer}`)
} else if (numeroCasualeComputer < numeroCasualeGiocatore) {
    console.log(`vince il giocatore con ${numeroCasualeGiocatore}`)
} else if (numeroCasualeComputer == numeroCasualeGiocatore) {
    console.log("pareggio")
}