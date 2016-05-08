document.addEventListener("DOMContentLoaded", function(event) {
	var content = document.getElementById("hidden").textContent;
	document.body.removeChild(document.getElementById("hidden"));
	affichage();
	var i = 0;
	var img = ['images/tree.png','images/bell.png','images/candy.png','images/gift.png', 'images/star.png']
	document.addEventListener("click",function(e) {
		var h = window.innerHeight;
		var w = window.innerWidth;
		if(i == 0)
		{
			var audio = new Audio('snow.mp3');
			audio.play();
			$.fn.snow();
			var j = Math.floor((Math.random() * 4));
			var x = e.clientX - 50;
			var y = e.clientY - 50;
			document.body.style.transition = "2s";
			document.body.style.backgroundImage += "url("+img[j]+")";
			document.body.style.backgroundPosition = x+'px'+' '+y+'px';
			document.body.style.backgroundRepeat = "no-repeat";
			i = 1;
			setTimeout(function(){document.getElementById("click").style.display = "block";},5000);
		}
		else if(i == 2)
		{
			console.log("ss");
			var j = Math.floor((Math.random() * 4));
			var x = e.clientX - 50;
			var y = e.clientY - 50;
			document.body.style.backgroundImage += "url("+img[j]+")";
			document.body.style.backgroundPosition += x+'px'+' '+y+'px';
			i = 1;
		}
		else
		{
			var j = Math.floor((Math.random() * 4));
			var x = e.clientX - 50;
			var y = e.clientY - 50;
			document.body.style.backgroundImage += ",url("+img[j]+")";
			document.body.style.backgroundPosition += ','+x+'px'+' '+y+'px';
		}
	});
document.getElementById('click').addEventListener("click", function(e)
{
	i = 1;
	document.body.style.backgroundColor = "white";
	document.body.style.backgroundImage = "";
	document.body.style.backgroundPosition = "";
	document.getElementById('click').textContent = "";
	document.getElementById('randompp').textContent = "";
	document.body.style.fontSize = "4em";
	setTimeout(function(){document.body.style.backgroundImage = "";},1000);
	setTimeout(function(){document.body.style.backgroundColor = "#ff2f2f";},3000);
	setTimeout(function(){document.getElementById("randompp").textContent = content;},5000);
	setTimeout(function(){i = 2;}, 3000);
});
});
var str = "Joyeux noel, clique un peu partout afin d'avoir un peu de magie !";
var array = str.split("");
var loopTimer;
function affichage()
{
	if(array.length > 0) {
		document.getElementById("randompp").textContent += array.shift();
	} 
	else
	{
		clearTimeout(loopTimer); 
		return false;
	}
	loopTimer = setTimeout('affichage()',100);
}

