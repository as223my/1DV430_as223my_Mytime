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
	}	
};

window.onload = checkLogin.init;