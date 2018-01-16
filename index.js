/*global $*/
$(document).ready(function() {
	var numberInput = ""; //storing variables
	var result = 0;
	var runningEquation = "";
	var resultDisplay = "";
	
	$("button").not("#clearCurrent, #clearAll, #equals").click(function() {
		numberInput += ($(this).val()); // this adds any button value besides C, CE, and = into numberInput as a string
		console.log(numberInput);
		$("#operationBox").html(numberInput);
		var reg = new RegExp(/([\+\-\*\/])/, 'g'); // this creates a regular expression for the operators
		runningEquation = numberInput.split(reg); // this splits up the string numberInput up at any operator and turns runningEquation into an array ex ['5', '*', '3']
		console.log(runningEquation);
		for (var i = 0; i < runningEquation.length; i++) {
			$("#total").html(runningEquation[i]); // prints out current number into display box
		}
	});
	
	$("#equals").click(function() {
		console.log(runningEquation);
		console.log("so far, result is " + result);
		console.log(runningEquation.length);
		for (var i = 0; i < runningEquation.length; i++) {
			// console.log(runningEquation[i]);
			if (runningEquation[i] == "+") {
				result += parseFloat(runningEquation[i + 1]); // if the array index is a + sign, take what is in result, and add to what is one index ahead of the +
				i += 1;
				console.log("after addition, result is " + result);
			} else if (runningEquation[i] == "-") {
				result -= parseFloat(runningEquation[i + 1]); // if the array index is a - sign, take what is in result, and subtract what is one index ahead of the -
				i += 1;
				console.log("after subtraction, result is " + result);
			} else if (runningEquation[i] == "*") { 
				result *= parseFloat(runningEquation[i + 1]); // if the array index is a * sign, take what is in result, and multply what is one index ahead of the *
				i += 1;
				console.log("after multiplication, result is " + result);
			} else if (runningEquation[i] == "/") {
				result /= parseFloat(runningEquation[i + 1]); // if the array index is a / sign, take what is in result, and divide what is one index ahead of the /
				i += 1;
				console.log("after division, result is " + result);
			} else {
				result += parseFloat(runningEquation[i]); // if the array index is NOT an operator, store it into result. this should start the equation
			}
		}
		console.log("final result is " + result);
		
		resultDisplay = result.toString().length; // this limits display to fit in the box
		if (resultDisplay > 12) {
			resultDisplay = result.toString().substring(0, 12);
			result = parseFloat(resultDisplay);
		}
		$("#total").html(result);
	});
	
	$("#clearCurrent").click(function() {
		console.log("current input cleared");
		runningEquation.pop();
		numberInput = runningEquation;
		$("#operationBox").html(numberInput);
		console.log(numberInput);
		console.log("after clear current, " + runningEquation);
	});
	
	$("#clearAll").click(function() {
		numberInput = "";
		runningEquation = "";
		result = "";
		$("#operationBox").html(0);
		$("#total").html(0);
		console.log("ENITRE CALCULATOR RESET, " + runningEquation);
	});
	
}); // this line ends document ready