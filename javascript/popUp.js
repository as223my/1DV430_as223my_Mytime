"use strict";

var popUp = {
	
	allDaysId : [],
	place : [], 

	
	show:function(month){
					
		var saved = document.querySelectorAll(".saved"); 		
		var popUpDiv = document.getElementById("popUp");
		saved.forEach(function(a){	 
			a.addEventListener("click", function(e){
				e.preventDefault();
				popUpDiv.style.visibility = "visible";
				var dayId = document.getElementById("dayId");
				dayId.innerHTML = month + " " + a.id;
				popUp.showContent(a.id, month);
				
			});	  	
		});
		
	
		var notsaved = document.querySelectorAll(".day"); 		
		notsaved.forEach(function(a){	 
			a.addEventListener("click", function(e){
				e.preventDefault();
				popUpDiv.style.visibility = "visible";
				var dayId = document.getElementById("dayId");
				dayId.innerHTML = month + " " + a.id;
				popUp.nothingSaved(a.id, month);
				
			});	  	
		});
		
	
		
	},
	
	deletecontent:function(){
   		var t = document.getElementById("t");
       	t.parentNode.removeChild(t);
       	
       	var titel = document.getElementById("titel");
       	titel.parentNode.removeChild(titel);
       	
       	var textarea = document.getElementById("textarea");
       	textarea.parentNode.removeChild(textarea);
       	
       	var spara = document.getElementById("spara");
       	spara.parentNode.removeChild(spara);	
	},
	
	
	deletecontent1:function(){
   		var t = document.getElementById("tsaved");
       	t.parentNode.removeChild(t);
       	
       	var titel = document.getElementById("titelContent");
       	titel.parentNode.removeChild(titel);
       	
       	var change = document.getElementById("change");
       	change.parentNode.removeChild(change);
       	
       	var remove = document.getElementById("remove");
       	remove.parentNode.removeChild(remove);		
	},
	

	nothingSaved:function(day, month){
		
		var p = document.createElement("p");
		p.setAttribute('class', 'login');
		p.innerHTML = "Titel";
		p.id = "t";
		
		var input = document.createElement("input");
		input.setAttribute('type', 'text');
		input.id = "titel";

		
		var p1 = document.createElement("p");
		var textarea = document.createElement("textarea");
		textarea.id = "textarea"; 
		
		p1.appendChild(textarea); 
		
		var button = document.createElement("button");
		button.id = "spara";
		button.setAttribute('class', 'sub');
		button.innerHTML = "Spara";
		
		var popUpc = document.getElementById("popUpContent");
		popUpc.appendChild(p);
		popUpc.appendChild(input);
		popUpc.appendChild(p1);
		popUpc.appendChild(button);
		
		var save = document.getElementById("spara");
 		save.onclick = function(){
 			
 			var titel = document.getElementById("titel");
 			var titelcontent = titel.value;
 			
 			var text = document.getElementById("textarea");
 			var content = text.value;

 			
 		$.ajax({
              type: 'post',                    
              url:'../php/day.php',            
              data:{"content" : content, "titel" : titelcontent, "day" : day, "month" : month},
              dataType:'text',                
              success:function()
              {
                alert("sparat"); 
                var popUpDiv = document.getElementById("popUp");
				popUpDiv.style.visibility = "hidden";
	            popUp.deletecontent(); 
	           	window.location.reload();

              },
              error: function() {
              	alert("ej sparat!");
      
          	}
          });
          
        };
        
        var close = document.getElementById("close");
		close.onclick = function(){
			var popUpDiv = document.getElementById("popUp");
			popUpDiv.style.visibility = "hidden";
            popUp.deletecontent();
			
		};	
	},
	
	showContent:function(day, month){
		 
          var allContent = $.ajax({
              type: 'post',                    
              url:'../php/content.php', 
              data:{"day" : day, "month" : month},
              dataType:'text',                          
              success:function(){
      
 				var responsetext = allContent.responseText;
                var text = JSON.parse(responsetext);
				for(var obj in text){
					
					var head = text[obj].Head;
					var content = text[obj].Content;
					
					popUp.renderContent(day, month, head, content);
					
				}
					
              },
              error: function() {
              	alert("error!");
      
          	}
          });
 		var close = document.getElementById("close");
		close.onclick = function(){
			var popUpDiv = document.getElementById("popUp");
			popUpDiv.style.visibility = "hidden";
            popUp.deletecontent1();
          };
                  
       
 	
		
	},
	
	renderContent:function(day, month, head, content){
		
		var popUpc = document.getElementById("popUpContent");
		var h3 = document.createElement("h3");
		h3.id = "titelContent";
		h3.innerHTML = head; 
					
		var p = document.createElement("p");
		p.id = "tsaved"; 
		p.innerHTML = content; 
					
		popUpc.appendChild(h3);
		popUpc.appendChild(p);
					
		var button = document.createElement("button");
		button.id = "change";
		button.setAttribute('class', 'sub');
		button.innerHTML = "Ändra";
					
		var button1 = document.createElement("button");
		button1.id = "remove";
		button1.setAttribute('class', 'sub');
		button1.innerHTML = "Ta bort";
					
		popUpc.appendChild(button);
		popUpc.appendChild(button1);
					
		var remove = document.getElementById("remove");
		remove.onclick = function(){
			var r=confirm("Vill du verkligen radera innehållet?");
			if (r==true){
					
				$.ajax({
	              	type: 'post',                    
	              	url:'../php/remove.php', 
	              	data:{"day" : day, "month" : month},
	              	dataType:'text',                          
	              	success:function(){
	              		alert("borttaget!");
	              		var popUpDiv = document.getElementById("popUp");
						popUpDiv.style.visibility = "hidden";
            			popUp.deletecontent1();
            			window.location.reload();
	      			},
              	error: function(){
              		alert("ej borttaget!");
      			}
          });
					
			}else{}
			
        };
        
        var change = document.getElementById("change");
		change.onclick = function(){
			var popUpDiv = document.getElementById("popUp");
            popUp.deletecontent1();
    		
    		var p = document.createElement("p");
			p.setAttribute('class', 'login');
			p.innerHTML = "Titel";
			p.id = "t";
		
			var input = document.createElement("input");
			input.setAttribute('type', 'text');
			input.id = "titel";
			input.value = head;

		
			var p1 = document.createElement("p");
			var textarea = document.createElement("textarea");
			textarea.id = "textarea"; 
			textarea.value = content;
		
			p1.appendChild(textarea); 
		
			var button = document.createElement("button");
			button.id = "spara";
			button.setAttribute('class', 'sub');
			button.innerHTML = "Spara Ändringar";
		
			var popUpc = document.getElementById("popUpContent");
			popUpc.appendChild(p);
			popUpc.appendChild(input);
			popUpc.appendChild(p1);
			popUpc.appendChild(button);
			
			var close = document.getElementById("close");
		close.onclick = function(){
			var popUpDiv = document.getElementById("popUp");
			popUpDiv.style.visibility = "hidden";
            popUp.deletecontent();
            popUp.deletecontent1();
            popUp.renderContent(day,month,head,content); 
            
          };
		
			var save = document.getElementById("spara");
 			save.onclick = function(){
 			
 			var titels = document.getElementById("titel");
 			var tis = titels.value;
 			
 			var texts = document.getElementById("textarea");
 			var contents = texts.value;
			
 			
 		$.ajax({
              type: 'post',                    
              url:'../php/change.php',            
              data:{"content" : contents, "titel" : tis, "day" : day, "month" : month},
              dataType:'text',                
              success:function()
              {
                alert("sparat ändringar"); 
                var popUpDiv = document.getElementById("popUp");
				popUpDiv.style.visibility = "hidden";
            	popUp.deletecontent();
            	window.location.reload();

              },
              error: function() {
              	alert("ej sparat ändringar!");
      
          	}
          });
    	    };	
            
		};
					
					
		
	}
	};
	
	
	

