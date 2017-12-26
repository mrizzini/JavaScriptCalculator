/*global $*/

$(document).ready(function() { 
    
    var numberInput = "";
    var numberInputTwo = "";
    var operatorInput = "";
    var result = 0;
    	
$( "#numbers > button").not("#clearCurrent, #clearAll").click(function() {
    
    numberInput +=  $(this).val();  
    
    for (var i = 0; i < numberInput.length; i++ ) {
        
    }
    
    $("#total").html(numberInput);
    $("#operationBox").html(numberInputTwo + operatorInput + numberInput);
    // console.log(numberInput);
    console.log(numberInputTwo + operatorInput + numberInput);
});

$("#operators > button").not("#equals").click(function(){
    operatorInput = $(this).val();
    numberInputTwo = numberInput;
    numberInput = "";
    
    $("#total").html(operatorInput);
    $("#operationBox").html(numberInputTwo + operatorInput);
    console.log(numberInput + operatorInput);
    // console.log(operatorInput);
    // console.log(numberInput);
    $("#total").html(operatorInput);

});

$("#equals").click(function(){
    console.log("equals pushed");
    if (operatorInput === "+") {
        result = $("#total").html(parseFloat(numberInputTwo) + parseFloat(numberInput));
        console.log(result);
    } else if (operatorInput === "-") {
        result = $("#total").html(parseInt(numberInputTwo) - parseInt(numberInput));
        console.log(result);
    } else if (operatorInput === "/") {
        result = $("#total").html(parseInt(numberInputTwo) / parseInt(numberInput));
        console.log(result);
    } else if (operatorInput === "*") {
        result = $("#total").html(parseInt(numberInputTwo) * parseInt(numberInput));
        console.log(result);
    }
});
// 
$("#// arCurrent").click(function(){
    // sole.log("current input cleared");
    // berInput = "";[i]1
    // #total").html(0);
    // #operationBox").html(numberInputTwo + operatorInput + numberInput);
    // sole.log(numberInput);
    // sole.log(numberInputTwo);
    console.log(operatorInput);
});

$("#clearAll").click(function(){
    console.log("calculator cleared");
    numberInput = "";
    numberInputTwo = "";
    operatorInput = "";
    $("#operationBox").html(numberInputTwo + operatorInput + numberInput);
    console.log(numberInput);
    console.log(numberInputTwo);
    console.log(operatorInput);

    $("#total").html(0);
});

    	
});
//above line ends the document ready