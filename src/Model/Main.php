<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "uur";

$Data_response = array();
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT ID, NAME, Image, TEXT, TIMER, ID_PERSON FROM recepty";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    if ($row['Image']) {
      $row['Image'] = base64_encode($row['Image']);
    }
    array_push($Data_response, $row);
  }
} else {
  echo "0 results";
}
$conn->close();


echo json_encode($Data_response );







?>
