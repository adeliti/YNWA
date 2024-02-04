document.addEventListener("DOMContentLoaded", function () {
    // Afișăm mesajul de jos
    var bottomMessage = document.getElementById("bottom-text");
    bottomMessage.style.opacity = "1";
    bottomMessage.style.transform = "translateY(0)";

    // Pornim sunetul de la secunda 4
    var audio = document.getElementById("ynwaSound");
    audio.currentTime = 04;

    // Setăm începutul și sfârșitul clipului video
    var video = document.getElementById("ynwaVideo");
    video.currentTime = 0;
    video.addEventListener("loadedmetadata", function () {
        // Asigurăm că video a fost încărcat înainte de a seta sfârșitul
        video.currentTime = 0;
        video.setAttribute("end-time", 35); // 35 secunde
    });

    // Ascultăm evenimentul play pentru a activa sunetul automat și seta sfârșitul clipului video
    audio.addEventListener("play", function () {
        setTimeout(function () {
            audio.currentTime = 4;
            video.play(); // Pornim clipul video automat odată cu sunetul
        }, 0);
    });

    // Ascultăm evenimentul timeupdate pentru a verifica și opri video-ul la sfârșit
    video.addEventListener("timeupdate", function () {
        if (video.currentTime >= video.getAttribute("end-time")) {
            video.pause();
            audio.pause(); // Oprim și sunetul
        }
    });
});
