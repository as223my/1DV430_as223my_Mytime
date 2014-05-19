"use strict";

var checkLogin = {


	init:function(){
		
		var name = document.getElementById("namn");
		var pass = document.getElementById("losen");
		
		name.onfocus = function(){
			var echoLogin = document.getElementById("echoLogin");
			echoLogin.innerHTML ="";
		};

		pass.onfocus = function(){
	
			var echoLogin = document.querySelectorAll(".echoLogin");
			echoLogin.innerHTML = "";
		};
		
		

		/* loginbutton.onclick = function(){

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
		};	*/
	}	
};
window.onload = checkLogin.init;