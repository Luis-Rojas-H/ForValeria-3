

var boton = document.querySelectorAll('button');

var example = document.getElementsByClassName("main")[0].getBoundingClientRect();

var example1 = document.getElementsByClassName("boton2")[0].getBoundingClientRect();



boton[1].addEventListener('mouseenter', function position(){
  var x = (Math.random() * (82 - (0))) + (0);
  var yd = 100-((example1.height)/example.height)*100;
  var y = (Math.random() * (yd - (0))) + (0);

  boton[1].style.left= (x)+"%";
  boton[1].style.bottom = (y)+"%";

  let audioEtiqueta = document.querySelector("audio")
  audioEtiqueta.play();
})

boton[1].addEventListener('click', function postionPhone (){
  var x = (Math.random() * (82 - (0))) + (0);
  var yd = 100-((example1.height)/example.height)*100;
  var y = (Math.random() * (yd - (0))) + (0);

  boton[1].style.left= (x)+"%";
  boton[1].style.bottom = (y)+"%";

  let audioEtiqueta = document.querySelector("audio")
  audioEtiqueta.play();
})


var reproductor = document.getElementById("audioFondo");
reproductor.volume = 0.5;