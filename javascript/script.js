"use strict";

window.onload = function() {
 	
 	var numberOfdays; 
 	
 	var month = document.title;
 	console.log(month); 
 	
 	if(month === "Februari"){
 		numberOfdays = 28; 
 	}
 	if(month === "April" || month === "Juni" || month === "September" || month === "November"){
 		numberOfdays = 30; 
 	}
 	if(month === "Januari" || month === "Mars" || month === "Maj" || month === "Juli" || month === "Augusti" || month === "Oktober" || month === "December"){
 		numberOfdays = 31; 
 	}
 	
 	days.init(month, numberOfdays);		
 	
};