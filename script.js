	var body = document.getElementsByTagName("body") [0];
	var abcArr = ["abcdefghijklmnopqrstuvwxyz"]; 
	var  numArr = ["0123456789"];

	for(var i = 0; i<=99*400 ; i++){

		var blksquare = document.createElement("div");
		body.appendChild(blksquare); 

		randomColor = Math.floor(Math.random()*16777215).toString(16);
	   	
	   	

		blksquare.style.background = "#" + randomColor;
		blksquare.style.width = '11.1%';
		blksquare.style.float = 'left';
		blksquare.style.paddingBottom = '11.1%';
		

		var redsquare = document.createElement("div");

		
		redsquare.style.background = "#" + randomColor;
		redsquare.style.width = '11.1%';
		redsquare.style.float = 'left';
		redsquare.style.paddingBottom = '11.1%';
	}

	







 
