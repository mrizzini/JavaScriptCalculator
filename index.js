/*global $*/

$(document).ready(function() { 
    
        $('#clearCurrent').click(function() {
    	    $('#results').html(0);
    	});
    
        $('#decimal').click(function() {
    	    
    	});
    	
    	$('#add').click(function() {
    	    $('#results').html();
    	});
    
        $('#zero').click(function() {
    	    document.getElementById('results').innerHTML =  document.getElementById('results').innerHTML + document.getElementById('zero').value;
            
        });
    
    	$('#one').click(function() {
    	 document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('one').value;
    	   // $('#results').html(1);
    	});
    
        $('#two').click(function() {
    	    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('two').value;
    	});
    	
    	$('#three').click(function() {
    	    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('three').value;
    	});
    	
    	$('#four').click(function() {
    	  document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('four').value;
    	});
    
        $('#five').click(function() {
    	  document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('five').value;
    	});
    	
    	$('#six').click(function() {
    	 document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('six').value;
    	});
    	
    	$('#seven').click(function() {
    	    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('seven').value;
    	});
    
        $('#eight').click(function() {
    	    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('eight').value;
    	});
    	
    	$('#nine').click(function() {
    	   document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + document.getElementById('nine').value;
    	});
    	
    	
    	
    	
    	
});
//above line ends the document ready