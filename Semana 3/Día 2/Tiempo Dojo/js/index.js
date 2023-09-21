function mostrarMensaje(elemento){
    alert("Cargando el pronóstico del clima.")
}

function removerCookie(elemento){
    // elemento.closest('.cookies').remove();
    let cookie = elemento.closest('.cookies');
    cookie.classList.add('ocultar');
}

function cambiarTemperatura(elemento){
    let opcion = elemento.value;
    let temperaturas = document.querySelectorAll('.max > span, .min > span');
    console.log(temperaturas);

    if(opcion === 'f'){
        for(let i = 0; i < temperaturas.length; i ++){
            let temperatura = temperaturas[i].innerText;
            let temperaturaFinal = (temperatura * 1.8) + 32;
            temperaturas[i].innerText = Math.round(temperaturaFinal);
        }
    }
    else{
        for(let i = 0; i < temperaturas.length; i ++){
            let temperatura = temperaturas[i].innerText;
            let temperaturaFinal = (temperatura - 32) / 1.8;
            temperaturas[i].innerText = Math.round(temperaturaFinal);
        }
    }
}