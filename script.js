// Grab the elements from the HTML
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

// Define the function that runs when button is clicked
function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸";
    } else {
        music.pause();
        btn.innerHTML = "🎵";
    }
}

// Single Page Application (SPA) Router 
// This intercepts link clicks and loads content dynamically so the music never stops playing
document.addEventListener("click", function (event) {
    // Find the closest anchor tag that was clicked
    const link = event.target.closest("a");

    // Ignore if not a link, or if it has a target _blank, or if it's an external URL
    if (!link || link.target === "_blank" || link.origin !== window.location.origin) {
        return;
    }

    event.preventDefault(); // Stop normal browser navigation

    const url = link.href;

    // Only fetch if resolving a different page
    if (url !== window.location.href) {
        navigateTo(url);
    }
});

// Handle the browser Back and Forward buttons
window.addEventListener("popstate", function (event) {
    // The history event occurred, let's load that page's content
    navigateTo(window.location.href, false);
});

async function navigateTo(url, pushState = true) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");

        const html = await response.text();

        // Parse the new HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Grab the new sections we want to swap
        const newMain = doc.querySelector("main");
        const newHeader = doc.querySelector("header");
        const newTitle = doc.querySelector("title").innerText;

        // Replace the objects in the current DOM
        if (newMain) {
            document.querySelector("main").innerHTML = newMain.innerHTML;
        }
        if (newHeader) {
            document.querySelector("header").innerHTML = newHeader.innerHTML;
        }

        // Update the document title
        document.title = newTitle;

        // Update the browser URL and History
        if (pushState) {
            window.history.pushState(null, "", url);
        }

    } catch (error) {
        console.error("Failed to load the page: ", error);
        // Fallback to regular navigation if fetch fails
        window.location.href = url;
    }
}

// URL directa de tu archivo en GitHub
const URL_SONIDO = "https://raw.githubusercontent.com/GaboMcGameDev/Proyecto-Diplomado/main/CLICK%20PAGINA%20WEB.mp3";

// Creamos el objeto de audio globalmente
const audioClick = new Audio(URL_SONIDO);

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos TODOS los elementos que actúan como botones
    // Incluye botones, enlaces de navegación y cualquier cosa con clase 'btn'
    const botones = document.querySelectorAll("button, a, .btn");

    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            // Reiniciar y reproducir
            audioClick.currentTime = 0;
            audioClick.play().catch(error => {
                console.warn("Reproducción bloqueada: Haz clic en cualquier parte de la página primero.");
            });
        });
    });
});