//Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
//Result example: "Time for bed after 10 seconds".

function iniciarAlarma(segundos) {
    // Convertimos los segundos a milisegundos multiplicándolos por 1000
    const tiempoEnMilisegundos = segundos * 1000;
  // Establecemos un temporizador con setTimeout
    setTimeout(() => {
        // Cuando se cumple el tiempo, se ejecuta la función de callback
        // Aquí se mostrará un mensaje en una ventana emergente por `alert`
        // y se imprimirá un mensaje en la consola.
        alert(`Ya es hora de dormir, ya pasaron ${segundos} segundos`);
        console.log(`Ya es hora de dormir, ya pasaron ${segundos} segundos`);
    }, tiempoEnMilisegundos);
}