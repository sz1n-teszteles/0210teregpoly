import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const doc = {
    polyForm: document.getElementById('polyForm'),
    sideLengthInput: document.getElementById('sideLength'),
    numSidesInput: document.getElementById('numSides'),
    areaInput: document.getElementById('area')
}

doc.polyForm.addEventListener('submit', (event) => {
    event.preventDefault()
    updateArea()
})

const inputs = [doc.sideLengthInput, doc.numSidesInput]
inputs.forEach(input => {
    input.addEventListener('input', updateArea)
})

function updateArea(){
    const sideLength = Number(doc.sideLengthInput.value)
    const numSides = Number(doc.numSidesInput.value)

    if(numSides < 3) {
        doc.areaInput.value = 'Hiba: n >= 3'
        return
    }

    const area = calcArea(sideLength, numSides)

    if(!isNaN(area) && isFinite(area) && area > 0) {
        doc.areaInput.value = area.toFixed(2)
    }else {
        doc.areaInput.value = 'Hiba'
    }
}

function calcArea(sideLength, numSides) {
    return (numSides * Math.pow(sideLength, 2)) 
    / (4 * Math.tan(Math.PI/numSides))
}

