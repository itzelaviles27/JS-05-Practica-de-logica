//Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
//let multiDimension = [1, [2, 3, [4, 5, [6]]]];
let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function aplanarArray(arr) {
  let resultado = [];

  arr.forEach(elemento => {
    if (Array.isArray(elemento)) {
      resultado = resultado.concat(aplanarArray(elemento));
    } else {
      resultado.push(elemento);
    }
  });

  return resultado;
}

let resultado = aplanarArray(multiDimension);
console.log(resultado);
