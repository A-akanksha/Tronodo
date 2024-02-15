let song_i=0;
let audioElement= new Audio("./sounds/do_gallan.mp3");
let mplay=document.getElementById('mplay') ;
let myProg_bar=document.getElementById('progressBar');
let gif=document.getElementById('B_gif');
let m_song=document.getElementById('m_song');
let bc_img=document.getElementById('bc_img');


let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Do Gallan",filePath:"./sounds/do_gallan.mp3",cover:"./images/do_gallan.jpg"},
    {songName:"Let em Play",filePath:"./sounds/let.mp3",cover:"./images/let.jpg"},
    {songName:"Challa",filePath:"./sounds/challa.mp3",cover:"./images/challa.jpg"},
    {songName:"Diary",filePath:"./sounds/diary.mp3",cover:"./images/diary.jpg"},
    {songName:"Dangal",filePath:"./sounds/dangal.mp3",cover:"./images/dangal.jpg"},
]

console.log(bc_img.src);
m_song.innerText=songs[0].songName;
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].cover;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})
mplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        mplay.classList.remove('fa-play');
        mplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        mplay.classList.remove('fa-pause');
        mplay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=> {
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProg_bar.value=progress;
})

myProg_bar.addEventListener('change',()=>{
    audioElement.currentTime=myProg_bar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
let songSound=["do_gallan","let","challa","diary","dangal"];
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        song_i=parseInt(e.target.id);
        bc_img.src=songs[song_i].cover;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src="./sounds/"+songSound[song_i]+".mp3";
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        mplay.classList.remove('fa-play');
        mplay.classList.add('fa-pause');
        m_song.innerText=songs[song_i].songName;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(song_i>4){
        song_i=0;
    }
    else{
        song_i+=1;
    }
    bc_img.src=songs[song_i].cover;
    audioElement.src="./sounds/"+songSound[song_i]+".mp3";
        
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        mplay.classList.remove('fa-play');
        mplay.classList.add('fa-pause');
        m_song.innerText=songs[song_i].songName;
})
document.getElementById('back').addEventListener('click',()=>{
    if(song_i==0){
        song_i=4;
    }
    else{
        song_i-=1;
    }
    bc_img.src=songs[song_i].cover;
    audioElement.src="./sounds/"+songSound[song_i]+".mp3";
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        mplay.classList.remove('fa-play');
        mplay.classList.add('fa-pause');
        m_song.innerText=songs[song_i].songName;
})