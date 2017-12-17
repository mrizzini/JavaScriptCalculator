/*global $*/

$(document).ready(function() { 
    
    var numberInput = [];
    var numberInputTwo = [];
    var operatorInput = [];
    var joinNumbers = [];
    var joinNumbersTwo = [];
    var result = "";
    var operation = "";
    var clicked = false;

    // 	$("#one").click(function(){
    //         // console.log("hey");
    //         // numberInput = $(this).val();
    //         // console.log(numberInput);
    // 	});
    	
    // 	$("#two").click(function(){
    //         // console.log("hey 2");
    //         // numberInput = $(this).val();
    //         // console.log(numberInput);
    // 	});
    	
$( "#numbers > button").not("#clearCurrent, #clearAll").click(function() {
    // $("#total").html();
//   numberInput = $( this ).val();
  
//   numberInput.push($( this ).val());

//  if (clicked == true) {
     
//      console.log("clikced is true!");
//     numberInputTwo.push($(this).val());
//     joinNumbersTwo = numberInputTwo.join("");
//     $("#total").html(joinNumbersTwo);
//     console.log(joinNumbersTwo);
//  } 
  
    numberInput.push($(this).val());
    joinNumbers = numberInput.join("");
    $("#total").html(joinNumbers);

    // $("#operators > button").not("#equals").click(function(){
    //     console.log("hiii");
    //     joinNumbersTwo = operatorInput.join("");
    // });
    // // console.log(numberInput);
    // console.log(joinNumbers + joinNumbersTwo);
    console.log(operation);
    console.log(joinNumbers);

    
  
});

$("#operators > button").not("#equals").click(function(){
    // clicked = true;
    numberInput.push($(this).val());
    joinNumbers = numberInput.join("");
    console.log(joinNumbers);
    // $("#total").html(operatorInput);
    // operation = joinNumbers + operatorInput;
    // console.log(operation);
    
    // // joinNumbers = numberInput.join("");
    // console.log(joinNumbers);
    // console.log(operatorInput);
});

$("#equals").click(function(){
    console.log("equals pushed");
    // console.log(typeof joinNumbers);
   
    $("#total").html(displayResults());
    
    function displayResults () {
        parseInt(joinNumbers);
        return joinNumbers;
    }
    
    //   numberInput.push($(this).val());
    //     joinNumbers = numberInput.join("");
    //     console.log(joinNumbers);
    //     return jo
        
        
    //  result = joinNumbers.join(operatorInput);
    //  console.log(result);
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
    	