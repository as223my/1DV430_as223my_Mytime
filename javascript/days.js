"use strict";

var days = {
		
	init:function(month, numberOfDays){	
		
		//Skapar forEach om detta inte finns i webbläsaren, så att man kan använda detta i till arrayen. 
		if (!NodeList.prototype.forEach){
			NodeList.prototype.forEach = Array.prototype.forEach;
		};
		
		// Renderar ut dagarna i månaden. 
		for(var i = 0 ; i < numberOfDays; i++){
			var allDaysDiv = document.getElementById("daysDiv");
			var day = document.createElement("div");
			day.className ="day";
			var number = days.fix(i) + 1;	
			day.id = number; 
			var p = document.createElement("p");
			p.className = "number";
			var text = document.createTextNode(number);
			var p1 = document.createElement("p");
			var count = i + 1; 
			p1.id = "head" + count;
			p1.className = "dayTitel"; 
			p.appendChild(text); 		
			day.appendChild(p);
			day.appendChild(p1);
			allDaysDiv.appendChild(day);
		};

		// Anrop med ajax för att hämta de sparade dagarnas titel. 
		var title = $.ajax({
              type: 'post',                    
              url:'../php/title.php',                         
              success:function(){
      
 				var responsetext = title.responseText;
                var text = JSON.parse(responsetext);
				for(var obj in text){
					
					if(text[obj].Month === month){
					
						var id = text[obj].Day;
						var head = text[obj].Head;
						days.title(id, head); 
					}
				}
					popUp.show(month);
              },
              error: function(){
              	alert("Kunde inte hämta sparade dagar i databasen!");
          	}
     	});			
	},
	 
	fix:function(n) {
		return n;
	},
	
	// Skriver ut titel till dag. 
	title:function(id, head){
		document.getElementById(id).className = "saved";
		var div = document.getElementById(id);
		var p = document.getElementById("head" + id);
		var text = document.createTextNode(head);
		p.appendChild(text); 
		div.appendChild(p);		
	}
};
