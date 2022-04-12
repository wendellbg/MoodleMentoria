var audioPod = document.getElementById('playerPodcast');
var playPod = document.getElementById('botao-play-podcast');
var pausePod = document.getElementById('botao-pause-podcast');


var playShowPod = function() {
	audioPod.play();
	playPod.style.display = "none";
	pausePod.style.display = "block";
};

// Pause audio & mostra link de play
var pauseShowPod = function() {
	audioPod.pause();
	playPod.style.display = "block";
	pausePod.style.display = "none";
};