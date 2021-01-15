function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var numeriPc = [];
var numeriUtente = [];

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
