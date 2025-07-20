<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "bsdsghpsfjuwwm24cxeo-mysql.services.clever-cloud.com";
$username = "usj85unhcp8r8uqi";
$password = "Kf3AxEqyt2bsNQQvl0Mi";
$dbname = "bsdsghpsfjuwwm24cxeo";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    file_put_contents('./postdata.txt', $data["name"]);
    $name = $data["name"];
    $password = $data['password'];
    $user_already_exists = false;
    $sql = "SELECT NAME FROM people";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        if($row["NAME"]==$name)
        {
          $user_already_exists = true;
          
        }
      }
    }
    if(!$user_already_exists)
    {
      $sql = "INSERT INTO people (NAME,PASSWORD) VALUES ('{$name}','{$password}')";
      $result = $conn->query($sql);
      echo json_encode(["Succes"]);
      
    }
    else 
    {
      echo json_encode(["User exists"]);
    }
    $conn->close();
}






?>