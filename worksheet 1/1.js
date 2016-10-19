/*
1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.
2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.
3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.
6. Crea una función para calcular potencias de un modo recursivo.
7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.
*/
function maximo(n1,n2,n3,n4){
	if (n1>n2 && n1>n3 && n1> n4){
		return n1;
	}
	else if (n2>n1 && n2>n3 && n2>n4){
		return n2;
	}
	else if (n3>n1 && n3>n2 && n3>n4 ){
		return n3;
	}
	else {
		return n4;
	}
}

function averiguaMaximo(){
	var n1 = prompt("Escribe el primer número");
	var n2 = prompt("Escribe el segundo número");
	var n3 = prompt("Escribe el tercer número");
	var n4 = prompt("Escribe el cuarto número");
	document.getElementById("texto").innerHTML = "El número mayor es el "+ maximo(n1,n2,n3,n4);
}

function lanzamiento() {
	var dado = Math.floor(Math.random() * (6) + 1);
	return dado;
}

function tiraDado(){
	document.getElementById("texto").innerHTML = "Ha salido el "+ lanzamiento();
}

var lista = [];

for (i=0;i<6;i++){
	lista.push(0);
}
function tiraDados(){
	for (i=0; i<6000; i++){
		var tirada = lanzamiento()
		lista[tirada-1] += 1;
	}
	document.getElementById("texto").innerHTML = "uno: "+ lista[0]+ "<br>dos: "+ lista[1] 
	+ "<br>tres: "+ lista[2] + "<br>cuatro: "+ lista[3] + "<br>cinco: "+ lista[4] + 
	"<br>seis: "+ lista[5];
}
function reinicia(){
	for (i=0;i<6;i++){
	lista[i]= 0;
	}
	document.getElementById("texto").innerHTML = "uno: "+ lista[0]+ "<br>dos: "+ lista[1] 
	+ "<br>tres: "+ lista[2] + "<br>cuatro: "+ lista[3] + "<br>cinco: "+ lista[4] + 
	"<br>seis: "+ lista[5];
}

function calculaArea(){
	var radio = prompt("Indica el radio del círculo");
	document.getElementById("texto").innerHTML = "El área es " + Math.round(Math.PI* radio*radio);
}

function calculaPotencia(n, indice){
	if (indice==1){
		return n;
	}
	else if (indice==0){
		return 1;
	}
	else{
		return n * calculaPotencia(n,indice-1);
	}
}

function llamaPotencia(){
	var n = prompt("Escribe el numero ");
	var indice = prompt("Escribe la potencia");
	document.getElementById("texto").innerHTML = "El resultado es "+ calculaPotencia(n, indice);

}

function factorial(n){
	if(n==0){
		return 1;
	} 
	else{
		return n* factorial(n-1);
	}
}

function tablaFactorial(){
	var texto = "<table border='1'>"
	for (i=0;i<11;i++){
		texto += "<tr><td>"+ i+ "</td><td>" + factorial(i) + "</td></tr>";
	}
	texto += "</table>";
	document.getElementById("tabla").innerHTML = texto; 
}
