$(document).ready(function(){
setTimeout(function(){
    $("#preloader").delay(650).removeClass("animation").addClass("over");
    $(".pre-overlay").css({"height" : "0%"});
}, 4000);
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 400) {
        $(".header").removeClass("sticky-header")
    }else{
        $(".header").addClass("sticky-header");
    }
});

function loadPlayer() {
    var audioPlayer = new Audio();
    audioPlayer.controls="controls";
    audioPlayer.addEventListener('ended',nextSong,false);
    audioPlayer.addEventListener('error',errorFallback,true);
    document.getElementById("player").appendChild(audioPlayer);
    nextSong();
}
function nextSong() {
    if(urls[next]!=undefined) {
        var audioPlayer = document.getElementsByTagName('audio')[0];
        if(audioPlayer!=undefined) {
            audioPlayer.src=urls[next];
            audioPlayer.load();
            audioPlayer.play();
            next++;
        } else {
            loadPlayer();
        }
    } else {
        alert('the end!');
    }
}
function errorFallback() {
        nextSong();
}
function playPause() {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    if(audioPlayer!=undefined) {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    } else {
        loadPlayer();
    }
}
function pickSong(num) {
    next = num;
    nextSong();
}

var urls = new Array();
    urls[0] = 'music-list/01 Intro.m4a';
    urls[1] = 'music-list/02 Number One Spot.m4a';
    urls[2] = 'music-list/03 Get Back.m4a';
    urls[3] = 'music-list/04 Put Your Money.m4a';
    urls[4] = 'music-list/05 Blueberry Yum Yum.m4a';
    urls[5] = 'music-list/06 Child Of The Night.m4a';
    urls[6] = 'music-list/07 The Potion.m4a';
    urls[7] = 'music-list/08 Pass Out.m4a';
    urls[8] = 'music-list/09 Skit.m4a';
    urls[9] = 'music-list/10 Spur Of The Moment.m4a';
    urls[10] = 'music-list/11 Who Not Me.m4a';
    urls[11] = 'music-list/12 Large Amounts.m4a';
    urls[12] = 'music-list/13 Pimpin_ All Over The World.m4a';
    urls[13] = 'music-list/14 Two Miles An Hour.m4a';
    urls[14] = 'music-list/15 Hopeless.m4a';
    urls[15] = 'music-list/16 Virgo.m4a';
var next = 0;



$(".music-list").on("click", function() {
    $(".music-list").removeClass("active");
    $(this).addClass("active");
})

