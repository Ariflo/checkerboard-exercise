	var body = document.getElementsByTagName("body") [0];

		for(var i = 0; i<=400 ; i++){

			var square = document.createElement("div");
			body.appendChild(square); 
			randomColor = Math.floor(Math.random()*16777215).toString(16);

			square.style.background = "#" + randomColor;
			square.style.width = '11.1%';
			square.style.float = 'left';
			square.style.paddingBottom = '11.1%';

		};
		 setTimeout(function () { location = ' ';}, 5000);

		 var audio = new Audio("K.C & THE SUNSHINE BAND - That's the way I like it (1974).mp3");
		audio.play();




	

	
	 



	







 
