/*global $*/

$(document).ready(function() { 
    
    var numberInput = "";
    var operatorInput = "";
    var result = 0;
    var runningEquation = "";
    
    
    $("button").not("#clearCurrent, #clearAll, #equals").click(function() {
    // console.log("button");
    
    
    numberInput += ($(this).val());
    console.log(numberInput);
    $("#total").html(numberInput);

});
    
     $("#equals").click(function() {
    // operators = numberInput.split((/|"+"|"-"/g));
    // var reg = new RegExp(/(\+)/, 'g'); this works for one operator!!!
    var reg = new RegExp(/([\+\-\*\/])/, 'g');
    runningEquation = numberInput.split(reg);
    console.log(runningEquation);
    // result = runningEquation[0];
    console.log("so far, result is " + result);
    console.log(runningEquation.length);
    
    for (var i = 0; i < runningEquation.length; i++) {
        // console.log(runningEquation[i]);
        
        if (runningEquation[i] == "+") {
            result += parseInt(runningEquation[i + 1]);
            i += 1;
            console.log("now, result is " + result);
        } else {
            result += parseInt(runningEquation[i]);
        }
    }
    console.log("final result is " + result);
        // // numberInput += $(this).val();
        // console.log("equals clicked");
        // console.log(numberInput);
        // // numberInput = numberInput.split("");
        // // console.log(numberInput);
        // for (var i = 0; i < numberInput.length; i++) {
        // // console.log("hi there" + numberInput[i+1]);
        // if (numberInput[i] == "+") {
        //     result += parseInt(numberInput[i+1]);
        //     i += 1;
        //     console.log(result);
        // } 
        // else {
        // result += parseInt(numberInput[i]);
        // console.log(result);
        // }
        
        // }
        // console.log(result);
        // //  $("#total").html(result);
     });
    	
// $( "#numbers > button").not("#clearCurrent, #clearAll").click(function() {
    
//     numberInput +=  $(this).val();  
    
//     for (var i = 0; i < numberInput.length; i++ ) {
        
//     }
    
//     $("#total").html(numberInput);
//     $("#operationBox").html(numberInputTwo + operatorInput + numberInput);
//     // console.log(numberInput);
//     console.log(numberInputTwo + operatorInput + numberInput);
// });

// $("#operators > button").not("#equals").click(function(){
//     operatorInput = $(this).val();
//     numberInputTwo = numberInput;
//     numberInput = "";
    
//     $("#total").html(operatorInput);
//     $("#operationBox").html(numberInputTwo + operatorInput);
//     console.log(numberInput + operatorInput);
//     // console.log(operatorInput);
//     // console.log(numberInput);
//     $("#total").html(operatorInput);

// });

// $("#equals").click(function(){
//     console.log("equals pushed");
//     if (operatorInput === "+") {
//         result = $("#total").html(parseInt(numberInputTwo) + parseInt(numberInput));
//         console.log(result);
//     } else if (operatorInput === "-") {
//         result = $("#total").html(parseInt(numberInputTwo) - parseInt(numberInput));
//         console.log(result);
//     } else if (operatorInput === "/") {
//         result = $("#total").html(parseInt(numberInputTwo) / parseInt(numberInput));
//         console.log(result);
//     } else if (operatorInput === "*") {
//         result = $("#total").html(parseInt(numberInputTwo) * parseInt(numberInput));
//         console.log(result);
//     }
// });

// $("#clearCurrent").click(function(){
//     console.log("current input cleared");
//     numberInput = "";
//     $("#total").html(0);
//     $("#operationBox").html(numberInputTwo + operatorInput + numberInput);
//     console.log(numberInput);
//     console.log(numberInputTwo);
//     console.log(operatorInput);
// });

// $("#clearAll").click(function(){
//     console.log("calculator cleared");
//     numberInput = "";
//     numberInputTwo = "";
//     operatorInput = "";
//     $("#operationBox").html(numberInputTwo + operatorInput + numberInput);
//     console.log(numberInput);
//     console.log(numberInputTwo);
//     console.log(operatorInput);

//     $("#total").html(0);
// });

    	
});