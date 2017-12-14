/*global $*/

$(document).ready(function() { 
    
    var numberInput = [];

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
    	
$( "button" ).click(function() {
//   numberInput = $( this ).val();
  
//   numberInput.push($( this ).val()); 
    numberInput.push($(this).val());
    $("#total").html(numberInput);
    console.log(numberInput);
  
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
    	