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
        <title>Maj</title>
      	<link rel="stylesheet" href="../css/style.css" media="screen and (min-width:481px)" />
    	<link rel="stylesheet" href="../css/mobilestyle.css" media="screen and (max-width:480px)" />
		<meta name="viewport" content="width:device-width, initial-scale=1.0"  />
       	<link href='https://fonts.googleapis.com/css?family=Tangerine:700' rel='stylesheet' type='text/css'>
       	<link href='https://fonts.googleapis.com/css?family=Montaga' rel='stylesheet' type='text/css'>
       	       	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    </head>
    
    <body>
    
    	<div id="container">
    		
	        <header>
	       		<h1>Maj - 2014</h1>
	       	</header>
	       	<form action = 'Maj.php' method="post"><input type="submit" name="logout" id="Logout" class = "buttonRed" value="Logga ut"></form>
	       	<a href="Gallery.php" id="galleryA"> <button id = "gallerybutton" class ="buttonToGallery">Bilder</button></a>
	       	
	        <a href="Juni.php" class="right">></a>
	        <a href="April.php" class="left">&lt</a>
	        
		   	<nav id ="menu">
		        <ul>
			  		<li class ="choiceMonth"><a href="#">Månad</a>
			  		 	<ul>
				            <li><a href="Januari.php">Januari</a></li>
				            <li><a href="Februari.php">Februari</a></li>
				          	<li><a href="Mars.php">Mars</a></li>
				          	<li><a href="April.php">April</a></li>
				          	<li><a href="Maj.php">Maj</a></li>
				          	<li><a href="Juni.php">Juni</a></li>
				          	<li><a href="Juli.php">Juli</a></li>
				          	<li><a href="Augusti.php">Augusti</a></li>
				          	<li><a href="September.php">September</a></li>
				          	<li><a href="Oktober.php">Oktober</a></li>
				          	<li><a href="November.php">November</a></li>
				          	<li><a href="December.php">December</a></li>
			             </ul>
			        </li>	      		
		      	</ul>
		  	</nav>
	            
	        <div id="daysDiv"></div>
        
    	</div> 

  <div id="popUp">
    		<div id ="popUpContent">
    			<button type="button" id="close">X</button>
    			<h2 id ="dayId"></h2>
   			</div>
   		</div>
   		<script src="../javascript/popUp.js"></script>
   		<script src="../javascript/days.js"></script>
    	<script src="../javascript/script.js"></script>
       
    </body>
</html>