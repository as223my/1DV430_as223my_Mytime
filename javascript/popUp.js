"use strict";

var popUp = {
	
	// Sätter klick funktion på alla dagar. 
	show:function(month){
					
		var saved = document.querySelectorAll(".saved, .day"); 		
		var popUpDiv = document.getElementById("popUp");
		saved.forEach(function(a){	 
			a.addEventListener("click", function (e) {
				e.preventDefault();
				popUpDiv.style.visibility = "visible";
				popUp.check(a.id, month, a.className);	
			});	  	
		});
	},
	
	// Kollar om dagen är sparad eller inte sen innan, beroende av det så anropas olika funktioner. 
	check:function(id, month, classN){
		
		var dayId = document.getElementById("dayId");
		dayId.innerHTML = month + " " +  id;
		
		if(classN === "day"){
			popUp.nothingSaved(id,month);
		}
		if(classN === "saved"){
			popUp.showContent(id, month);
		}
	},
	
	deletecontent:function(){
   		var t = document.getElementById("t");
       	t.parentNode.removeChild(t);
       	
       	var titel = document.getElementById("titel");
       	titel.parentNode.removeChild(titel);
       	
       	var textarea = document.getElementById("textarea");
       	textarea.parentNode.removeChild(textarea);
       	
       	var saveContent = document.getElementById("spara");
       	saveContent.parentNode.removeChild(saveContent);
       	
       	var pmax = document.getElementById("pmax");
       	pmax.parentNode.removeChild(pmax);	
       	
       	var pmax1 = document.getElementById("pmax1");
       	pmax1.parentNode.removeChild(pmax1);
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
       	
       	var div = document.getElementById("savedDiv");
       	div.parentNode.removeChild(div);	
	},
	

	nothingSaved:function(day, month){
		
		var p = document.createElement("p");
		p.setAttribute('class', 'login');
		p.innerHTML = "Titel";
		p.id = "t";
		
		var input = document.createElement("input");
		input.setAttribute('type', 'text');
		input.setAttribute('maxlength', '30');
		input.id = "titel";
		
		var pmax = document.createElement("p");
		pmax.innerHTML = "Max 30 tecken";
		pmax.id = "pmax"; 

		
		var p1 = document.createElement("p");
		var textarea = document.createElement("textarea");
		textarea.id = "textarea"; 
		textarea.setAttribute('maxlength', '4000');
		
		var pmax1 = document.createElement("p");
		pmax1.innerHTML = "Max 4000 tecken";
		pmax1.id = "pmax1"; 
		
		p1.appendChild(textarea); 
		
		var button = document.createElement("button");
		button.id = "spara";
		button.setAttribute('class', 'buttonGreen');
		button.innerHTML = "Spara";
		
		var popUpc = document.getElementById("popUpContent");
		popUpc.appendChild(p);
		popUpc.appendChild(input);
		popUpc.appendChild(pmax);
		popUpc.appendChild(p1);
		popUpc.appendChild(pmax1);
		popUpc.appendChild(button);
		
		document.getElementById("titel").focus();
	
		var save = document.getElementById("spara");
 		save.onclick = function(){
 			
 			var titel = document.getElementById("titel");
 			var titelcontent = titel.value;
 			
 			if (titelcontent.trim() === ""){
 				
 				alert("Fyll i titel!");
 			}else{
 			
 				var text = document.getElementById("textarea");
 				var content = text.value;

 				$.ajax({
              		type: 'post',                    
              		url:'../php/day.php',            
              		data:{"content" : content, "titel" : titelcontent, "day" : day, "month" : month},
              		dataType:'text',                
              		success:function(){
              	
                		var popUpDiv = document.getElementById("popUp");
						popUpDiv.style.visibility = "hidden";
	            		popUp.deletecontent();
	            		days.title(day,titelcontent);
	            		popUp.check(day,month,this.className);
              		},
              
             	error: function(){
              		alert("Kunde ej spara innehållet i dagen!");
          		}	
         	});
  		}
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
         	error: function(){
              	alert("Kunde ej hämta sparat innehåll från databasen!");
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
		
		var div = document.createElement("div");
		div.id = "savedDiv"; 
					
		var p = document.createElement("p");
		p.id = "tsaved"; 
		p.innerHTML = content; 
					
		popUpc.appendChild(h3);
		popUpc.appendChild(div);
		
		var savedDiv = document.getElementById("savedDiv");
		
		savedDiv.appendChild(p);
					
		var button = document.createElement("button");
		button.id = "change";
		button.setAttribute('class', 'buttonGreen');
		button.innerHTML = "Ändra";
					
		var button1 = document.createElement("button");
		button1.id = "remove";
		button1.setAttribute('class', 'buttonRed');
		button1.innerHTML = "Ta bort";
					
		popUpc.appendChild(button);
		popUpc.appendChild(button1);
			
		var remove = document.getElementById("remove");
		remove.onclick = function(){
			var r=confirm("Vill du verkligen radera innehållet?");
			if(r==true){
					
				$.ajax({
	              	type: 'post',                    
	              	url:'../php/remove.php', 
	              	data:{"day" : day, "month" : month},
	              	dataType:'text',                          
	              	success:function(){
	              		var popUpDiv = document.getElementById("popUp");
						popUpDiv.style.visibility = "hidden";
            			popUp.deletecontent1();
            			document.getElementById(day).className = "day";
            			
            			var p = document.getElementById("head" + day);
						p.innerHTML = "";
            			popUp.check(day, month, this.className); 
            	
	      			},
              	error: function(){
              		alert("Innehållet kunde ej tas bort!");
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
			input.setAttribute('maxlength', '30');
			input.id = "titel";
			input.value = head;

			var pmax = document.createElement("p");
			pmax.innerHTML = "Max 30 tecken";
			pmax.id = "pmax";
		
			var p1 = document.createElement("p");
			var textarea = document.createElement("textarea");
			textarea.id = "textarea"; 
			textarea.value = content;
			textarea.setAttribute('maxlength', '4000');
			var pmax1 = document.createElement("p");
			pmax1.innerHTML = "Max 4000 tecken";
			pmax1.id = "pmax1"; 
		
			p1.appendChild(textarea); 
		
			var button = document.createElement("button");
			button.id = "spara";
			button.setAttribute('class', 'buttonGreen');
			button.innerHTML = "Spara Ändringar";
		
			var popUpc = document.getElementById("popUpContent");
			popUpc.appendChild(p);
			popUpc.appendChild(input);
			popUpc.appendChild(pmax);
			popUpc.appendChild(p1);
			popUpc.appendChild(pmax1);
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
	 			
	 			if(tis.trim() === ""){
	 				alert("Fyll i titel!"); 
	 			}else{
	 			
	 				var texts = document.getElementById("textarea");
	 				var contents = texts.value;
			
 					$.ajax({
		              	type: 'post',                    
		             	url:'../php/change.php',            
		              	data:{"content" : contents, "titel" : tis, "day" : day, "month" : month},
		              	dataType:'text',                
		              	success:function(){
            
			                var popUpDiv = document.getElementById("popUp");
							popUpDiv.style.visibility = "hidden";
			            	popUp.deletecontent();
			            	var p = document.getElementById("head" + day);
							p.innerHTML = "";
							days.title(day,tis);
			            	popUp.check(day, month, this.className);
              			},
              			error: function(){
              				alert("Kunde ej spara ändringarna!");
     					}
       				});
         		}
   			};	   
		};				
	}
};
	
	
	

