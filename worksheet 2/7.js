var lista = [];
for (i=1; i<11; i++){
	lista.push(i);
}
document.write("<h4> lista de números: </h4>"+ lista);

//join()

function cambiarElementos(lista, n){
	for (i=0; i<10; i++){
		lista[i] = n;
	}
}

function addUno(lista){
	for (i=0; i<10; i++){
		lista[i] += 1;
	}
}
cambiarElementos(lista, 0);
document.write("<h4> lista de 0: </h4>"+lista +"<br>");

addUno(lista)
document.write("<h4> sumo 1: </h4>"+ lista);

document.write("<h4> Con espacios: </h4>"+ lista.join(" "))

