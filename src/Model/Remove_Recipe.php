<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

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

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!isset($data["Recipe_id"], $data["User_id"])) {
            throw new Exception("not enough info");
        }

        $Recipe_id = $data["Recipe_id"];
        $User_id = $data['User_id'];

        // dostat recepty
        $stmt = $conn->prepare("SELECT ID_PERSON FROM recepty WHERE ID = :id");
        $stmt->execute(["id" => $Recipe_id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row && $row["ID_PERSON"] == $User_id) {
            $conn->beginTransaction();

            $stmt = $conn->prepare("DELETE FROM recepty WHERE ID = :id");
            $stmt->execute(["id" => $Recipe_id]);

            $conn->commit();
            echo json_encode(["Success"]);
        } else {
            echo json_encode(["Error - not the owner"]);
        }
    }
    $conn = null;
?>