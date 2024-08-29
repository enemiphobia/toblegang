window.player = document.getElementById('player');
var playpause = document.getElementById('playpause');
var songtitle = document.getElementById('songtitle');
changesongtitle();
player.volume = 0.025; // suuuuper low
player.play(); // autoplay

playpause.onclick = function () {
    
    if (player.paused) {
		changesongtitle();
        player.play();
        playpause.innerHTML = 'pause';
    } else {
        player.pause();
        playpause.innerHTML = 'play';
        changesongtitle();
    }
}



function changesongtitle() {

	var songtitle = document.getElementById('songtitle');
    
	if(player.src = "sounds/ANOTHER HIM.mp3")
    {
        songtitle.innerHTML = "Song: ANOTHER HIM - Toby Fox";
    }

}