
var music=document.querySelector("audio");
var img=document.querySelector("img");
var play =document.getElementById("play");
var title =document.getElementById("title");
var artist =document.getElementById("artist");
var next =document.getElementById("next");
var prev =document.getElementById("prev");


var isplaying =false;

playmusic = () => {
    isplaying=true;
    music.play();
 play.classList.replace("fa-play","fa-pause");
 img.classList.add("anime");
};

// for pause the music
 pausemusic = () => {
    isplaying=false;
    music.pause();
 play.classList.replace("fa-pause", "fa-play");
 img.classList.add("anime");
 img.classList.remove("anime");
};

play.addEventListener('click', () =>{
    if(isplaying){
        pausemusic();
    }

    else{
        playmusic();
        
    }
});

// changing the music data by forward and backward buttons
let songs =[{
    name:"music-1",
    title: "Still Rollin" ,
    artist: "Shubh",
},
{
    name : "music-2",
    title:"Aloof",
    artist: "Himmat Sandhu",
},
{
    name :"music-3",
    title: "palpita" ,
    artist: "Diljit Dosanjh",
},

{
    name:"music-4",
    title: "Mil Ke baithange",
    artist: "Amrinder Gill",
},
];
 

let loadsong =(songs) =>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src= "musicmp3/" +songs.name + ".mp3";
    img.src="mimages/" +songs.name + ".jpg";


};
 
songindex=0;
let nextsong=()=>{
    songindex= (songindex +1) % songs.length;
    loadsong(songs[songindex]);
    playmusic();

};

let prevsong=()=>{
    if (songindex==0){
        songindex=songs.length;
        }
        songindex--;
        loadsong(songs[songindex]);
        playmusic();
};

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);


