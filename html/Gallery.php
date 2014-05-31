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
        <title>Gallery</title>
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
	        	<h1>Mina bilder</h1>
	        </header>
	        <form action = 'Gallery.php' method="post"><input type="submit" name="logout" id="Logout" class = "buttonRed" value="Logga ut"></form>
	        <a href="javascript:history.back()" id="goBack">Gå tillbaka</a>
	        
	      <form action = 'Gallery.php' method="post" enctype="multipart/form-data" ><p><input type = "file" name = "image" />
	      	<label for="textToPicture">Bildtext:</label><input type="text" id="textInput" name="textToPicture" maxlength="30"/></p>
	      	<p><input type="submit" name="addImage" class = "buttonGreen" value="Spara bild"></p>
	      </form>
			<input type="button" id="eraseAll" class = "buttonRed" value="Radera alla bilder">
<?php
	
if(isset($_POST['addImage'])){
	
require_once("../php/connectdb.php");
$file = $_FILES['image']['tmp_name'];

	if ($file === ""){
		echo "<p /> Välj en bild!"; 
	}else{
		
		$image = file_get_contents($_FILES['image']['tmp_name']);
		$imageSafe = $connect->real_escape_string($image);

		$name = $_FILES['image']['name'];
		$nameSafe = $connect->real_escape_string($name);
			
		$size = getimagesize($_FILES['image']['tmp_name']);
		$id = $_SESSION['id']; 
		$text = $_POST['textToPicture'];
		$textSafe = $connect->real_escape_string($text);
		
		if($size === FALSE){
			echo "<p />Det där är ingen bild!";
		}else{
			
			$query = mysqli_query($connect,"INSERT INTO picture VALUES ('', '$id','$textSafe', '$nameSafe','$imageSafe')");
			echo "bilden är sparad!"; 
		}	
	}
}

require_once("../php/connectdb.php");
$id = $_SESSION['id']; 
$picture = mysqli_query($connect,"SELECT * FROM picture WHERE UserID= '$id'"); 

$numberOfrows = mysqli_num_rows($picture); 
if($numberOfrows != 0){
	
$rows = array();
    while($row = $picture->fetch_assoc()) {
    	
        $rows[] = $row;
        $picId = $row['PictureID'];
        $textPicture = $row['Text'];
       echo "<p id = picture$picId><img src = ../php/getImage.php?id=$picId></p><p id = text$picId class = textPicture>$textPicture</p> <button onclick=gallery.erase($picId); class = erasePicButton>Radera</button>";
    }
    
}	
?>
    		
	
	<script src="../javascript/gallery.js"></script>
    </body>
</html>