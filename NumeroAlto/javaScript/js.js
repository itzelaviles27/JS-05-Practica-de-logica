//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, 
//determine and output the highest of those numbers.

  function encontrarMayor(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
    // Comprueba si se han proporcionado exactamente 10 argumentos
    if (arguments.length === 10) {
        // Crea un arreglo con los 10 números proporcionados
      let numeros = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
       // Inicializa una variable 'mayor' con el primer número del arreglo
      let mayor = numeros[0];
      // Itera sobre los números restantes para encontrar el mayor
      for (let i = 1; i < numeros.length; i++) {
        // Compara cada número con el actual mayor
        if (numeros[i] > mayor) {
          mayor = numeros[i]; // Si el número actual es mayor, lo asigna como el nuevo mayor
        }
      }
      // Devuelve un mensaje indicando el número mayor
      return `El número mayor de [${numeros}] es ${mayor}`;
    } else {
      // Si no se proporcionaron 10 números, devuelve un mensaje de error
      return `No hay 10 números ingresados`;
    }
  }
  

  

  
 
  
  
  
  