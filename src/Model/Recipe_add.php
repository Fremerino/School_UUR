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

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    file_put_contents('./postdata.txt', $data["name"]);
    $name = $data["name"];
    $process = $data['Process'];
    $image = $data['Image'];
    $time = $data['Time'];
    $ingredients = $data['Ingredients'];
    $ID = $data['ID'];

    $sql = "INSERT INTO recepty (NAME,IMAGE,TEXT,TIMER,ID_PERSON) VALUES ('{$name}','{$image}','{$process}','{$time}','{$ID}')";
    $conn->exec($sql);

    $ID = $conn->lastInsertId();

    for ($i=0; $i < count($ingredients); $i++) {
        $sql3 = "INSERT INTO ingredience (NAME, COUNT, UNIT, Recipe_id) VALUES ('{$ingredients[$i]['nameR']}', '{$ingredients[$i]['quantity']}', '{$ingredients[$i]['unit']}', '{$ID}')";
        $conn->exec($sql3);
    }
    
    echo json_encode(["success"]);
}






?>