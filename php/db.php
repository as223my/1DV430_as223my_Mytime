<?php	

try{
	//connecta local database med username root & password (finns inget).
	$connect = new PDO('mysql:host=127.0.0.1;dbname=mytime','root','');
	//$connect = new PDO('mysql:host=mysql13.000webhost.com;dbname=a4209638_mytime','a4209638_mytime','pontiac76');
	$connect ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
}catch(PDOException $e){
	
	//Utskrift om vad som gick fel.
	echo $e->getMessage();
	
	//Kill page
	die('Sorry, database problem.');
}
?>