<?php

require_once("connectdb.php");
session_start();

$content = $_POST['content'];
$titel = $_POST['titel']; 
$day = $_POST['day']; 
$month = $_POST['month']; 
$id = $_SESSION['id']; 


$query = mysqli_query($connect,"UPDATE day SET Head = '$titel', Content = '$content' WHERE UserID = '$id' AND Month = '$month' AND Day = '$day'"); 

?>