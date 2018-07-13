<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE contact_detail 		
		SET cd_first_name ='$data->cd_first_name',
			cd_last_name ='$data->cd_last_name',
			cd_mobile_number ='$data->cd_mobile_number', 
			cd_email_id ='$data->cd_email_id', 
			cd_address ='$data->cd_address', 
			cd_city ='$data->cd_city', 
			cd_state ='$data->cd_state',
			cd_zip_code ='$data->cd_zip_code' 
		WHERE cd_id = $data->cd_id ";

echo $sql;
$qry = $conn->query($sql);
if($data->id){
}
$conn->close();
?>
