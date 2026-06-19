const audio = new Audio();

function playRadio() {
    audio.src = "https://corsproxy.io/?http://stream1.srvnetplus.com:8153/stream";
    audio.play();
}

function stopRadio() {
    audio.pause();
}
