<?php

require_once("connectdb.php");
session_start();

$day = $_POST['day'];
$month = $_POST['month']; 
$id = $_SESSION['id']; 


$query = mysqli_query($connect,"DELETE FROM day WHERE UserID = '$id' AND Month = '$month' AND Day = '$day'"); 

?>