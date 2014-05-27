"use strict";

var gallery = {
	

	
	allImages:function(){

	var updateImage = document.getElementById("updateImage");
	
	updateImage.onclick = function(){
		
		location.reload();
	}; 
	
	}
	

};

window.onload = gallery.allImages;