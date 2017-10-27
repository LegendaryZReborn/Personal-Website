<?php

	session_start();
	$timeout = 10 * 60;
	if(isset($_SESSION["admin_login"]))
	{
		if(time() > $_SESSION["last_time"] + $timeout)
		{
			session_unset();
			session_destroy();

			header("Location: admin_logpage.html");
		}
	}
	else
	{
		header("Location: admin_logpage.html");
	}

?>

<!DOCTYPE html>
<html>
<head>		
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Cavaughn's Personal</title>	
</head>
<body>

	<div class="flex-container">

			<!-- Header Div -->
		<div class="flex-item1">
				<header>
					<div class="header-logo"><a href="index.html">Cavaughn Browne</a></div>
					<div class="personal-label"><a href="index.html">Personal Development</a></div>
				</header>	
			
				<nav class="main-nav">		
				<div class="nav-button"><a href="index.html">Home</a></div>
				<div class="nav-button"><a href="resume.html">Resume</a></div>
				<div class="nav-button"><a href="projects.html">Projects</a></div>			
				<div class="nav-button" ><a href="about.html">About</a></div>	
				<div class="nav-button" id="rightButton"><a href="blog.php">Blog</a></div>				
			</nav>

				
		</div>
		
		<!-- Main Body Div -->
			<div class="flex-main">
				<div class="main-blog">
				<?php
						require_once('get_posts.php');
						
						for($j = 0; $j < $rows; ++$j)
						{
							echo <<<_HTML
							<div class="b_post">
								<h2>{$retrievedPosts[$j]->getPostTitle()}</h2>
								<i>{$retrievedPosts[$j]->getPostDate()}</i>  
								<strong>{$retrievedPosts[$j]->getPostAuthor()}</strong> <br />
								
								<p> {$retrievedPosts[$j]->getPostContent()} </p> 

								<form class='delete_form' method='post' action='delete_posts.php'>
									<input type='hidden' name='id' value='{$retrievedPosts[$j]->getPostID()}'>
									<input type='submit' value='delete'>
								</form>
							</div>
_HTML;
						}
				?>	
					
				</div>
				
				<div class="side-section">
					<ul>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>				
					</ul>
				</div>

			</div>

			<!-- Footer Div -->
			<div class="flex-item2">
				<footer> <p>I am the code of my program. C++ is my body and binary is my blood. 
				I have coded over a thousand programs...</p> </footer>
			</div>  
	</div>

	<!-- <div id="modal">
		<div id="modal-content">
			<div class ="sign-in">			
				<form  method='post' action='insert_post.php'>
					Title:<br />
					<input type='text' name='title'><br>
					Author: <br />
					<input type='text' name='author'><br><br>
					Content: <br />
					<textarea type='text' name='content' rows='10' style="width:70%;"></textarea><br />
					<input type='submit' value='Submit'><br>
				</form>		
			</div>
		</div>
	</div> -->
					
					
</body>
</html>
