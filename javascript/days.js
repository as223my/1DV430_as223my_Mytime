"use strict";

var days = {
		
	init:function(month, numberOfDays){	
		
		//Skapar forEach om detta inte finns i webbläsaren, så att man kan använda detta i till arrayen. 
		if (!NodeList.prototype.forEach){
			NodeList.prototype.forEach = Array.prototype.forEach;
		};
		
		for(var i = 0 ; i < numberOfDays; i++){
			var allDaysDiv = document.getElementById("daysDiv");
			var day = document.createElement("div");
			day.className ="day";
			
			var number = days.fix(i) + 1;	
			day.id = month + number; 
			var p = document.createElement("p");
			var text = document.createTextNode(number);
			p.appendChild(text); 		
			day.appendChild(p);
			allDaysDiv.appendChild(day);
		};
		
		popUp.show();
		
}, 
	fix:function(n) {
		return n;
	}
	
};
