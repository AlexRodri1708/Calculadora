var primertermino;
var segundotermino;
var operacion;

function inicial(){

  var resultado = document.getElementById('resultado');
  var resetear = document.getElementById('resetear');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
}
//Eventos de click
  uno.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
  }
  dos.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(e){
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(e){
      resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(e){
      resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(e){
      resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(e){
      resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(e){
      resultado.textContent = resultado.textContent  + "0";
  }
  resetear.onclick = function(e){
      resetear();
  }
  suma.onclick = function(e){
      primertermino = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      primertermino = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      primertermino = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      primertermino = resultado.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      segundotermino= resultado.textContent;
      resolver();
  }


function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  primertermino = 0;
  segundotermino = 0;
  operacion = "";
}
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(primertermino) + parseFloat(segundotermino);
      break;
    case "-":
        res = parseFloat(primertermino) - parseFloat(segundotermino);
        break;
    case "*":
      res = parseFloat(primertermino) * parseFloat(segundotermino);
      break;
    case "/":
      res = parseFloat(primertermino) / parseFloat(segundotermino);
      break;
  }
  resetear();
  resultado.textContent = res;
}