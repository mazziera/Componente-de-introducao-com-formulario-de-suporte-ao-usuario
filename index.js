document.addEventListener('DOMContentLoaded', function () {

  const formulario = document.getElementById('formulario');
  
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = formulario.getElementsByClassName('input-vazio');
   
    const obrigatorio = formulario.getElementsByClassName('obrigatorio');

    let mensagemEnviada = true;

    for (var i = 0; i < inputs.length; i++) {

      if (inputs[i].value.trim() === '') {

        obrigatorio[i].style.visibility = 'visible';
        mensagemEnviada = false;

      } else {
        obrigatorio[i].style.visibility = 'hidden';
      }
    }
  });

});