// Grab the elements from the HTML
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

// Define the function that runs when button is clicked
function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ Pause Sound";
    } else {
        music.pause();
        btn.innerHTML = "🎵 Play Sound";
    }
}