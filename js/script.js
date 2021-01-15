//Genera numeri random
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var numeriPc = [];
var numeriUtente = [];
//Verifica se non ci sono numeri uguali
while (numeriPc.length<5) {
  var random = randomNumber(1, 100);
  console.log(random);
  if (numeriPc.includes(random)=== false) {
    numeriPc.push(random);
  }else{
    console.log('numero già esistente');
  }
}
console.log(numeriPc);
var alertNumeri = alert(numeriPc);


//countdown
var element = document.getElementById('conto');
var conto = 3;

element.innerText = conto;


var countdown = setInterval(function() {
  conto--;
  element.innerText = conto
  if(conto === 0) {
//5 numeri inseriti dall'utente
    setTimeout(function() {
      for (var i = 0; i < 5; i++) {
        var utente = parseInt(prompt('Inserire i numeri'));
        if (numeriUtente.includes(utente)=== true){
          alert('Non puoi inserire lo stesso numero');
          break;
        }else {
          numeriUtente.push(utente);
          console.log('Numeri utente ' + numeriUtente);
        }}
        //Risultato

        if (numeriPc.includes(utente)=== true) {
              numeriCorretti = numeriCorretti + 1
        }
        console.log('I numeri corretti sono: '+ numeriCorretti);

    }, 200);
    var numeriCorretti = parseInt(0);
    clearInterval(countdown)
  }

}, 1000)
