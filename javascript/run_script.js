"use strict";

 var day = {
 	
 	init:function(e){
 		e.preventDefault(); 
 		
 		var dag = document.getElementsByClassName("dag");
 		console.log(dag);
 		
 		var modal = document.getElementById("modal");
 		 for (var i = 0; i < dag.length; i += 1){
 		 	
 		 	dag[i].onclick = function(){
 		 		
           		modal.style.visibility = "visible";
 		 	};
                            
                    
         }
                        
 			var closeModal = document.getElementById("close");
 			closeModal.onclick = function(){
 				
            	modal.style.visibility = "hidden";
 				
 			};
 			
 	
 		
 		
 	},
 	
};

window.onload = day.init;