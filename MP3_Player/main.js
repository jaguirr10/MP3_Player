// Juan Aguirre

var songs = ["", "","","","","","","","","",""];  //  Songs are stored here 

var currentSong = 0;

var audio = document.getElementById("audio"); 

function prevTrack(){
  audio.pause();
  currentSong = currentSong - 1;
  if (currentSong < 0){
      currentSong = songs.length - 1;
  };
  audio.src = songs[currentSong];
  audio.play();
  show();
}

function play() {
   audio.src = songs[currentSong];  
   audio.play();
   show();
} 

function pauseAudio() { 
    audio.pause(); 
}

function nextTrack() {
    audio.pause();
    currentSong = currentSong + 1;
    if (currentSong > songs.length - 1){
      currentSong = 0;
    };
    audio.src = songs[currentSong];
    audio.play();
    show();
} 

function show(){
  var text = songs[currentSong];
  var text = decodeURIComponent(text)
  var pos = text.lastIndexOf('/');
  var text = text.substring(pos+1);
  lcd.textContent = text.replace('.mp3', '');
 }



