var pares = [];
var impares = [];
var aleatorios = [];
var ordenada;

function paresImpares(){
	for (i=1; i<1001; i++){
		var n = creaAleatorio();
		aleatorios.push(n)
		
	}
	document.write("<h4>numeros: </h4><br>"+ aleatorios+ "<br>");
	aleatorios.forEach(esPar);
	pares.sort();
	impares.sort();
	document.write("<h4>pares: </h4><br>"+ pares + "<br>");
	document.write("<h4>impares: </h4><br>"+impares+ "<br>");
	ordenada = pares.concat(impares);
	document.write("<h4>lista ordenada: </h4><br>"+ ordenada);
}

function creaAleatorio() {
	return Math.floor(Math.random() * (1001 - 1) + 1);
}

function esPar(num){
	if (num%2 === 0){
		pares.push(num)
	}
	else{
		impares.push(num)
	}
}

window.onload = paresImpares();