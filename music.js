
var music = document.querySelector("audio");
var img = document.querySelector("img");
var play = document.getElementById("play");
var title = document.getElementById("title");
var artist = document.getElementById("artist");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var progress = document.getElementById("progress");
let current_time = document.getElementById("current_time");
let tot_duration = document.getElementById("duration");


var isplaying = false;

playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause the music
pausemusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.add("anime");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    if (isplaying) {
        pausemusic();
    }

    else {
        playmusic();

    }
});

// changing the music data by forward and backward buttons
let songs = [{
    name: "music-1",
    title: "Still Rollin",
    artist: "Shubh",
},
{
    name: "music-2",
    title: "Aloof",
    artist: "Himmat Sandhu",
},
{
    name: "music-3",
    title: "palpita",
    artist: "Diljit Dosanjh",
},

{
    name: "music-4",
    title: "Mil Ke baithange",
    artist: "Amrinder Gill",
},
];


let loadsong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "musicmp3/" + songs.name + ".mp3";
    img.src = "mimages/" + songs.name + ".jpg";


};

songindex = 0;
let nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    playmusic();

};

let prevsong = () => {
    if (songindex == 0) {
        songindex = songs.length;
    }
    songindex--;
    loadsong(songs[songindex]);
    playmusic();
};



music.addEventListener('timeupdate', (event) => {

    const { currentTime, duration } = event.srcElement;


    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;



    // music time update
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);

    let duration_total = `${min_duration}:${sec_duration}`;
    if (duration) {
        tot_duration.textContent = `${duration_total}`;
    }
    // currenttime update
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);

    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;   
    }

    let currentTime_total = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${currentTime_total}`;

});

 const progressdiv=document.getElementById("progress_div");

 progressdiv.addEventListener('click',(event)=>{
    const{duration}=music;
  let move_bar=(event.offsetX / event.srcElement.clientWidth)*duration;
//   console.log(duration);
//   console.log(move_bar);

  music.currentTime=move_bar;
});

// clientWidth
// offsetX


// auto play next song
music.addEventListener("ended", nextsong);

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);
