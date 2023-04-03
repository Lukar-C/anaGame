let numberRandom = Math.floor(Math.random() * 100) + 1
let numberTry = 0
let number = 0

let hiddenMensageResult = document.getElementById("mensageResult"); hiddenMensageResult.style.display = "none"
let hiddenButtonTryAgain = document.getElementById("buttonTryAgain"); hiddenButtonTryAgain.style.display = "none"

const numberCount = []

function getNumber() {
    for(numberTry; numberTry < 10; numberTry++) {
        number = document.getElementById("numberInput").value
        
        if(number < numberRandom) {
            numberCount.push(number)
            alert("O número em que Ana está pensando é maior")
            document.edit.getElementById("pColor2").innerHTML = `${numberCount}`
        }
        else if(number > numberRandom) {
            numberCount.push(number)
            alert("O número em que Ana está pensando é menor")
        }
        else if(numberCount.includes(number)) {
            alert("O número que você digitou já foi utilizado  vez")
        }
        else if(number == numberRandom) {
            document.getElementsByClassName("mensageResult").innerHTML = "Parabéns, o número é:<span class='mensageResult' id='pColor1'>" + numberRandom + "</span></p>"
        }
        else {
            document.getElementsByClassName("mensageResult").innerHTML = "Você não acertou, o número era: <span class='mensageResult' id='pColor1'>" + numberRandom + "</span>"
            var hiddenMensageResult = hiddenMensageResult.style.display = "block"
            var hiddenButtonTryAgain = hiddenButtonTryAgain.style.display = "block"
        }
    }
}