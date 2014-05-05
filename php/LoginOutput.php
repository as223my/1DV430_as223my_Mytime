<?php 
	require_once("db.php");
		
	$query = $handler->query('SELECT * FROM user WHERE UserID = 1');
 	$results = $query->fetchAll(PDO::FETCH_ASSOC); 
	
	$json=json_encode($results);
		
	echo $json;		
?>