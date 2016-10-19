/*
Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

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
var strings = ["hola", "hallo", "bonjour", "hi"];

window.onload = function(){document.getElementById("lista").innerHTML = numbers + "<br>" + strings};

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

}


function alphabetOrder(){
	document.getElementById("texto").innerHTML = numbers.sort();
}

function numericOrder(){
	document.getElementById("texto").innerHTML = numbers.sort(function(a, b){return a - b;});
}
