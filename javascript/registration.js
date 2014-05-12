"use strict";

var checkReg = {


	init:function(){
		
		var name = document.getElementById("namn");
		var pass = document.getElementById("losen");
		var pass1 = document.getElementById("losen1");
		
		name.onfocus = function(){
			var echoReg = document.getElementById("echoReg");
			echoReg.innerHTML ="";
		};

		pass.onfocus = function(){
	
			var echoReg = document.getElementById("echoReg");
			echoReg.innerHTML ="";
		};
		
		pass1.onfocus = function(){
	
			var echoReg = document.getElementById("echoReg");
			echoReg.innerHTML ="";
		};
	}	
};

window.onload = checkReg.init;