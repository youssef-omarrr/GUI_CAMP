let video = document.getElementById("video-player");
let vid_button = document.getElementById("toggle-video");
let vid_container = document.getElementById("vid-container");

vid_button.addEventListener("click", function () {
    if (!video.paused) {
        // close the video
        video.pause();
        video.style.opacity = "0";  // Hide the video

        vid_container.style.backgroundColor = "black"; // Turn screen black
        vid_button.textContent = "Turn On";

        console.log("video OFF");

    } else {
        if (!emergencyActivated) {
            // start the video
            vid_container.style.backgroundColor = ""; // Reset background
            vid_button.textContent = "Turn Off";

            video.play();
            video.style.opacity = "1";  // Hide the video

            console.log("video ON");
        }
    }
});

let e_button = document.getElementById("e-button");
e_button.addEventListener("click", function () {
    console.log("STOOOPPP!");
});