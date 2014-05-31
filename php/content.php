<?php

require_once("connectdb.php");
session_start();

$id = $_SESSION['id']; 
$day = $_POST['day'];
$month = $_POST['month'];


$query = mysqli_query($connect,"SELECT * FROM day WHERE UserID = '$id' AND Month = '$month' AND Day = '$day'"); 
$numberOfrows = mysqli_num_rows($query); 

if($numberOfrows != 0){
	
$rows = array();
    while($row = $query->fetch_assoc()){
        $rows[] = $row;
    }
	
	$json=json_encode($rows);

	echo $json;		
}
?>