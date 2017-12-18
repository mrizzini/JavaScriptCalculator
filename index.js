/*global $*/

$(document).ready(function() { 
    
    var numberInput = "";
    var numberInputTwo = "";
    var operatorInput = "";
    var joinNumbers = [];
    var joinNumbersTwo = [];
    var result = "";
    var operation = "";

    	
$( "#numbers > button").not("#clearCurrent, #clearAll").click(function() {
    numberInput +=  $(this).val();  
    $("#total").html(numberInput);
    console.log(numberInput);
});

$("#operators > button").not("#equals").click(function(){
    operatorInput = $(this).val();
    numberInputTwo = numberInput;
    numberInput = "";
    $("#total").html(operatorInput);
    console.log(operatorInput);
    console.log(numberInput);
    $("#total").html(operatorInput);

});

$("#equals").click(function(){
    console.log("equals pushed");
    if (operatorInput === "+") {
        result = $("#total").html(parseInt(numberInputTwo) + parseInt(numberInput));
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


    	
    // 	console.log(numberInput);
 
    	
    // 	console.log(numbers);
    	
});
//above line ends the document ready



    
    //     $('#clearCurrent').click(function() {
    // 	    $('#results').html(0);
    // 	});
    
    //     $('#decimal').click(function() {
    	    
    // 	});
    	
    // 	$('#add').click(function() {
    // 	    $('#results').html();
    // 	});
    
    //     $('#zero').click(function() {
    // 	     document.getElementById('results').innerHTML =  document.getElementById('results').innerHTML + document.getElementById('zero').value;
            
    //     });
    
    // 	$('#one').click(function() {
    // 	 document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('one').value;
    // 	   // $('#results').html(1);
    // 	});
    
    //     $('#two').click(function() {
    // 	    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('two').value;
    // 	});
    	
    // 	$('#three').click(function() {
    // 	    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('three').value;
    // 	});
    	
    // 	$('#four').click(function() {
    // 	  document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('four').value;
    // 	});
    
    //     $('#five').click(function() {
    // 	  document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('five').value;
    // 	});
    	
    // 	$('#six').click(function() {
    // 	 document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('six').value;
    // 	});
    	
    // 	$('#seven').click(function() {
    // 	    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('seven').value;
    // 	});
    
    //     $('#eight').click(function() {
    // 	    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('eight').value;
    // 	});
    	
    // 	$('#nine').click(function() {
    // 	   document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('nine').value;
    // 	});
    	