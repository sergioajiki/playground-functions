// Desafio 11
function generatePhoneNumber(num) {
  if (num.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] < 0 || num[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let ddd = [num[0], num[1]];
    let fone1 = [num[2], num[3], num[4], num[5], num[6]];
    let fone2 = [num[7], num[8], num[9], num[10]];
    return '(' + ddd.join('') + ') ' + fone1.join('') + '-' + fone2.join('');
  }
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > (lineB + lineC)) && (lineB > (lineA + lineC)) && (lineC > (lineA + lineB))) {
    return false;
  } if (lineA <= lineB && lineA <= lineC) {
    return ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC)));
  } if (lineB <= lineA && lineB <= lineC) {
    return ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC)));
  } if (lineC <= lineA && lineC <= lineB) {
    return ((lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB)));
  }
}
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

// Desafio 13
function hydrate(bebida) {
  let numerosDaString = bebida.replace(/[^0-9]/g, '');
  let somaNum = numerosDaString.split('');
  let total = 0;
  for (let index = 0; index < numerosDaString.length; index += 1) {
    somaNum[index] = parseInt(somaNum[index], 0);
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

