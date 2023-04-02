let numberRandom = Math.floor(Math.random() * 100) + 1
let numberTry = 0
let number = 0
const numberCount = []

function getNumber() {
    for(numberTry; numberTry < 10; numberTry++) {
        number = document.getElementById("numberInput").value
        if(number < numberRandom) {
            numberCount.push(number)
            alert("O número em que Ana está pensando é maior")
            document.edit.getElementById("pCount").innerHTML = `${numberCount}`
        }
        else if(number > numberRandom) {
            numberCount.push(number)
            alert("O número em que Ana está pensando é menor")
        }
        else if(numberCount.includes(number)) {
            alert("O número que você digitou já foi utilizado  vez")
        }
        else if(number == numberRandom) {
            document.getElementsByClassName("mensageResult").innerHTML = ""
            document.getElementById("p")

        }
        else {

        }
    }
}