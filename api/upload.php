<?php

header("Access-Control-Allow-Origin: *");
 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo json_encode(array('status' => false));
  exit;
}
 
$path = 'uploads/';
echo "tests";
print_r($_FILES);
echo "string";
if (isset($_FILES['cd_image'])) {
  $originalName = $_FILES['cd_image']['name'];
  $ext = '.'.pathinfo($originalName, PATHINFO_EXTENSION);
  // $generatedName = md5($_FILES['cd_image']['tmp_name']).$ext;
  $generatedName = $originalName;

  $filePath = $path.$generatedName;
 echo $filePath;
  if (!is_writable($path)) {
    echo json_encode(array(
      'status' => false,
      'msg'    => 'Destination directory not writable.'
    ));
    exit;
  }
 
  if (move_uploaded_file($_FILES['cd_image']['tmp_name'], $filePath)) {
    echo json_encode(array(
      'status'        => true,
      'originalName'  => $originalName,
      'generatedName' => $generatedName
    ));
  }
}
else {
  echo json_encode(
    array('status' => false, 'msg' => 'No file uploaded.')
  );
  exit;
}
?>
