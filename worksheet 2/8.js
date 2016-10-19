/*
Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
*/

var lista = [];

for (i=0;i<11;i++){
	lista.push(0);
}

function tiraDado() {
	var d1 = Math.floor(Math.random() * (6) + 1);
	var d2 = Math.floor(Math.random() * (6) + 1);
	return (d1+d2);
}

for (i=0; i<36000; i++){
	var tirada = tiraDado()
	lista[tirada-2] +=1;
}

window.onload = document.write("dos: "+ lista[2-2] //menos dos porque la lista empieza en 0 no en 2(min tirada)
	+ "<br>tres: "+ lista[3-2]  + "<br>cuatro: "+ lista[4-2]  + "<br>cinco: "+ lista[5-2]  + 
	"<br>seis: "+ lista[6-2]  + "<br>siete: "+ lista[7-2]  + "<br>ocho: "+ lista[8-2]  + "<br>nueve: "+ lista[9-2] 
	+ "<br>diez: "+lista[10-2]  + "<br>once: "+ lista[11-2] + "<br>doce: "+ lista[12-2] );
