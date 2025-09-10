const spanData = document.getElementById('data');
const valorGuardado = localStorage.getItem('datoGuardado');

if (valorGuardado) {
spanData.textContent = valorGuardado;
} else {
spanData.textContent = '[No hay datos guardados]';
}