<?php

require_once("connectdb.php");
session_start();

$content = $_POST['content'];
$titel = $_POST['titel']; 
$day = $_POST['day']; 
$month = $_POST['month'];
$id = $_SESSION['id']; 

$query = mysqli_query($connect,"INSERT INTO day VALUES ('','$id', '$titel', '$content', '$month', '$day')"); 

?>