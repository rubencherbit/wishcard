<?php
if($_POST['mdp'] != "coucou123")
	header('Location: index.php');
if(isset($_POST['text']))
{
	$coucou = fopen('text.txt', 'w');
	fwrite($coucou, $_POST['text']);
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Edit</title>
</head>
<body>
	<form action="edit.php" method="post">
		<textarea name="text" cols="60" rows="30"><?php echo file_get_contents('text.txt');?></textarea>
		<input type="submit" value="Modifier"/>
	</form>
</body>
</html>