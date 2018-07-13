<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "DELETE FROM contact_detail WHERE cd_id = $data->cd_id ";
echo $sql;
$result = $conn->query($sql);
$conn->close();
?>
