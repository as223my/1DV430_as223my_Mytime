<?php
// Tar bort bild från db.
require_once("../php/connectdb.php");

session_start();

$id = $_SESSION['id']; 
$picture = $_POST['picId'];

$query = mysqli_query($connect,"DELETE FROM picture WHERE UserID = '$id' AND PictureID = '$picture'"); 



?>