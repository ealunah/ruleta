const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 3) {
      // 49 = 924.3806003525915
      console.log('giros: '+giros);
      if (giros < 2) {
          rand = Math.random() * 7200;
      }else{
          rand = 924.3806003525915;
          console.log ('rand:' + rand);

      }
     //    let rand = Math.random() * 7200;


    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ' + premios;

}


 function calcular(rand) {

  valor = rand;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";
  console.log ('valor:' + valor);
  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("2 estrellas");
     break;
     case valor > 45 && valor <= 90:
     premio("5 Piezas");
     break;
     case valor > 90 && valor <= 135:
     premio("2 Corazón"); 
     break; 
     case valor > 135 && valor <= 180:
     premio("2 Nigiri");
     break;
     case valor > 180 && valor <= 225:
     premio("Handroll Mini");
     break; 
     case valor > 225 && valor <= 270:
     premio("NO HAY CORTESIAS ESTA VEZ");
     break;
     case valor > 270 && valor <= 315:
     premio("Una Coca Cola de 2L");
     break;
     case valor > 315 && valor <= 360:
     premio("2 Enjoy"); 
     break;
  }

 }, 5000);

}
}