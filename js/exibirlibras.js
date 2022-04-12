function exibirLibras(valor){
		if(!valor){ // significa que valor = 0

			var x = document.getElementsByClassName("video-libras");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.display = 'none';
			}

			var x = document.getElementsByClassName("video-externo");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].classList.remove("9u");
				x[i].classList.add("12u");
			}


			var x = document.getElementsByClassName("video-cancelar");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.display = 'none';
			}

			var x = document.getElementsByClassName("video-exibir");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.display = 'initial';
			}

		}else{ // ou não é 0

			var x = document.getElementsByClassName("video-libras");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.display = 'block';
			}

			var x = document.getElementsByClassName("video-externo");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].classList.remove("12u");
				x[i].classList.add("9u");
			}

			var x = document.getElementsByClassName("video-cancelar");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.display = 'initial';
			}

			var x = document.getElementsByClassName("video-exibir");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.display = 'none';
			}
		}
	}