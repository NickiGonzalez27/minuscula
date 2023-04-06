// Establecer la fecha de final
var countDownDate = new Date("Apr 31, 2023 23:59:59").getTime();

// Actualizar el contador cada segundo
var x = setInterval(function() {

  // Obtener la fecha y hora actual
  var now = new Date().getTime();

  // Calcular la diferencia entre la fecha de final y la fecha y hora actual
  var distance = countDownDate - now;

  // Calcular días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el contador en la página
  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;

  // Si el tiempo se ha acabado, mostrar un mensaje
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('#countdown').innerHTML = "El tiempo se ha acabado";
  }
}, 1000);

function wsp(){
  window.open('https://web.whatsapp.com/', '_blank');
}

function telefono(){
  location.href="tel:+34678567876";
}

function instagram(){
  window.open('https://www.instagram.com/', '_blank');
}
