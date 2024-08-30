// get data from the player

let player = document.getElementById('mplayer');
let audio = document.getElementById('media');
var playpause = document.getElementById('playpause');


// all the songs in sounds
let prefix = "https://enemiphobia.github.io/toblegang/";
let sources = [
    "sounds/ANOTHER HIM.mp3",
    "sounds/charles pancakes and broccoli.mp3",
    "sounds/the heart pt 1.mp3"
];

var whichSong = 0;
player.volume = 0.025;

// player.src = prefix + sources[Math.floor(Math.random()*3)];
// if (player) {
player.onload = function () {
    audio.src = prefix + sources[1];
    player.volume = 0.025; // suuuuper low
    player.load();
    player.play(); // autoplay
    changesongtitle();
}
// }



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

// previoussong.onclick = function () {
//     if (whichSong < 1) {
//         whichSong = sources.length-1;
//     } else {
//         whichSong--;
//     }
    
//     player.src = prefix + sources[whichSong];
//     player.load();

//     changesongtitle();
//     console.log("previous song: " + whichSong + ", " + player.src + ", " + prefix + sources[whichSong]);
// }

// nextsong.onclick = function () {
//     if (whichSong > sources.length-2) {
//         whichSong = 0;
//     } else {
//         whichSong++;
//     }
//     player.src = sources[whichSong];
//     changesongtitle();
//     console.log("next song: " + whichSong + ", " + player.src + ", " + prefix + sources[whichSong]);
// }



function changesongtitle() {
    let player = document.getElementById('mplayer');
    let audio = document.getElementById('media');
	var songtitle = document.getElementById('songtitle');

    if(player.src = prefix + sources[0]) {
        songtitle.innerHTML = "Song: ANOTHER HIM - Toby Fox";        
    } else if (player.src = prefix + sources[1]) {
        songtitle.innerHTML = "Song: Charles, Pancakes, and Broccoli - Bee and Puppycat OST";
    } else if (player.src = prefix + sources[2]) {
        songtitle.innerHTML = "Song: The Heart Pt. 1 - Kendrick Lamar";
    }
}
