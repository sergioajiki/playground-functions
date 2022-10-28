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
  return (base * height) / 2;
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
  let numMaior = number[0];
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
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}
console.log(catAndMouse(1, 1, 6));
console.log(catAndMouse(1, 1, 1));
console.log(catAndMouse(10, 12, 8));

// Desafio 8
function fizzBuzz(numbers) {
  let resultado = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      resultado[index] = 'fizzBuzz';
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      resultado[index] = 'fizz';
    } else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
      resultado[index] = 'buzz';
    } else {
      resultado[index] = 'bug!';
    }
  }
  return resultado;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  const numeroParaLetra = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let stringArray = string.split('');
  for (let key in numeroParaLetra) {
    for (let index = 0; index < stringArray.length; index += 1) {
      if (stringArray[index] === key) {
        stringArray[index] = numeroParaLetra[key];
      }
    }
  } return stringArray.join('');
}
// console.log(encode('hello'));
// console.log(encode('How are you today?'));
// console.log(encode('This is an encoding test.'));
// console.log(encode('go Trybe!'));

function decode(string2) {
  const letraParaNumero = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let stringArray2 = string2.split('');
  for (let key2 in letraParaNumero) {
    for (let index2 = 0; index2 < stringArray2.length; index2 += 1) {
      if (stringArray2[index2] === key2) {
        stringArray2[index2] = letraParaNumero[key2];
      }
    }
  } return stringArray2.join('');
}
// console.log(decode('h2ll4'));
// console.log(decode('H4w 1r2 y45 t4d1y?'));
// console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));
// console.log(decode('g4 Tryb2!'));



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
