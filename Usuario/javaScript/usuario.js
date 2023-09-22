/**Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
 * Store the information and then showcase it in the console. Take note that the output for the films should 
 * add a small message like: 'The film {film} is one of my favorites'. */

 function usuario(nombre, edad, peliculasFavoritas) {
    console.log(`Tu nombre es ${nombre}`);
    console.log(`Tu edad es ${edad}`);

    peliculasFavoritas.forEach(pelicula => {
        console.log(`La película ${pelicula} es una de mis favoritas.`);
    });
}
// en la consola se vera lo siguiente
//ejemplo: usuario('Juan',13,['La era de hielo','Patria','Duro de matar']);
/* se vería así 
Tu nombre es Juan
Tu edad es 13
La película La era de hielo es una de mis favoritas.
La película Patria es una de mis favoritas.
La película Duro de matar es una de mis favoritas.
*/