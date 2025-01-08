let progess = document.getElementById('progress');
let song = document.getElementById('song');
let controlIcon= document.getElementById('control-icon');

song.onloadedmetadata= function(){
    progress.max = song.duration; 
    progress.value = song.currentTime; 
}

function playPause(){
if (controlIcon.getAttribute("name") === "pause") {
song.pause();
controlIcon.setAttribute("name", "play"); // Change the icon to play
} else {
song.play();
controlIcon.setAttribute("name", "pause"); // Change the icon to pause
}

}
if(song.play()){
setInterval(()=>{
    progress.value = song.currentTime;
},1000);
}
progress.oninput = function(){
song.play();
song.currentTime = progess.value;
controlIcon.setAttribute("name", "pause");
}