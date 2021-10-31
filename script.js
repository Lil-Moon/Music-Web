var mySong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.paused){
        mySong.onplay();
        icon.scr = "assests/pause.png";
    }else{
        mySong.pause();
        icon.src = "assests/play.png";
    }
}