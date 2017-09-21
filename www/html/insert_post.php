<?php
	
	if($_POST["title"] != '' && $_POST["author"] != '' && $_POST["content"] != '')
	{	
		require_once('login.php');
		
		/*Connect to the database and handle any connection errors*/
		$conn = new mysqli($hn, $un, $pw, $db);
		
		if($conn->connect_error)
			die($conn->connect_error);
		
		/*Fetch data submitted by form here and assign to postTitle, postAuthor and postContent*/
		$postTitle = $conn->real_escape_string($_POST["title"]);
		$postContent = $conn->real_escape_string($_POST["content"]);
		$postAuthor = $conn->real_escape_string($_POST["author"]);
		
		
		/*Insert the data submitted from the form into the database*/
		$query = "INSERT INTO blogposts(title, author, date, post) VALUES('$postTitle', '$postAuthor', NOW(), '$postContent')";
		$result = $conn->query($query);
		echo "Inserted";
			
		if(!$result)
			die($conn->error);
		
		/*close connection with mysql*/
		$conn->close();
		
		header("Location: blog.php");
	}
			
?>