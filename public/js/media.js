let audio = document.querySelector('audio');

let playAndPauseBtn = document.getElementById("playAndPauseBtn");

let count = 0;


function playAndPause() {
    console.log('playing...')
    if(count ==0 ) {
        count = 1;
        audio.play();
        
        playAndPauseBtn.classList.add("fa fa-youtube");
    }else{
    console.log('paused...')
        count = 0;
        audio.pause();
        // playAndPauseBtn.classList.remove("fa fa-twitter");
        playAndPauseBtn.classList.add("fa fa-twitter");
    }
}


function stop() {


    playPause();
    audio.pause();
    audio.cuttentTime = 0;
    playAndPauseBtn.classList.toggle

}

