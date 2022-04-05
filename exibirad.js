function exibirAD(){
	var audioPod = document.getElementById('playerAudioAD1');
	if (audioPod.paused == false) {
		audioPod.pause();
		document.getElementById('playerAudioAD1').style.display='none';
	}else{
		audioPod.play();
		document.getElementById('playerAudioAD1').style.display='block';
	}
}
