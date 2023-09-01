let songIndex = 0;
let audioElement = new Audio('Songs/Let Me Down Slowly.mp3');
let masterplay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Let me Down Slowly", filePath: "Songs/Let Me Down Slowly.mp3" },
    { songName: "Brown Rang", filePath: "Songs/Brown Rang.mp3" },
    { songName: "Desi Kalakaar", filePath: "Songs/Desi Kalakaar.mp3" },
    { songName: "Dholna", filePath: "Songs/Dholna.mp3" },
    { songName: "Chammak Challo", filePath: "Songs/Chammak Challo.mp3" },
    { songName: "Chand Sifarish", filePath: "Songs/Chand Sifarish.mp3" },
    { songName: "Chale Aana", filePath: "Songs/CHALE AANA.mp3" },
    { songName: "Buddhu Sa Mann", filePath: "Songs/Buddhu Sa Mann.mp3" },
]

songItem.forEach((element, i)=>{
    // element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    // element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("name")[0].innerText = songs[i].name;
})

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle-o");
        masterplay.classList.add("fa-play-circle-o");
        gif.style.opacity = 0;
    }
})
// audioElement.play();
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeallPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle-o');
        element.classList.add('fa-play-circle-o')
    })
}
Array.from(document.getElementsByClassName('songitemPlay1')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `Songs/Buddhu Sa Mann.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
    })
})
Array.from(document.getElementsByClassName('songitemPlay2')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `Songs/CHALE AANA.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
    })
})
Array.from(document.getElementsByClassName('songitemPlay3')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `Songs/Chand Sifarish.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
    })
})
Array.from(document.getElementsByClassName('songitemPlay4')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `Songs/Chammak Challo.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
    })
})
Array.from(document.getElementsByClassName('songitemPlay5')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `Songs/Dholna.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
    })
})
Array.from(document.getElementsByClassName('songitemPlay6')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `Songs/Desi Kalakaar.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
    })
})
Array.from(document.getElementsByClassName('songitemPlay7')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `Songs/Brown Rang.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
    })
})
Array.from(document.getElementsByClassName('songitemPlay8')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `Songs/Let Me Down Slowly.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle-o");
        masterplay.classList.add("fa-pause-circle-o");
    })
})

document.getElementsByClassName('forward').addEventListener('click',()=>{
    if (songIndex>7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
})