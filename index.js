let inputValue = document.getElementsByClassName('input-value')
let feet = document.getElementById('feet')
let meters = document.getElementById('meters')
let gallons = document.getElementById('gallons')
let liters = document.getElementById('liters')
let pounds = document.getElementById('pounds')
let kilos = document.getElementById('kilos')

function inputValueBox() {
    for (let i = 0; i < inputValue.length; i++) {
        inputValue[i].textContent = event.target.value
    }
}

function conversion() {
    feet.textContent = (event.target.value * 3.281.toFixed(3))
    meters.textContent = (event.target.value * 0.305.toFixed(3))
    gallons.textContent = (event.target.value * 0.264.toFixed(3))
    liters.textContent = (event.target.value * 3.785.toFixed(3))
    pounds.textContent = (event.target.value * 2.205.toFixed(3))
    kilos.textContent = (event.target.value * 0.454.toFixed(3))
}
