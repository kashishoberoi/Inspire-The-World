<?php
	
	extract($_POST);
	print_r($_POST);
	$conn=mysqli_connect("localhost","root","") or die(mysqli_error);
	mysqli_select_db($conn,"assgn1");
	if (!sstrcmp($pswd, $cpswd)) {
		$query="insert into users(uname,pswd) values('$uname','$pswd');";
		if(mysqli_query($conn,$query)){
			echo "Successful Registration";
		}
	}
	else{
		echo "Unsuccessful Registration";
	}
	
	
	
	
?>



