<?php  
$coucou = file_get_contents('text.txt');
?>
<!DOCTYPE html>
<html>
<head>
	<title>Carte de voeux</title>
	<link rel="stylesheet" type="text/css" href="styles/main.css">
	<script type="text/javascript" src="script/main.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
	<script src="script/snow.js"></script>
</head>
<body>
	<p id="hidden"><?php echo $coucou;?></p>
	<div>
		<p id="randompp"></p>
	</div>
	<div id="click">
		<p>Clique ici ! Si tu veux voir le message !</p>
	</div>
</body>
</html>