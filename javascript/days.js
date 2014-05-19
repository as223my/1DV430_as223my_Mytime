"use strict";

var days = {
		
	saved: [],
	
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
			day.id = number; 
			var p = document.createElement("p");
			var text = document.createTextNode(number);
			p.appendChild(text); 		
			day.appendChild(p);
			allDaysDiv.appendChild(day);
		};

		
		var title = $.ajax({
              type: 'get',                    
              url:'../php/title.php',                         
              success:function(){
      
 				 var responsetext = title.responseText;
                 var text = JSON.parse(responsetext);
				for(var obj in text){
					
					if(text[obj].Month === month){
					
						var id = text[obj].Day;
						document.getElementById(id).className = "saved";
						var head = text[obj].Head;
						days.title(id, head); 
					}
				}
					popUp.show(month);
              },
              error: function() {
              	alert("error!");
      
          	}
          });
				
}, 
	fix:function(n) {
		return n;
	},
	
	title:function(id, head){
		days.saved.push(id);	
		var div = document.getElementById(id);	
		var p = document.createElement("p");
		p.id = "heads"; 
		var text = document.createTextNode(head);
		p.appendChild(text); 
		div.appendChild(p);
	
		
	}
	
};
