// Desafio 11
// function generatePhoneNumber(array) {
  // if (array.length !== 11) {
  //   return 'Array com tamanho incorreto';
  // }  
//   let numeros = {};
//   for (let index = 0; index < array.length; index += 1) {
//     if (numeros[array[index]] =
//       // if (array[index] === numeros[index])
//       //   numeros[index] += 1;
//       console.log(numeros);
//     // return numeros;
//   }
//   //if (array[])
//   //
//   return numeros
//   // console.log(numeros[2])
// }
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// let x = {
//   1: 1,
//   2: 1
// }
// x[3] = 9
// console.log(x)


// }
// for (let i = 0; i < array.length; i += 1) {
//  }
// for (let index = 0; index < array.length; index += 1) {
//     if (array[index] < 0 || (array[index] > 9)) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     } 
// }









// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB && lineA < lineC) {
    (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC)) || (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB))
    return true;
  } else if (lineB < lineA && lineB < lineC) {
    (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC)) || (lineA < (lineA + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB))
    return true;
  } else if (lineC < lineA && lineC < lineB) {
    (lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB)) || (lineA < (lineA + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB))
    return true;
  } else
    return false;
}

// console.log(triangleCheck(10, 14, 8));
// console.log(triangleCheck(10, 0, 0));
// console.log(triangleCheck(100, 14, 8));

//   a < b + c
//   a > b - c
// se b - c

//   ou
//   a < b + c
//   b < a + c
//   c < a + b













// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
