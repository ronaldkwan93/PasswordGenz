const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`","!","@","#","$","%","^","&","*"];



function genPass() {
    clear()
    clear1()
    let a = document.getElementById("gen1")
    let c = document.getElementById("gen2")

        for (let i = 0; i < 15; i++) {
            let b = characters[Math.floor(Math.random()*characters.length)];
        a.innerHTML += b
            let d = characters[Math.floor(Math.random()*characters.length)];
        c.innerHTML += d
        }
   clearcopy()
}

function clear() {
    if (document.getElementById("gen1").innerHTML.length = 15) {
        document.getElementById("gen1").innerHTML = " "
    }
}

function clear1() {
    if (document.getElementById("gen2").innerHTML.length = 15) {
        document.getElementById("gen2").innerHTML = " "
    }
}

function copyPass() {
    let a = document.getElementById("gen1").textContent
    if (a.length > 0){
    navigator.clipboard.writeText(gen1.innerHTML)
    document.getElementById("copied").textContent = "Copied to Clipboard!"
    document.getElementById("copied2").innerHTML = " "
    }
 }

function copyPass2() {
    let a = document.getElementById("gen2").textContent
    if (a.length > 0){
   navigator.clipboard.writeText(gen2.innerHTML)
   document.getElementById("copied2").textContent = "Copied to Clipboard!"
   document.getElementById("copied").innerHTML = " "
    }
}

function clearcopy() {
    document.getElementById("copied").innerHTML = " "
    document.getElementById("copied2").innerHTML = " "
}