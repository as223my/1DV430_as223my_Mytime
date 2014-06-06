<?php
if (isset($_POST['reg'])){
	

	$username = strip_tags($_POST['username']);
	$password = strip_tags($_POST['password']);
	$password1 = strip_tags($_POST['password1']);
	$date = date("Y-m-d"); 
	

	if($username && $password && $password1){
		
		require_once("../php/connectdb.php");
		
		$saferUsername = $connect->real_escape_string($username);
		
		$checkUserName = mysqli_query($connect,"SELECT * FROM user WHERE Username = '$saferUsername'"); 
		$numberOfrows = mysqli_num_rows($checkUserName); 
		
		if($numberOfrows != 0){
			$userNameTaken = "Användarnamnet är tyvärr taget, välj ett annat!";
			echo '<div id="echoReg"><p>'.$userNameTaken.'</p></div>';
		}else{
		
			if($password != $password1){
				$samePassword = "Lösenorden måste vara likadana";
				echo '<div id="echoReg"><p>'.$samePassword.'</p></div>';
				
			}else{
				$password = md5($password);
				$password1 = md5($password1);
				
				$query = mysqli_query($connect,"INSERT INTO user VALUES ('', '$saferUsername', '$password','$date')"); 
				
				$regDone = "Du är registrerad ";
		
				echo '<div id="echoReg"><p>'.$regDone .'<a href="../index.php">Logga in!</a></p></div>';
			
			}
		}
		
	}else{
				
		$allFields = "Alla fält måste vara ifyllda!";
		echo '<div id="echoReg"><p>'.$allFields.'</p></div>';
	}	
}

?>

<!doctype html>
<html lang="sv">
    <head>
        <meta charset="utf-8" />
        
        <title>Registrering</title>
        
      	<link rel="stylesheet" href="../css/style.css" media="screen and (min-width:481px)" />
    	<link rel="stylesheet" href="../css/mobilestyle.css" media="screen and (max-width:480px)" />
		<meta name="viewport" content="width:device-width, initial-scale=1.0"  />
       	<link href='https://fonts.googleapis.com/css?family=Tangerine:700' rel='stylesheet' type='text/css'>
       	<link href='https://fonts.googleapis.com/css?family=Montaga' rel='stylesheet' type='text/css'>
    </head>
    
    <body>
    
    	<div id="container">
    		
	        <header>
				<h1 id ="Welcome">Välkommen till MyTime!</h1>
	       	</header>
	       	
	       		<form action = 'Registration.php' method="post">
		            <p class="login"><label for="namn">Välj användarnamn</label></p>
		            <input type="text" id="namn" name="username" maxlength="30"/>
		                    
		            <p class="login"><label for="losen">Välj lösenord</label></p>
		            <input type="password" id="losen" name="password" maxlength="30" />
		            
		            <p class="login"><label for="losen1">Upprepa valt lösenord</label></p>
		            <input type="password" id="losen1" name="password1" maxlength="30"/>
		    
	            	<p><input type = "submit" class= "buttonGreen" id="regbutton" name = "reg" value="Registrera" /></p> 
	            	<a href="../index.php" id="goBack">Gå tillbaka</a>
            	
            	</form>   
    	</div> 
    	
    <script src="../javascript/registration.js"></script>	  
    </body>
    
</html>