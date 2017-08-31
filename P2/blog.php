<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="style.css">
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
					<h2 style="margin:0px; margin-top: 50px; padding:0px">{$retrievedPosts[$j]->getPostTitle()}</h2>
					<i style="font-size:16px; margin-right:30px;">{$retrievedPosts[$j]->getPostDate()}</i>  
					<strong style="font-size:16px;" >{$retrievedPosts[$j]->getPostAuthor()}</strong> <br />
					
					<p> {$retrievedPosts[$j]->getPostContent()} </p> <hr>
_HTML;
				}
		?>
			
			
			<form method='post' action='insert_post.php'>
				Title:<br />
				<input type='text' name='title'><br>
				Author: <br />
				<input type='text' name='author'><br><br>
				Content: <br />
				<textarea type='text' name='content' rows='10' style="width:70%;"></textarea><br />
				<input type='submit' value='Submit'><br>
			</form>
			
			
			
			
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

</body>
</html>
