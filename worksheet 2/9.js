var tabla = [
[],[],[],[],[],[]
];
for (i=0; i<6; i++){
	tabla[i]=[0,0,0,0,0,0];
}

function tiraDado() { //Realiza las dos tiradas y suma 1 en la matriz donde corresponda
	var d1 = Math.floor(Math.random() * (6) + 1);
	var d2 = Math.floor(Math.random() * (6) + 1);
	tabla[d1-1][d2-1] += 1;
}
/*PRUEBA MATRIZ
for (i=0;i<6; i++){
	document.write(tabla[i] + "<br>")
}
*/

//tira el dado tantas veces como le digamos
for (i=0;i<36000; i++){
	tiraDado();
}
/*PRUEBA MATRIZ CON LOS RESULTADOS
for (i=0;i<6; i++){
	document.write(tabla[i] + "<br>")
}
*/

function creaTabla(){
	var texto = "";
	texto += "<table border= '1';>"
	texto += "<tr>"  //inicio la primera fila
	for (i=0;i<7;i++){
		if (i===0){
			texto += "<td> </td>"
		} //creo la primera fila de 7 columnas
		else{
			texto += "<td>"+i+"</td>"
		}
	}

	for (i=0;i<6;i++){ // creo las demás filas haciendo distinción en la primera columnas
		texto += "<tr>"
		for (j=0;j<7;j++){
			if (j===0){
				texto += "<td>&nbsp;&nbsp;&nbsp;&nbsp;"+(i+1)+"</td>"
			}
			else{
				texto += "<td>"+ tabla[i][j-1]+"</td>"
			}
		}
		texto += "</tr>"
	}
	texto += "</table>"
	document.getElementById('tabla').innerHTML = texto;
}

window.onload = creaTabla;

/*
document.write('<table border = "0" cellspacing = "2" bgcolor = "black" >');
for(i=1;i<=nFilas;i++){
	document.write('<tr bgcolor = "white" height ="'+ alto +'">');
	for (j=1;j<=nColumnas;j++){
		document.write('<td width = "'+ancho+'">&nbsp;</td>');
	}
	document.write('</tr>');
}
document.write('</table>');
*/
