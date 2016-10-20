
//REST PARAMETERS --------------------------------------------------------------------------------------
/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/parametros_rest

You can use rest parameters to group arguments in a function, so you dont have to create 
the function naming each one of the arguments, or even knowing how many it will contain

*/

function multiply (multiplier, a, b, c){
	var list = [multiplier*a, multiplier*b,multiplier*c];
	return list;
}

//VS

function multiply(multiplier, ...list) {
  return list.map(function (element) {
    return multiplier * element;
  });
}


//SPREAD OPERATOR ---------------------------------------------------------------------------------------
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator

Spread syntax allows an expression to be expanded in places where multiple arguments (elements or 
variables as well) are expected. 

*/
//JOINING ARRAYS....
var a, b, c, d, e;
a = [1,2,3];
b = "dog";
c = [42, "cat"];


d = a.concat(b, c); // Using the concat method.
e = [...a, b, ...c]; // Using the spread operator.

console.log(d); // 1, 2, 3, "dog", 42, "cat"
console.log(e); // 1, 2, 3, "dog", 42, "cat"

//other example
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);

//INTRODUCING NEW ELEMENTS INTO AN ARRAY....

var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];



//WHERE SOME ARGUMENTS ARE EXPECTED...

function f(a, b, c, x, y, z, h) {
  return a + b + c + x + y + z;
}

var lista = [1, 2, 3];
var otra = [4,5,6,7];

console.log(f(...lista, ...otra)) //28



