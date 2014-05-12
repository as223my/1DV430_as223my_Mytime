<?php

//Om formuläret med inloggningsuppgifter skickas.
if (isset($_POST['login'])){
	
	session_start(); 

	$username = $_POST['username'];
	$password = $_POST['password'];
	

	// Om fälten användarnamn samt lösenord inte är tomma, kommer vi connecta till databasen.
	if($username && $password){
	
		require_once("php/connectdb.php");
		
		//För att skydda mot skadlig sql-kod. 
		$saferUsername = $connect->real_escape_string($username);
		
		$query = mysqli_query($connect,"SELECT * FROM user WHERE Username = '$saferUsername'"); 
		$numberOfrows = mysqli_num_rows($query); 
		
		//Kollar om det finns en användare med det namnet. 
		if($numberOfrows != 0){
		
			//Sparar innehållet i Username och Password från databasen.
			while($row = mysqli_fetch_assoc($query)){
				$id = $row['UserID']; 
				$dbusername = $row['Username']; 
				$dbpassword = $row['Password'];
			}
			
		//Kollar så att användarnamn och lösenord matchar med databasen (dvs om användarnamnet finns att lösenordet är korrekt). Vid match loggas du in. 
		if($username == $dbusername && md5($password) == $dbpassword){
			
			$_SESSION['username'] = $username;
			$_SESSION['id'] = $id;
			
			header("Location:html/Januari.php");
			
		}else{
			if($username != $dbusername){
				
				$wrongName= "Fel användarnamn!";
				echo '<div id="echoLogin"><p>'.$wrongName.'</p></div>'; 
			}else{
				
			
			$WrongPassword = "Fel lösenord!";
			echo '<div id="echoLogin"><p>'.$WrongPassword.'</p></div>';
			}
		}
		
	}else{
		$NoMember = "Ingen användare finns med detta namn!";
		echo '<div id="echoLogin"><p>'.$NoMember.'</p></div>';
	}
	
}

else{
	$Wrong = "Var god, fyll i användarnamn samt lösenord!"; 
	echo '<div id="echoLogin"><p>'.$Wrong.'</p></div>';
}

}

?>

<!doctype html>
<html lang="sv">
    <head>
        <meta charset="utf-8" />
        <title>Login</title>
      	<link rel="stylesheet" href="css/style.css" media="screen and (min-width:481px)" />
    	<link rel="stylesheet" href="css/mobilestyle.css" media="screen and (max-width:480px)" />
		<meta name="viewport" content="width:device-width, initial-scale=1.0"  />
        <link href='https://fonts.googleapis.com/css?family=Tangerine:700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Montaga' rel='stylesheet' type='text/css'>
    </head>
    
    <body>
    
    	<div id="container">
    
	        <header>
	         
	            <h1 id ="LoginMyTime">MyTime!</h1>
	            
	        </header>
	        
	        
	        <a href="html/Registration.php" id="newUser">Ny användare? Klicka här.</a>
	     
	           	<form action = '' method="post">
		            <p class="login"><label for="namn">Användarnamn</label></p>
		            <input type="text" id="namn" name="username" />
		                    
		            <p class="login"><label for="lösen">Lösenord</label></p>
		            <input type="password" id="losen" name="password" />
		    
	            	<p><input type = "submit" class= "sub" name = "login" value="Logga in" /></p> 
            	
            	</form>
        		
    	</div> 
    	
    	
		<script src="javascript/login.js"></script>
    </body>
</html>