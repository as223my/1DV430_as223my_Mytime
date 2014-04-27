"use strict";

var popUp = {
	
	show:function(){
		
		var allDays = document.querySelectorAll("#daysDiv div");  
		var popUpDiv = document.getElementById("popUp");
		console.log(allDays);	
		allDays.forEach(function(a){	 
			a.addEventListener("click", function(e){
				e.preventDefault();
				popUpDiv.style.visibility = "visible";
				var dayId = document.getElementById("dayId");
				dayId.innerHTML = a.id;
				console.log(a.id);
			});	  	
		});
		
		var close = document.getElementById("close");
		close.onclick = function(){
 				
            popUpDiv.style.visibility = "hidden";
 		};
		
	}
	
	
	
};
