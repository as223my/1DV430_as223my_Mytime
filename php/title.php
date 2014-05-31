<?php

require_once("connectdb.php");
session_start();

$id = $_SESSION['id'];

$query = mysqli_query($connect,"SELECT * FROM day WHERE UserID = '$id'"); 
$numberOfrows = mysqli_num_rows($query); 

if($numberOfrows != 0){
	
	$rows = array();
    while($row = $query->fetch_assoc()){
        $rows[] = $row;
    }
	
	$json=json_encode($rows);

	echo $json;		
		
}else{
	echo $id;
}

?>