
const obtenerImagenes = async (evento) => {
    evento.preventDefault();
    
    let numeroImagenes = document.querySelector('#numeroImagenes').value;
    let url = `https://dog.ceo/api/breeds/image/random/${numeroImagenes}`;
    let configuracion = {
        method : 'GET'
    };

    let respuesta = await fetch(url, configuracion);
    let datos = await respuesta.json();
    
    let contenedorImagenes = document.querySelector('.imagenes');
    contenedorImagenes.innerHTML = "";
    for(let i = 0; i < datos.message.length; i ++){
        contenedorImagenes.innerHTML += `<img class="imagen-individual" src="${datos.message[i]}" alt="Imagen de un perrito">`;
    }
}