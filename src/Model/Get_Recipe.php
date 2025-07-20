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
$Data_response = array();

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);
    file_put_contents('./postdata.txt', $data["id"]);
    $name = $data["id"];




$sql = "SELECT ID, NAME, TEXT,Image,TIMER, ID_PERSON FROM recepty WHERE ID = '{$data['id']}'";
$result = $conn->query($sql);

 

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $sql2 = "SELECT NAME, COUNT, UNIT FROM ingredience WHERE Recipe_id = '{$row['ID']}'";
  $ingredience = $conn->query($sql2);
  $ingredience_response = array();
  while ($ingredience_row = $ingredience->fetch_assoc()) {
    
    array_push($ingredience_response,$ingredience_row);
  }
  $row['Image'] = base64_encode($row['Image']);
  echo json_encode([$row["ID"], $row["NAME"], $row["Image"], $row["TEXT"], $row["TIMER"], $row["ID_PERSON"], $ingredience_response]);
}
else {
  echo json_encode(["error"]);
}
$conn->close();



}


?>