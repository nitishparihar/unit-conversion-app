let inputValue = document.getElementsByClassName('input-value')
let feet = document.getElementById('feet')
let meters = document.getElementById('meters')
let gallons = document.getElementById('gallons')
let liters = document.getElementById('liters')
let pounds = document.getElementById('pounds')
let kilos = document.getElementById('kilos')

function inputValueBox() {
    inputValue[0].textContent = event.target.value
    inputValue[1].textContent = event.target.value
    inputValue[2].textContent = event.target.value
    inputValue[3].textContent = event.target.value
    inputValue[4].textContent = event.target.value
    inputValue[5].textContent = event.target.value
}

function conversion() {
    feet.textContent = (event.target.value * 3.28084)
    meters.textContent = (event.target.value * 0.3048)
    gallons.textContent = (event.target.value * 0.264172)
    liters.textContent = (event.target.value * 3.78541)
    pounds.textContent = (event.target.value * 2.20462)
    kilos.textContent = (event.target.value * 0.453592)
}