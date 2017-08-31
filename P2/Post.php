<?php
class Post
	{
		private $postTitle;
		private $postDate;
		private $postContent;
		private $postAuthor;

		
		function __construct($title, $author, $date, $post)
		{
			$this->postTitle = $title;
			$this->postAuthor = $author;
			$this->postDate = $date;
			$this->postContent = $post;
		}
		
		function getPostTitle()
		{
			return $this->postTitle;
		}
		
		function getPostDate()
		{
			return $this->postDate;
		}
		
		function getPostAuthor()
		{
			return $this->postAuthor;
		}
		
		function getPostContent()
		{
			return $this->postContent;
		}
		
		function setPost($title, $author, $post)
		{
			$this->postTitle = $title;
			$this->postAuthor = $author;
			$this->postContent = $post;
		}
	}
?>