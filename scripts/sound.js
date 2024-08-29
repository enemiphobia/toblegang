window.player = document.getElementById('player');
let media = document.getElementById('media');
var playpause = document.getElementById('playpause');
var songtitle = document.getElementById('songtitle');

let prefix = "https://enemiphobia.github.io/toblegang/";
// all the songs in sounds; replace spaces with "%20"
let sources = [
    "sounds/ANOTHER%20HIM.mp3",
    "sounds/charles%20pancakes%20and%20broccoli.mp3",
    "sounds/the%20heart%20pt%201.mp3"
];
var whichSong = 0;

media.src = prefix + sources[2];

player.volume = 0.025; // suuuuper low
player.play(); // autoplay
changesongtitle();

music.addEventListener('ended',function(){
    //play next song
    if (whichSong > sources.length-2) {
        whichSong = 0;
    } else {
        whichSong++;
    }

  });




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
    player.pause();
    media.src = prefix + sources[whichSong];
    player.load();
    player.play();

    changesongtitle();
    console.log("previous song: " + whichSong + ", " + media.src + ", " + prefix + sources[whichSong]);
}

nextsong.onclick = function () {
    if (whichSong > sources.length-2) {
        whichSong = 0;
    } else {
        whichSong++;
    }

    player.pause();
    media.src = prefix + sources[whichSong];
    player.load();
    player.play();

    changesongtitle();
    console.log("next song: " + whichSong + ", " + media.src + ", " + prefix + sources[whichSong]);
}



function changesongtitle() {
	var songtitle = document.getElementById('songtitle');

    if(player.src = sources[0]) {
        songtitle.innerHTML = "Song: ANOTHER HIM - Toby Fox";        
    } else if (media.src = sources[1]) {
        songtitle.innerHTML = "Song: Charles, Pancakes, and Broccoli - Bee and Puppycat OST";
    } else if (media.src = sources[2]) {
        songtitle.innerHTML = "Song: The Heart Pt. 1 - Kendrick Lamar";
    }
}
