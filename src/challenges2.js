// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA <= lineB && lineA <= lineC) {
    return ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) || ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB)));
  } else if (lineB <= lineA && lineB <= lineC) {
    return ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC))) || ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB)));
  } else if (lineC <= lineA && lineC <= lineB) {
    return ((lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB))) || ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB)));
  }
}


// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
// console.log(triangleCheck(10, 14, 8));
// console.log(triangleCheck(8, 10, 14));
// console.log(triangleCheck(8, 10, 140));
// console.log(triangleCheck(14, 8, 10));
// console.log(triangleCheck(8, 100, 14));
// console.log(triangleCheck(80, 10, 8));
// console.log(triangleCheck(10, 13, 2));
// console.log(triangleCheck(17, 4, 12));
// console.log(triangleCheck(3, 5, 10));
// console.log(triangleCheck(16, 9, 2));
// console.log(triangleCheck(2, 2, 6));