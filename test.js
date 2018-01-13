/*global $*/

$(document).ready(function() {
	var numberInput = "";
	var result = 0;
	var runningEquation = "";
	var resultDisplay = "";
	
	$("button").not("#clearCurrent, #clearAll, #equals").click(function() {
		numberInput += ($(this).val());
		console.log(numberInput);
		$("#operationBox").html(numberInput);
		var reg = new RegExp(/([\+\-\*\/])/, 'g');
		runningEquation = numberInput.split(reg);
		console.log(runningEquation);
		for (var i = 0; i < runningEquation.length; i++) {
			$("#total").html(runningEquation[i]);
		}
	});
	
	$("#equals").click(function() {
		console.log(runningEquation);
		console.log("so far, result is " + result);
		console.log(runningEquation.length);
		for (var i = 0; i < runningEquation.length; i++) {
			// console.log(runningEquation[i]);
			if (runningEquation[i] == "+") {
				result += parseFloat(runningEquation[i + 1]);
				i += 1;
				console.log("after addition, result is " + result);
			} else if (runningEquation[i] == "-") {
				result -= parseFloat(runningEquation[i + 1]);
				i += 1;
				console.log("after subtraction, result is " + result);
			} else if (runningEquation[i] == "*") {
				result *= parseFloat(runningEquation[i + 1]);
				i += 1;
				console.log("after multiplication, result is " + result);
			} else if (runningEquation[i] == "/") {
				result /= parseFloat(runningEquation[i + 1]);
				i += 1;
				console.log("after division, result is " + result);
			} else {
				result += parseFloat(runningEquation[i]);
			}
		}
		console.log("final result is " + result);
		
		resultDisplay = result.toString().length;
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