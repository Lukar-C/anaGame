/* variables and constants */
let numberRandom = Math.floor(Math.random() * 100) + 1
let numberTry = 0
let number = 0
let buttonTryAgain = document.getElementById("buttonTryAgain")

/* CSS CONTROLLERS */
let controllerImage = document.getElementById("biaPhoto")
let controllerMensageResult = document.getElementById("mensageResult")
let controllerNumberInput = document.getElementById("numberInput")
let controllerButtonTryAgain = document.getElementById("buttonTryAgain")

const numberCount = [] 

function controllerReferenceThink() {
    controllerImage.style.backgroundImage = "url('images/image(0).png')"
    controllerMensageResult.style.display = "none"
    controllerButtonTryAgain.style.display = "none"
    controllerNumberInput.style.display = "block"
}
controllerReferenceThink()

function controllerReferenceWin() {
    controllerImage.style.backgroundImage = "url('images/image(1).png')"
    controllerMensageResult.innerHTML = "Parabéns, o número é: <span class='mensageResult' id='pColor1'>" + numberRandom + "</span>"
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

controllerButtonTryAgain.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        event.preventDefault()
        document.getElementById("buttonTryAgain").click()
    }
})

function reset() {
    number = 0
    numberTry = 0
    numberCount.length = 0
    document.getElementById("pColor2").innerHTML = " "
    numberRandom = Math.floor(Math.random() * 100) + 1

    controllerReferenceThink()
}

function getNumber(num) {
    if(event.key === 'Enter') {
        number = parseInt(num.value)
        num.value = ""
        submit()
    }
}

function submit() {
    if(number < 0 || number > 100) {
        alert("O número precisa ser maior que zero e menor que 100")
    }

    else if(number > 0 && number <= 100) {
        numberTry++
        game()
    }

    else if (number == 0) {
        reset()
        alert("O jogo foi reiniciado")
    }

    else if(number == null) {
        alert("Por Favor insira um número")
    }

    else {
        alert("ERRO")
    }
}

function game() {
    if(numberTry < 10) {
        compareNumber()
    }
    else if (numberTry == 10 && number == numberRandom) {
        compareNumber()
        controllerReferenceWin()
    }
    else if (numberTry == 10 && number != numberRandom) {
        compareNumber()
        controllerReferenceLose()
    }
    else {
        alert("ERRO")
    }
}

function compareNumber() {
    if(numberCount.includes(number)) {
        alert("O número que você digitou já foi utilizado uma vez")
        numberTry--
    }
        
    else if(number < numberRandom) {
        numberCount.push(number)
        alert("O número em que Ana está pensando é maior")
        document.getElementById("pColor2").innerHTML = numberCount.join(" - ")
    }
        
    else if(number > numberRandom) {
        numberCount.push(number)
        alert("O número em que Ana está pensando é menor")
        document.getElementById("pColor2").innerHTML = numberCount.join(" - ")
    }
        
    else if(number == numberRandom) {
        numberCount.push(number)
        document.getElementById("pColor2").innerHTML = numberCount.join(" - ")
        controllerReferenceWin()
    }
    else {
        alert("ERRO")
    }
}
