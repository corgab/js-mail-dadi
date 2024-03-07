//whitelist
const submitElement = document.getElementById("submit")
const inputMailElement = document.getElementById("mail")
const whitelistMail = ["carlo", "gabriele", "mario", "tommaso"]

//var per stampare 
let userInWhitelist = false

// dare levento al bottone
submitElement.addEventListener("click", function() {

    // prendere il valore di input
    const mailUtente = inputMailElement.value //string

    //scomporre array con for
    for(i = 0; i < whitelistMail.length; i++) {
        const whitelist = whitelistMail[i]

        //check della whitelist
        if(mailUtente == whitelist) {
            userInWhitelist = true
        }
    }

    console.log("hai inserito " + mailUtente)
    if(userInWhitelist == true) {
        console.log("sei in whitelist"
        )
    } else{
        console.log("non sei in whielist"
        )
    }
})


