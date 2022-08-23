function calculaMedia(a, b, c) {
  let resultado = (a + b + c) / 3;
  return resultado;
}

function calculaExame(nota) {
  let resultado = 10 - nota;
  return resultado;
}

function calculardelta(a, b, c){
  let delta = b*b - (4*a*c);
  return delta
}

function calcularx1 (a, b, delta){
  let x1 = (-1*b + Math.sqrt(delta)) / 2 * a;
  return x1
}

function calcularx2 (a, b, delta){
  let x2 = (-1*b - Math.sqrt(delta)) / 2 * a;
  return x2
}

$("#inputOla").click(function() {
  formula = {
    'a': document.getElementById("inputA").Value,
    'b': document.getElementById("inputB").value,
    'delta': document.getElementById("inputC").value
  };

  let a = calcularx1 (parseInt(calculo.a), parseInt(calculo.b), parseInt(calculo.delta));

  alert(a, b, delta);
  
/*calculo = {
    a: document.getElementById("inputA").value,
    b: document.getElementById("inputB").value,
    c: document.getElementById("inputC").value
  };
  // let cria variavel let = var   //let media =   //(parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) / 3;
  let media = calculaMedia (parseInt(calculo.a), parseInt(calculo.b), parseInt(calculo.c));
  if (media >= 7) {
    alert("Você foi aprovado" + " " + media);
  } else {
    alert("Você esta de recuperação" + " " + calculaExame(media));

  }*/

});
