console.log("page loaded...");

function playVideo(video){
    video.play();
}

function pauseVideo(video){
    video.pause();
    video.currentTime = 0;
}


function login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function playOnMain(smallVideo) {
    const mainVideo = document.getElementById('maxvideo'); // Seleccionamos el video principal
    mainVideo.src = smallVideo.src; // Cambiamos el src del video principal
    mainVideo.play(); // Reproducimos el video principal
}