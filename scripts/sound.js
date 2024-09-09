// get data from the player

// let player = document.getElementById('mplayer');
// let audio = document.getElementById('media');
let prefix = "https://enemiphobia.github.io/toblegang"
let vol = 0.025;



let range = document.getElementById('volumeSlider');

var onInput = function () {
    let value = document.getElementById('volumeSlider').value;
    document.getElementById('rangeValue').textContent = Math.round(value*100) + "%"; // adds a visual
    vol = value; // ACTUALLY changes the volume
}





var audioFiles = [
    "/sounds/ANOTHER HIM.mp3",
     "/sounds/charles pancakes and broccoli.mp3",
     "/sounds/the heart pt 1.mp3",
     "/sounds/golf results.mp3",
     "/sounds/carrot car.mp3",
     "/sounds/by your side.mp3"
];
    
function preloadAudio(url) {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = url;
}
    
var loaded = 0;
function loadedAudio() {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    loaded++;
    if (loaded == audioFiles.length){
        // all have loaded
        init();
    }
}
    
var player = document.getElementById('mplayer');
var previous = document.getElementById('previoussong');
var next = document.getElementById('nextsong');
var songtitle = document.getElementById('songtitle');

function play(index) {
    player.src = prefix + audioFiles[index];
    player.volume = vol;
    player.play();

    // if(player.src = audioFiles[0]) {
    //     songtitle.innerHTML = "Song: ANOTHER HIM - Toby Fox";        
    // } else if (player.src = audioFiles[1]) {
    //     songtitle.innerHTML = "Song: Charles, Pancakes, and Broccoli - Bee and Puppycat OST";
    // } else if (player.src = audioFiles[2]) {
    //     songtitle.innerHTML = "Song: The Heart Pt. 1 - Kendrick Lamar";
    // } else if (player.src = audioFiles[3]) {
    //     songtitle.innerHTML = "Song: Golf Results - Wii Sports";
    // }
}

function pause(index) {
    player.src = prefix + audioFiles[index];
    player.volume = vol;
    player.pause();
}
    
function init() {
    // do your stuff here, audio has been loaded
    // for example, play all files one after the other
    var i = 3;

    play(i);
    // previous song
    previous.onclick = function () {
        i--;
        playpause.innerHTML = 'pause';

        if (i < 0) {
            // start to end
            i = audioFiles.length-1;
        }
        play(i);
    }
    // next song
    next.onclick = function () {
        i++;
        playpause.innerHTML = 'pause';
        if (i > audioFiles.length-1) {
            // end to start
            i = 0;
        }
        play(i);
    }

    let playpause = document.getElementById('playpause');

    playpause.onclick = function () {
    var player = document.getElementById('mplayer');
    if (player.paused) {
        play(i);
        playpause.innerHTML = 'pause';
    } else {
        pause(i);
        playpause.innerHTML = 'play';
    }
}

    // once the player ends, play the next one
    player.onended = function() {
        i++;
        if (i >= audioFiles.length) {
            // end 
            return;
        }
        play(i);
    };
    // play the first file
    
    range.addEventListener('input', onInput, false);
    
}
    
// we start preloading all the audio files
for (var i in audioFiles) {
    preloadAudio(prefix + audioFiles[i]);
}

/*
// if(player.src = audioFiles[0]) {
    //     songtitle.innerHTML = "Song: ANOTHER HIM - Toby Fox";        
    // } else if (player.src = audioFiles[1]) {
    //     songtitle.innerHTML = "Song: Charles, Pancakes, and Broccoli - Bee and Puppycat OST";
    // } else if (player.src = audioFiles[2]) {
    //     songtitle.innerHTML = "Song: The Heart Pt. 1 - Kendrick Lamar";
    // } else if (player.src = audioFiles[3]) {
    //     songtitle.innerHTML = "Song: Golf Results - Wii Sports";
    // }
*/