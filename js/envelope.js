// ======================================================
// liv-os
// Scene 3
// envelope.js
// ======================================================

const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

let opened = false;

// ======================================================
// Fade In Music
// ======================================================

function fadeInMusic() {

    if (!music) return;

    music.volume = 0;

    music.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        if (volume >= 0.35) {

            volume = 0.35;

            clearInterval(fade);

        }

        music.volume = volume;

    }, 120);

}

// ======================================================
// Open Envelope
// ======================================================

function openEnvelope() {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

    fadeInMusic();

    // Fade out setelah animasi selesai

    setTimeout(() => {

        document.body.style.transition = "opacity .8s ease";

        document.body.style.opacity = "0";

    }, 3400);

    // Masuk ke halaman surat

    setTimeout(() => {

        window.location.href = "letter.html";

    }, 4300);

}

// ======================================================
// Click
// ======================================================

envelope.addEventListener("click", openEnvelope);

// ======================================================
// Keyboard
// ======================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.code === "Space") {

        event.preventDefault();

        openEnvelope();

    }

});

// ======================================================
// Page Fade In
// ======================================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity .8s ease";

    requestAnimationFrame(() => {

        document.body.style.opacity = "1";

    });

});