var primertermino;
var segundotermino;
var operacion;

function inicial(){

  var resultado = document.getElementById('resultado');
  var resetear = document.getElementById('resetear');
  var logaritmo = document.getElementById('logaritmo');
  var seno = document.getElementById('seno');
  var coseno = document.getElementById('coseno');
  var tangente = document.getElementById('tangente');
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
  seno.onclick=function(e){
  	resultado.textContent=resultado.textContent+"Sin ";
  		operacion="Sin";
  	    limpiar();
  	primertermino=resultado.textContent;
  }
   coseno.onclick=function(e){
  	resultado.textContent=resultado.textContent+"Cos ";
  		operacion="Cos";
  		limpiar();
  		primertermino=resultado.textContent;
  }
   tangente.onclick=function(e){
  	resultado.textContent=resultado.textContent+"Tan ";
  		operacion="Tan";
  		limpiar();
  		primertermino=resultado.textContent;
  }
   logaritmo.onclick=function(e){
  	resultado.textContent=resultado.textContent+"Log ";
  		operacion="Log";
  		limpiar();
  		primertermino=resultado.textContent;
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
  var res =0 ;
    const gr = deg =>(deg * Math.PI) / 180.0
 
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
      case "Sin":
      segundotermino= Math.sin(gr(primertermino)).toFixed(4);
     res=segundotermino;
      break;
       case "Cos":
      segundotermino= Math.cos(gr(primertermino)).toFixed(4);
         res=segundotermino;
      break;
       case "Tan":
      segundotermino= Math.tan(gr(primertermino)).toFixed(4);
         res=segundotermino;
      break;
       case "Log":
      segundotermino= Math.log(gr(primertermino)).toFixed(4);
         res=segundotermino;
      break;
  }
  resetear();
  resultado.textContent = res;
}