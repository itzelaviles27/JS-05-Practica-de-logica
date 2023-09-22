//Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
//Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

//Definimos una función llamada `palindrome` que esta tomando a `string` como argumento
function palindrome(string) {
//`newStr` es una variable para almacenar el `string` original después de eliminar
//todos los caracteres no-alfanúmericos y convertirlo a minúsculas
    let newStr = string.replace(/[\W_]/g, "").toLowerCase();
/** Se crea otra variable `strReversed` donde `newStr` es un array de caracteres
 * luego se invierte y finalmente se vuelven a unir en un string  */ 
    let strReversed = newStr.split("").reverse().join("");
//Se utiliza `if y else` para comparar `newStr` y `strReversed`
    if (newStr === strReversed) {
        //Regresa es palindromo si si cumple
        return `${string} es palindromo`;
    } else {
        //regresa no es un palindromo si no cumple
        return `${string} no es un palindromo`;
    }
}
//Ejemplos
console.log(palindrome("oso.")); 
console.log(palindrome("Una casa blanca.")); 
console.log(palindrome("Luz Azul.")); 