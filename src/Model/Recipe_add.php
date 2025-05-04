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
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "uur";

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST["name"];
    $process = $_POST['Process'];
    $time = $_POST['Time'];
    $ID = $_POST['ID'];
    $ingredients = json_decode($_POST['Ingredients'], true);

    
    $imageData = file_get_contents($_FILES["Image"]["tmp_name"]);

   
    $stmt = $conn->prepare("INSERT INTO recepty (NAME, IMAGE, TEXT, TIMER, ID_PERSON) 
                            VALUES (:name, :image, :text, :timer, :id)");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':image', $imageData, PDO::PARAM_LOB); // <- BLOB
    $stmt->bindParam(':text', $process);
    $stmt->bindParam(':timer', $time);
    $stmt->bindParam(':id', $ID);

    $stmt->execute();
    $lastID = $conn->lastInsertId();

    // Ingredience
    foreach ($ingredients as $ing) {
        $stmtIng = $conn->prepare("INSERT INTO ingredience (NAME, COUNT, UNIT, Recipe_id)
                                   VALUES (:name, :count, :unit, :recipe_id)");
        $stmtIng->bindParam(':name', $ing['nameR']);
        $stmtIng->bindParam(':count', $ing['quantity']);
        $stmtIng->bindParam(':unit', $ing['unit']);
        $stmtIng->bindParam(':recipe_id', $lastID);
        $stmtIng->execute();
    }

    echo json_encode(["success"]);
}





?>