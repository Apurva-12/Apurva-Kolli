var number1, number2;

function addition()
{
	read();
	sum = number1 + number2;
	result(sum);
}

function multiplication()
{
	read();
	product = number1 * number2;
	result(product);
}

function subtraction()
{
	read();
	difference = number1 - number2;
	result(difference);
}

function division()
{
	read();
	quotient = number1 / number2;
	result(quotient);
}

function read()
{
	number1 = parseInt(document.getElementById("number1").value);
	number2 = parseInt(document.getElementById("number2").value);
}

function result(result)
{
	document.getElementById("result").value = result;
}

// function add()
// {
// 	var number1, number2, sum;
// 	number1 = parseInt(document.getElementById("number1").value);
// 	number2 = parseInt(document.getElementById("number2").value);
// 	sum = number1 + number2;
// 	document.getElementById("result").value = sum;
// }

// function mul()
// {
// 	var number1, number2, mul;
// 	number1 = parseInt(document.getElementById("number1").value);
// 	number2 = parseInt(document.getElementById("number2").value);
// 	mul = number1 * number2;
// 	document.getElementById("result").value = mul;
// }

// function sub()
// {
// 	var number1, number2, sub;
// 	number1 = parseInt(document.getElementById("number1").value);
// 	number2 = parseInt(document.getElementById("number2").value);
// 	sub = number1 - number2;
// 	document.getElementById("result").value = sub;
// }

// function div()
// {
// 	var number1, number2, div;
// 	number1 = parseInt(document.getElementById("number1").value);
// 	number2 = parseInt(document.getElementById("number2").value);
// 	div = number1 / number2;
// 	document.getElementById("result").value = div;
// }