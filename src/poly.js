

function calcArea(sideLength, numSides) {
    return (numSides * Math.pow(sideLength, 2)) 
    / (4 * Math.tan(Math.PI/numSides))
}

export { calcArea }