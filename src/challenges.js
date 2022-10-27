// Desafio 1
function compareTrue(para1, para2) {
  if (para1 && para2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(Frase) {
  return Frase.split(' ');
}
// console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
// console.log(concatName(['captain', 'my', 'captain']))


// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(number) {
  let numMaior = number[0]
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] >= numMaior) {
      numMaior = number[index];
    }
  }
  let countNumMaior = 0;
  for (let index2 = 0; index2 < number.length; index2 += 1) {
    if (number[index2] === numMaior) {
      countNumMaior += 1;
    }
  }
  return countNumMaior;
}
// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return `os gatos trombam e o rato foge`;
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return `cat1`;
  } else {
    return `cat2`;
  }
}
// console.log(catAndMouse(1, 1, 6));
// console.log(catAndMouse(1, 1, 1));
// console.log(catAndMouse(10, 12, 8));






// Desafio 8
function fizzBuzz(numbers) {
  let resultado = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      resultado[index] = `fizzBuzz`;
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      resultado[index] = `fizz`;
    } else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
      resultado[index] = `buzz`;
    } else {
      resultado[index] = `bug!`;
    }
}
  return resultado;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));




// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
