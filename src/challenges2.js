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
function hydrate(bebida) {
  let numerosDaString = bebida.replace(/[^0-9]/g, '');
  let somaNum = numerosDaString.split('');
  let total = 0;
  for (let index = 0; index < numerosDaString.length; index += 1) {
    somaNum[index] = parseInt(somaNum[index]);
    total += somaNum[index];
  } if (total === 1) {
    String(total);
  return total + ' copo de água';
  }
  return total + ' copos de água';
}
// console.log(hydrate('1 cerveja'));
// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
// console.log(hydrate('7 copos de água, 3 copos de água'));

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
