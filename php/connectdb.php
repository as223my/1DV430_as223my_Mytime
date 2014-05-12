<?php
//$connect = new mysqli('mysql13.000webhost.com','a4209638_mytime','mytime76','a4209638_mytime');
$connect = new mysqli('127.0.0.1','root','','mytime');

//Om det inte går att ansluta till databsen, så skrivs ett felmeddelande ut och scriptet avslutas. 
if($connect->connect_errno) {
		
	echo $connect->connect_error;
	die('Problem with database'); 
}

?>