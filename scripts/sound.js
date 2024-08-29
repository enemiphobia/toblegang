window.player = document.getElementById('player');
var playpause = document.getElementById('playpause');
var songtitle = document.getElementById('songtitle');

player.volume = 0.025; // suuuuper low
player.play(); // autoplay



// all the songs in sounds
let sources = [
    "sounds/ANOTHER HIM.mp3",
    "sounds/charles pancakes and broccoli.mp3",
    "sounds/the%20heart%20pt%201.mp3"
];
var whichSong = 0;
let prefix = "http://127.0.0.1:5500/";

changesongtitle();

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

previoussong.onclick = function () {
    if (whichSong < 1) {
        whichSong = sources.length-1;
    } else {
        whichSong--;
    }
    
    player.src = prefix + sources[whichSong];
    player.load();

    changesongtitle();
    console.log("previous song: " + whichSong + ", " + player.src + ", " + prefix + sources[whichSong]);
}

nextsong.onclick = function () {
    if (whichSong > sources.length-2) {
        whichSong = 0;
    } else {
        whichSong++;
    }
    player.src = sources[whichSong];
    changesongtitle();
    console.log("next song: " + whichSong + ", " + player.src + ", " + prefix + sources[whichSong]);
}



function changesongtitle() {
	var songtitle = document.getElementById('songtitle');

    if(player.src = sources[0]) {
        songtitle.innerHTML = "Song: ANOTHER HIM - Toby Fox";        
    } else if (player.src = sources[1]) {
        songtitle.innerHTML = "Song: Charles, Pancakes, and Broccoli - Bee and Puppycat OST";
    } else if (player.src = sources[2]) {
        songtitle.innerHTML = "Song: The Heart Pt. 1 - Kendrick Lamar";
    }
}
