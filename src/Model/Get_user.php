<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "uur";
$conn = new mysqli($servername, $username, $password, $dbname);

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);
    file_put_contents('./postdata.txt', $data["name"]);
    $name = $data["name"];
    $password = $data['password'];

$Data_response = array();



$sql = "SELECT ID, NAME, PASSWORD FROM PEOPLE WHERE NAME = '{$name}' AND PASSWORD = '{$password}'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();

  echo json_encode([$row["ID"], $row["NAME"]]);
}
else {
  echo json_encode(["error"]);
}
$conn->close();



}
else {
    echo json_encode(["error"]);
}

?>