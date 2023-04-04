/* variables and constants */
let numberRandom = Math.floor(Math.random() * 100) + 1
let numberTry = 0
var number = document.getElementById("numberInput").value

/* CSS CONTROLLERS */
let controllerImage = document.getElementById("biaPhoto")
let controllerMensageResult = document.getElementById("mensageResult")
let controllerButtonTryAgain = document.getElementById("buttonTryAgain")
let controllerNumberInput = document.getElementById("numberInput")

const numberCount = [100, 90, 80] 
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

function getNumber(num) {
        if(event.key === 'Enter') {
            number = num.value
            alert(num.value)
        }
    }

function controllerReferenceThink() {
    controllerImage.style.backgroundImage = "url('images/image(0).png')"
    controllerMensageResult.style.display = "none"
    controllerButtonTryAgain.style.display = "none"
    controllerNumberInput.style.display = "block"
}
controllerReferenceThink()

function controllerReferenceWin() {
    controllerImage.style.backgroundImage = "url('images/image(1).png')"
    controllerMensageResult.innerHTML = "Parabéns, o número è: <span class='mensageResult' id='pColor1'>" + numberRandom + "</span>"
    controllerMensageResult.style.display = "block"
    controllerButtonTryAgain.style.display = "block"
    controllerNumberInput.style.display = "none"
}

function controllerReferenceLose() {
    controllerImage.style.backgroundImage = "url('images/image(1).png')"
    controllerMensageResult.innerHTML = "Você não acertou, o número era: <span class='mensageResult' id='pColor1'>" + numberRandom + "</span>"
    controllerMensageResult.style.display = "block"
    controllerButtonTryAgain.style.display = "block"
    controllerNumberInput.style.display = "none"
}

function compareNumber() {
    getNumber()
    
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
        
    else if(number == numberRandom) {
        controllerReferenceWin()
    }
    else {
        alert(ERRO)
    }
}

function game() {
    controllerReferenceThink()

    if(numberTry < 10) {
        compareNumber()
    }
    else if (numberTry == 10) {
        controllerReferenceLose()
    }
    else {
        alert("ERRO")
    }
}

