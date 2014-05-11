<?php
	
session_start();

if($_SESSION['username']){
}else{
	header('Location: ../index.php');
}


if(isset($_POST['logout'])){
	session_destroy();
	header('Location: ../index.php');
}

?>

<!doctype html>
<html lang="sv">
    <head>
        <meta charset="utf-8" />
        <title>November</title>
      	<link rel="stylesheet" href="../css/style.css" media="screen and (min-width:481px)" />
    	<link rel="stylesheet" href="../css/mobilestyle.css" media="screen and (max-width:480px)" />
		<meta name="viewport" content="width:device-width, initial-scale=1.0"  />
       	<link href='https://fonts.googleapis.com/css?family=Tangerine:700' rel='stylesheet' type='text/css'>
       	<link href='https://fonts.googleapis.com/css?family=Montaga' rel='stylesheet' type='text/css'>
    </head>
    
    <body>
    
    	<div id="container">
    		
	        <header>
	       		<h1>November - 2014</h1>
	       	</header>
	       	
	       	<form action = '' method="post"><input type="submit" name="logout" id="Logout" class = "sub" value="Logga ut"></form>
	       	
	        <a href="December.php" class="right">></a>
	        <a href="Oktober.php" class="left">&lt</a>
	        
		   	<nav id ="menu">
		        <ul>
			  		<li class ="choiceMonth"><a href="#">Månad</a>
			  		 	<ul>
				    	    <li><a href="Januari.html">Januari</a></li>
				            <li><a href="Februari.html">Februari</a></li>
				          	<li><a href="Mars.html">Mars</a></li>
				          	<li><a href="April.html">April</a></li>
				          	<li><a href="Maj.html">Maj</a></li>
				          	<li><a href="Juni.html">Juni</a></li>
				          	<li><a href="Juli.html">Juli</a></li>
				          	<li><a href="Augusti.html">Augusti</a></li>
				          	<li><a href="September.html">September</a></li>
				          	<li><a href="Oktober.html">Oktober</a></li>
				          	<li><a href="November.html">November</a></li>
				          	<li><a href="December.html">December</a></li>
			             </ul>
			        </li>	      		
		      	</ul>
		  	</nav>
	            
	        <div id="daysDiv"></div>
        
    	</div> 

    	<div id="popUp">
    		<div id ="popUpContent">
    			<button type="button" id="close">X</button>
    		    <p class="login"><label for="titel">Titel</label></p>
	            <input type="text" id="titel" name="Title" />
	          	<p><textarea id ="textarea"></textarea></p>
    			<button type="button" id="spara" class="sub">Spara</button>
    			<p id ="dayId"></p>
   			</div>
   		</div>
   		<script src="../javascript/popUp.js"></script>
   		<script src="../javascript/days.js"></script>
    	<script src="../javascript/script.js"></script>
       
    </body>
</html>