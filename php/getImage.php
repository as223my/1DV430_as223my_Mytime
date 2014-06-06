<?php
// Hämtar bild från db, och byter format till image/jpeg, detta för att få en bild och inte massa tecken. 
require_once("../php/connectdb.php");

$id = $_REQUEST['id']; 
$safeId  = $connect->real_escape_string($id);

$query = mysqli_query($connect,"SELECT * FROM picture WHERE PictureID = '$safeId'"); 
$query = mysqli_fetch_assoc($query); 

$query = $query['Picture']; 

header("Content-type: image/jpeg");

echo $query;


?>