
function playOnMain(secondaryVideo) {
    var mainVideo = document.getElementById("mainVideo"); // Selecciona el video principal
    var videoTitle = secondaryVideo.parentElement.querySelector(".video-title").textContent; // Selecciona el título del video secundario
    var principalTitle = document.getElementById("title-principal"); // Selecciona el título principal

    // Guarda temporalmente el src del video principal
    var tempVideoSrc = mainVideo.src;
    var tempTitle = principalTitle.textContent; // Guarda el título principal temporalmente

    // Cambia el src del video principal al del video secundario
    mainVideo.src = secondaryVideo.src;
    mainVideo.play(); // Reproduce el nuevo video en el video principal

    // Cambia el src del video secundario al que tenía el video principal
    secondaryVideo.src = tempVideoSrc;

    // Intercambia los títulos
    principalTitle.textContent = videoTitle;
    secondaryVideo.parentElement.querySelector(".video-title").textContent = tempTitle;
}

function pauseVideo() {
    var mainVideo = document.getElementById("mainVideo");
    mainVideo.pause(); // Pausa el video principal
}
