let numberRandom = Math.floor(Math.random() * 100) + 1
let numberTry = 0
let number = 0

let imageDynamic = document.getElementById("biaPhoto"); imageDynamic.style.backgroundImage = "url('images/image(0).png')"
let hiddenMensageResult = document.getElementById("mensageResult"); hiddenMensageResult.style.display = "none"
let hiddenButtonTryAgain = document.getElementById("buttonTryAgain"); hiddenButtonTryAgain.style.display = "none"

const numberCount = [] 
var numberList = numberCount



/**
 * document.getElementById("numberInput").addEventListener("keydown", function(event) {
            if(event.key = 'Enter'){
                var number = document.getElementById("numberInput")
            }
        })

    * for(numberTry >= 0; numberTry < 10; numberTry++) {
    }
        */

function getNumber() {
    document.getElementById("numberInput").addEventListener("keydown", function(e) {
        if(e.keyCode == 13){
            var number = document.getElementById("numberInput").value
            document.getElementById("numberInput").value = ""
        }
    })
}

function compareNumber() {
    if(numberCount.includes(number)) {
        alert("O número que você digitou já foi utilizado  vez")
    }

    else if(number < numberRandom) {
        numberCount.push(number.join('-'))
        alert("O número em que Ana está pensando é maior")
        document.getElementById("pColor2").innerHTML = numberCount.join(" - ")
    }

    else if(number > numberRandom) {
        numberCount.push(number)
        alert("O número em que Ana está pensando é menor")
        document.getElementById("pColor2").innerHTML = numberCount.join(" - ")
    }

    else {
        document.getElementsByClassName("mensageResult").innerHTML = "Parabéns, o número é:<span class='mensageResult' id='pColor1'>" + numberRandom + "</span></p>"
        imageDynamic.style.backgroundImage = "url('images/image(1).png')"
    }

}

/*
*   else {
        document.getElementsByClassName("mensageResult").innerHTML = "Você não acertou, o número era: <span class='mensageResult' id='pColor1'>" + numberRandom + "</span>"
        document.getElementById("biaPhoto").style.background = "url('images/image(1).png')"
        var hiddenMensageResult = hiddenMensageResult.style.display = "block"
        var hiddenButtonTryAgain = hiddenButtonTryAgain.style.display = "block"
    }
*/