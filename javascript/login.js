"use strict";

var checkLogin = {
	
	checkName : 0,
	checkPassword : 0,
	
	init:function(){
		
		var loginbutton = document.getElementById("l");
		var name = document.getElementById("namn");
		var pass = document.getElementById("losen");
		
		name.onblur = function(){
			if (name.value === "Annie"){
				checkLogin.checkName = 1;
			}else{
				checkLogin.checkName = 0;
			}
		};
		
		pass.onblur = function(){
			if (pass.value === "Annie"){
				checkLogin.checkPassword = 1;
			}else{
				checkLogin.checkPassword = 0;
			}
			
		};
			
		loginbutton.onclick = function(){
		
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "php/LoginOutput.php", true);
			xhr.setRequestHeader("Content-type", "application/json");
			
			xhr.onreadystatechange = function(){
				
				if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                        
                        var responsetext = xhr.responseText;
                        var text = JSON.parse(responsetext);
                        
                        for(var obj in text){
						console.log(text[obj].Username);
						console.log(text[obj].Password);
						var username = text[obj].Username;
						var password = text[obj].Password;
						}
						
						if(username === "Annie" && password === "Annie" && checkLogin.checkName === 1 && checkLogin.checkPassword === 1){
							alert("Januari");
							window.location = "html/Januari.html";
						}else{
							alert("Fel inloggningsuppgifter");
						}
						               
                    }
				}else{
                        
                        console.log("Läsfel, status: " + xhr.status);
                    }
			};
			
			xhr.send(null);
		};	
	}	
};
window.onload = checkLogin.init;