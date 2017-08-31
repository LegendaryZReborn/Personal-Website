
<?php
	require_once('login.php');
	require_once('Post.php');
	
	$conn = new mysqli($hn, $un, $pw, $db);
	
	if($conn->connect_error)
		die($conn->connect_error);
	
	/*Create a query to get the 10 most recent posts*/
	$query =  "SELECT * FROM blogposts ORDER BY date DESC LIMIT 10";
	$result = $conn->query($query);
	
	if(!$result)
		die($conn->error);
	
	$rows = $result->num_rows;
	$retrievedPosts = [];
	for($i = 0; $i < $rows; ++$i)
	{
		$result->data_seek($i);
		$row = $result->fetch_array(MYSQLI_ASSOC);
		$title = $row['title'];
		$author = $row['author'];
		$date = $row['date'];
		$post = $row['post'];
		
		$nPost = new Post($title, $author, $date, $post);
		array_push($retrievedPosts, $nPost);
	}		
?>