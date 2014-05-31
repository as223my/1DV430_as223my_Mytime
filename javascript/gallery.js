"use strict";

var gallery = {
	
	eraseAll:function(){
		
		var removeAll = document.getElementById("eraseAll");
		removeAll.onclick = function(){
			
		var r=confirm("Vill du verkligen radera alla bilder?");
		if (r==true){
			$.ajax({
		      	type: 'post',                    
		        url:'../php/removeAllImage.php',                       
		        success:function(){
		     
		     	window.location.reload();
	            	
		      	},
	     		error:function(){
	              	alert("Kunde inte ta bort alla bilder!");
	      		}
	 		});
	     	
		}
			
			
		}; 
		
	},
	
	erase:function(id){
	var r=confirm("Vill du verkligen radera bilden?");
		if (r==true){
			$.ajax({
		      	type: 'post',                    
		        url:'../php/removeImage.php', 
		        data:{"picId" : id},
		     	dataType:'text',                          
		        success:function(){
		     
		     	window.location.reload();
	            	
		      	},
	     		error:function(){
	              	alert("Kunde inte ta bort bilden!");
	      		}
	 		});
	     	
		}
	
	}

};

window.onload = gallery.eraseAll;

