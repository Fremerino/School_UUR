<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
$servername = "bsdsghpsfjuwwm24cxeo-mysql.services.clever-cloud.com";
$username = "usj85unhcp8r8uqi";
$password = "Kf3AxEqyt2bsNQQvl0Mi";
$dbname = "bsdsghpsfjuwwm24cxeo";

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $Recipe_id = $data["Recipe_Id"];
    $Public = (int) $data["State"];
    if($Public==0)
    {
    $sql = " UPDATE recepty SET Public=1  WHERE ID = '{$data['Recipe_Id']}'";
    $result = $conn->query($sql);
    echo json_encode(1);
    }
    else {
    $sql = " UPDATE recepty SET Public=0  WHERE ID = '{$data['Recipe_Id']}'";
    $result = $conn->query($sql); 
    echo json_encode(0);
    }
}

$conn = null;




?>