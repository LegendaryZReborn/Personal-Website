<?php
    require_once("login.php");
    
    $conn = new mysqli($hn, $un, $pw, $db);

    if($conn->connect_error)
        die($conn->connect_error);
    
    $post_id=$conn->real_escape_string($_POST["id"]);
        
    $query = "DELETE FROM blogposts WHERE id='$post_id'";
    $result = $conn->query($query);

    if(!result)
        die($conn->error);

    $conn->close();
    header("Location: blog.php");
?>