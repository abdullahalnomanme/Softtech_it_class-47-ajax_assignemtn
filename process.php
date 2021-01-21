<?php



$name = !empty($_POST['name']) ? $_POST['name'] : '';
$address = !empty($_POST['address']) ? $_POST['address'] : '';

echo "Name: ".$name;
echo "<br/>";

echo "Address: ".$address;

?>