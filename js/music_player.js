"use strict";
const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
// console.log(playBtn);
const prevBtnMusic = document.querySelector('#prev');
const nextBtnMusic = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song titles
const songs = ['01', '02' ,'03']

// Keep track of songs
let songIndex = 0     // 常數songs為陣列在檔案中有幾個，可以在這裡指定初始值

// Initially load song info DOM
loadSong(songs[songIndex])    // [songIndex]為陣列中數字；songs為歌曲的常數

// Update song details
function loadSong(song){
    title.innerText = song;
    audio.src = `./audio/${song}.mp3`;    // name of the folder in `  `
    cover.src = `./pic/music-player/${song}.jpg`;   //若檔名有重複，可以多加一個上一層的資料夾作為辨識
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1  // songIndex會要等於陣列數要減一:也就是當(滿足if條件式時)陣列中的[0]click prevBtnMusic後要回到陣列中的最後一首= songs.length-1
    }

    loadSong(songs[songIndex]);
    
    playSong();
}

function nextSong(){
    songIndex++

    if(songIndex > songs.length - 1){         // if(songIndex > songs.length-1(也就是歌曲長度-1=陣列長度) )
        songIndex = 0  // songIndex會要等於0，也就是當(滿足if條件式時)陣列中最後一首撥放時click nextBtnMusic後要回到陣列中的第一= songIndex=0
    }

    loadSong(songs[songIndex]);
    
    playSong();
}


function updateProgress(e){   
    // console.log(e);  // 透過console.log可知e即為下方的event: timeupdate
    const {duration, currentTime} = e.srcElement; // 儲存兩個常數 {duration, currentTime}>>event(=timeupdate).srcElement的，可透過console.log印證
    // const duration = e.srcElement.duration
    // const currentTime = e.srcElement.currentTime // 72 = 73+74
    // console.log(duration, currentTime);
    const progressPercent = (currentTime / duration) *100;  // 總時間中的現在時間
    // console.log(progressPercent);
    progress.style.width = `${progressPercent}%`; // 會一直執行這個function得出不同的結果在放進`$變數`中
}

function setProgress(e){
    const width = this.clientWidth    // this = const progressContainer = class name .progress-container
    // console.log(this.clientWidth);
    const clickX = e.offsetX;
    // console.log(clickX);
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;   // 總寬度中的點擊x軸偏移量
}
// Event listeners
playBtn.addEventListener('click', function(){
    const isPlaying = musicContainer.classList.contains('play');    
    // className:play (===".play")在css中會在常數isPlaying時被呼叫>>其中包括 59 .music-container.play .img-container img{animation-play-state: running;}
    // .music-container.play .music-info{ opacity: 1;  transform: translateY(-100%);}
    if(isPlaying){
        pauseSong();  // 37行
    }else{
        playSong();  // 29行
    }
});

// Change song events    // function另外寫在外層好處:可重複利用ex:nextSong
prevBtnMusic.addEventListener('click', prevSong)
nextBtnMusic.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);


audio.addEventListener('ended', nextSong) // 串接nextSong function