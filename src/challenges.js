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
    
    return wins *3 + ties *1;
  }
  // console.log(footballPoints(0, 0));

  // Desafio 6
  function highestCount() {
    // seu código aqui
  }

  // Desafio 7
  function catAndMouse() {
    // seu código aqui
  }

  // Desafio 8
  function fizzBuzz() {
    // seu código aqui
  }

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
