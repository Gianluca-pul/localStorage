const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

buttonText.addEventListener('click', function () {
const valor = inputText.value.trim();
localStorage.setItem('datoGuardado', valor);
console.log('Dato guardado en localStorage:', valor);
});

