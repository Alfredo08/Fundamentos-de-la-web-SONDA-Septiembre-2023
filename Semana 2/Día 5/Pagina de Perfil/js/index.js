
function logout(elemento){
    console.log("Vamos a hacer un logout!");
    console.log(elemento);
}

function removerConexion(elemento){
    elemento.closest('.card-list-item').remove();
    let elementoNumeroDeConexiones = document.querySelector('#connectionRequestNumber');
    let numeroDeConexiones = elementoNumeroDeConexiones.innerText;
    numeroDeConexiones -= 1;
    elementoNumeroDeConexiones.textContent = numeroDeConexiones;
}

function agregarConexion(elemento){
    let misConexiones = document.querySelector('#myConnections');
    let imagenDeAvatar = elemento.closest('.card-list-item').querySelector('.avatar-s');
    let nombreDeConexion = elemento.closest('.card-list-item').querySelector('span').innerText;
    console.log(imagenDeAvatar)
    misConexiones.innerHTML += `
                <li class="card-list-item start">
                    <img src="${imagenDeAvatar.src}" alt="${imagenDeAvatar.alt}" class="avatar-s">
                    ${nombreDeConexion}
                </li>`;

    let elementoTotalDeConexiones = document.querySelector('#totalConnections');
    let numeroDeConexiones = elementoTotalDeConexiones.innerText;
    numeroDeConexiones ++;
    elementoTotalDeConexiones.innerText = numeroDeConexiones;
    
    removerConexion(elemento);

}

function verMas(elemento){
    alert("En un momento cargaremos tu lista completa de conexiones.");
}

function cambiarFondo(elemento){
    elemento.classList.add('extra');
}

function quitarFondo(elemento){
    elemento.classList.remove('extra');
}
/*
let navegacion = document.querySelector('.nav-links');
console.log(navegacion);

// Elemento con etiqueta de cierre
let nombreUsuario = document.querySelector('#userName');
console.log(nombreUsuario.innerText);

// INPUT
let busqueda = document.querySelector('#busqueda');
console.log(busqueda.value);

let todosLI = navegacion.querySelectorAll('li');
for(let i = 0; i < todosLI.length; i ++){
    console.log(todosLI[i].innerHTML);
}

navegacion.innerHTML += `<li> Nuevo elemento </li>`;

let encabezadoDeTarjeta = document.querySelector('.card-header');
encabezadoDeTarjeta.classList.add('extra');
encabezadoDeTarjeta.classList.remove('extra');

let imagenDePerfil = document.querySelector('.avatar-m');
imagenDePerfil.src = "https://shorturl.at/lrwAY";
imagenDePerfil.remove();

let signOut = document.querySelector('.btn');
signOut.closest('.nav');
*/