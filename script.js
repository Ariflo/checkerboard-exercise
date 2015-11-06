	var body = document.getElementsByTagName("body") [0];
	 

	for(var i = 0; i<=99*400 ; i++){

		var square = document.createElement("div");
		body.appendChild(square); 

		randomColor = Math.floor(Math.random()*16777215).toString(16);

		square.style.background = "#" + randomColor;
		square.style.width = '11.1%';
		square.style.float = 'left';
		square.style.paddingBottom = '11.1%';
	}
		

	







 
