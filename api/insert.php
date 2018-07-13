<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
// print_r(file_get_contents("php://input"));
$image_original_name = str_replace('C:\\fakepath\\', '', $data->cd_image);
echo $image_original_name;
$sql = "INSERT INTO contact_detail (cd_first_name, cd_last_name, cd_mobile_number, cd_email_id, cd_address, cd_city, cd_state,cd_zip_code, cd_image) 
        VALUES ('$data->cd_first_name',
        		'$data->cd_last_name',
        		'$data->cd_mobile_number',
        		'$data->cd_email_id',
        		'$data->cd_address',
        		'$data->cd_city',
        		'$data->cd_state',
        		'$data->cd_zip_code',
        		'$image_original_name')";
echo $sql;
if($data->cd_first_name){
	$qry = $conn->query($sql);
}
$conn->close();
?>
