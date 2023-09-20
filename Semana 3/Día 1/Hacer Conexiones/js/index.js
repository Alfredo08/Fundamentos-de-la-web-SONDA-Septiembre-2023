function mostrarModal(elemento){
    const modal = document.querySelector('.modal');
    modal.classList.add('showModal');
    const contendorPrincipal = document.querySelector('.main');
    contendorPrincipal.classList.add('mainOpacity');
    document.querySelector('#editUserName').value = "";
} 

function cambiarNombre(evento){
    evento.preventDefault();
    console.log(evento);
    const elementoNombreUsuario = document.querySelector('#userName');
    const nuevoNombreDeUsuario = document.querySelector('#editUserName').value;

    elementoNombreUsuario.innerText = nuevoNombreDeUsuario;
    const modal = document.querySelector('.modal');
    modal.classList.remove('showModal');
    const contendorPrincipal = document.querySelector('.main');
    contendorPrincipal.classList.remove('mainOpacity');
}

function removerUsuario(elemento, opcion){
    const contenedor = elemento.closest('.card-list-item');
    contenedor.remove();
    let numeroDeConexiones = document.querySelector('#connectionRequestNumber').innerText;
    numeroDeConexiones --;
    document.querySelector('#connectionRequestNumber').innerText = numeroDeConexiones;
    if(opcion === 'aceptar'){
        let numeroTotalDeConexiones = document.querySelector('#totalConnections').innerText;
        numeroTotalDeConexiones ++;
        document.querySelector('#totalConnections').innerText = numeroTotalDeConexiones;
    }
}