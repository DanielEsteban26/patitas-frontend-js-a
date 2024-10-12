window.addEventListener('load', function(){

    // referenciar elementos de la pagina
    const msgSuccess = this.document.getElementById('msgSuccess');

    // recuperar nombre del usuario del localStorage
    const result = JSON.parse(this.localStorage.getItem('result'));
    mostrarAlerta(`Bienvenido ${result.nombreUsuario}`);

});

function mostrarAlerta(mensaje) {
    msgSuccess.innerHTML = mensaje;
    msgSuccess.style.display = 'block';
}

function ocultarAlerta() {
    msgSuccess.innerHTML = '';
    msgSuccess.style.display = 'none';
}