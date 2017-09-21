<?php

	/*Checks the username and password submitted by the form
	with a username and password in the database. Log in admin_login
	and return to blog.php if in database.*/
	
	session_start();

	$username = $_POST["username"];
	$password = $_POST["password"];
	
	if(isset($username) && isset($password))
	{
		require_once('login.php');
		
		$conn =  new mysqli($hn, $un, $pw, $db);
		
		if($conn->connect_error)
		{
			echo "Error. Cannot Connect to the Database. <br>"; 
			die($conn->connect_error);
		}
	
		//query db for username and password
		$query = "SELECT username, password FROM admins WHERE username='$username' AND password='$password'";
		$result = $conn->query($query);
		
		if(!$result)
			die($conn->error);
		
		$rows = $result->num_rows;
		
		if($rows !=0)
		{
			$result->data_seek(0);
			$row = $result->fetch_array(MYSQLI_ASSOC);
			
			if($username == $row["username"] && $password == $row["password"])
			{
				$_SESSION["admin_login"] = $username;
				$_SESSION["last_time"] = time();
				header("Location: blog.php");
			}	
		}

		$conn->close();
	}
	
	echo <<<_END
		<script>
			alert("The username or password that was entered is invalid."); 
			console.log("The username or password that was entered is invalid.");
		</script>
_END;

	//header("Location: admin_logpage.html");

?>