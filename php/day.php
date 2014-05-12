<?php

$content = $_POST['content'];
$id = $_SESSION['id']; 
require_once("connectdb.php");

$query = mysqli_query($connect,"INSERT INTO day VALUES ('','7', 'HEJ', '$content', 'Januari9')"); 

?>