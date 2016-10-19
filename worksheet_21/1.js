/*
Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):
a) find largest number
b) find longest string
c) find even numbers
d) find odd numbers
e) find words that contain 'is'
f) assert all numbers are divisible by three
g)  zip two arrays together
h) sort joined array from smallest to largest
i) remove the first word in the array
j) place a new word at the start of the array
k) replace some elements
l) Over an array with names, find all entries whose firstname starts with 'J',  create projection combined of only the initials of the name and then sort alphabetically
*/

var numbers = [4, 10, 11, 18, 20, 2, 5, 1, 3];
var strings = ["hola", "hallo", "bonjour", "hi", "this", "miss","island"];

window.onload = function(){document.getElementById("lista").innerHTML = numbers + "<br>" + strings};

/*


function numericOrder(){
	document.getElementById("texto").innerHTML = numbers.sort(function(a, b){return a - b;});
}
*/


//a) find largest number
function higherNumber(){
	numbers.sort(function(a, b){return a - b;})
	document.getElementById("texto").innerHTML = numbers[numbers.length -1];
}

//b) find longest string
function compareLength(a,b){
	var a;
	var b;
	if (a.length > b.length){return -1;}
	else if(a.length < b.length){return 1;}
	else {return 0}
}

function longestString(){
	strings.sort(compareLength);
	document.getElementById("texto").innerHTML = strings[0];
}

//c) find even numbers
var even =[];
var odds = [];

function evenNumbers(){
	document.getElementById("texto").innerHTML = numbers.filter(checkEven);
}

function checkEven(n){
	return (n%2 ==0);
}

//d) find odd numbers
function oddNumbers(){
	document.getElementById("texto").innerHTML = numbers.filter(checkOdd);
}
function checkOdd(n){
	return (n%2 !=0);
}

//e) find words that contain 'is'
function searchWord(){
	document.getElementById("texto").innerHTML = strings.filter(wordFind);
}

function wordFind(word){
	var n = word.search("is");
	return (n>0);
	}

//f) assert all numbers are divisible by three
function divisibleByThree(){
	document.getElementById("texto").innerHTML = numbers.filter(divisible);
}

function divisible(n){
	return (n%3 ==0);
}

//g)  zip two arrays together
function joinArrays(){
	var unidas = numbers.concat(strings);
	document.getElementById("texto").innerHTML = unidas;
	return unidas;
}

//h) sort joined array from smallest to largest
function orderJoined(){
	var unida = joinArrays();
	document.getElementById("texto").innerHTML = unida.sort();
}


//i) remove the first word in the array
function removeFirst(){
	document.getElementById("texto").innerHTML = "Se elimina el elemento " + strings.shift() + " y queda así: "+ strings ;

}

//j) place a new word at the start of the array
function addWord(){
	var palabra = prompt("Escribe la palabra que deseas añadir");
	strings.splice(0,0,palabra);
	document.getElementById("texto").innerHTML = strings;
}
//k) replace some elements
function replaceElements(){
	var old = prompt("Escribe la palabra a reemplazar");
	var nueva = prompt("Escribe lo que quieres poner en su lugar");
	strings = strings.toString();
	strings = strings.replace(old,nueva);
	strings = strings.split(",");
	document.getElementById("texto").innerHTML= strings;
}
//l) Over an array with names, find all entries whose firstname starts with 'J',  create projection combined of only the initials of the name and then sort alphabetically
