//chiedere all utente lemail
// prendere il bottone
//prendere email
//whitelist
const submitElement = document.getElementById("submit")
const inputMailElement = document.getElementById("mail")
const whitelistMail = ["carlo", "gabriele", "mario", "tommaso"]


// dare levento al bottone
submitElement.addEventListener("click", function() {
    // prendere il valore di input
    const mailUtente = inputMailElement.value //string
    console.log(mailUtente)

    // check della whitelist
    if (mailUtente == " ") {
        console.log("ripeti")
    } else if (mailUtente == whitelistMail) {
        console.log("giusto")
    } else if (mailUtente !== whitelistMail) {
        console.log("sbagliato")
    }

})
// stampare messaggio esito controllo