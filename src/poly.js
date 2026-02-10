

function calcArea(sideLength, numSides) {
    if (sideLength <= 0 || numSides <= 2){
        throw new Error('Hiba!')
    }
    if(sideLength > 10000000 || numSides > 10000000) {
        throw new Error('Hiba!')
    }
    return (numSides * Math.pow(sideLength, 2)) 
    / (4 * Math.tan(Math.PI/numSides))
}

export { calcArea }