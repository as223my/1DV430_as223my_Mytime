<?php	

try{
	//connecta local database med username root & password (finns inget).
	$handler = new PDO('mysql:host=127.0.0.1;dbname=mytime','root','');
	$handler ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
}catch(PDOException $e){
	
	//Utskrift om vad som gick fel.
	echo $e->getMessage();
	
	//Kill page
	die('Sorry, database problem.');
}
?>