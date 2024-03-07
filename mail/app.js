//chiedere all utente lemail
// prendere il bottone
//prendere email
//whitelist
const submitElement = document.getElementById("submit")
const inputMailElement = document.getElementById("mail")
const whitelistMail = ["carlo", "gabriele", "mario", "tommaso"]

let whitelist= ""
let mailUtente= ""

// dare levento al bottone
submitElement.addEventListener("click", function() {
    // prendere il valore di input
    mailUtente = inputMailElement.value //string
    //console.log(mailUtente)

    //scomporre array con for
    for(i = 0; i < whitelistMail.length; i++) {
        whitelist = whitelistMail[i]
        //console.log(whitelist)

    }

    //check della whitelist
    if(mailUtente == "") {
        console.log("inserire testo")

    } else if(mailUtente == whitelist) {
        console.log("sei in wl")

    } else if(mailUtente !== whitelist) {
        console.log("non sei in whitelist")
        
    }
})
