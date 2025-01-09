document.addEventListener("DOMContentLoaded", () => {
    const introVideo = document.getElementById("intro-video");
    const loadingScreen = document.getElementById("loading-screen");

    // מאזין לסיום הסרטון
    introVideo.addEventListener("ended", () => {
        if (loadingScreen) {
            loadingScreen.style.opacity = 0;
            setTimeout(() => {
                loadingScreen.style.display = "none";
                document.body.classList.remove("loading");
                if (loadingAudio) {
                    loadingAudio.pause(); // מפסיק את השמע
                    loadingAudio.currentTime = 0; // מאפס את השמע
                }
            }, 500);
        }
    });
});
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 10000); // 10 שניות
};

  