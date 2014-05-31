<?php

require_once("../php/connectdb.php");

session_start();

$id = $_SESSION['id']; 

$query = mysqli_query($connect,"DELETE FROM picture WHERE UserID = '$id'"); 



?>