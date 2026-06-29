/* ===========================================
        liv-os
        Scene 3
        envelope.js
=========================================== */

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const music = document.getElementById("bgMusic");

let opened = false;

/* ===========================================
   Click Envelope
=========================================== */

envelope.addEventListener("click", function () {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

    /* =======================================
       Start Music
    ======================================= */

    if (music) {

        music.volume = 0;

        music.play().catch(() => {});

        fadeMusic();

    }

    /* =======================================
       Go To Letter
    ======================================= */

    setTimeout(function () {

        document.body.style.transition = "opacity 1s ease";

        document.body.style.opacity = "0";

    }, 3200);

    setTimeout(function () {

        window.location.href = "letter.html";

    }, 4300);

});


/* ===========================================
   Fade Music
=========================================== */

function fadeMusic() {

    let volume = 0;

    const fade = setInterval(function () {

        volume += 0.05;

        if (volume >= 1) {

            volume = 1;

            clearInterval(fade);

        }

        music.volume = volume;

    }, 120);

}


/* ===========================================
   Optional Hover Effect
=========================================== */

envelope.addEventListener("mouseenter", function () {

    envelope.style.transition = "all .4s ease";

});

envelope.addEventListener("mouseleave", function () {

    envelope.style.transition = "all .4s ease";

});


/* ===========================================
   Disable Double Click
=========================================== */

envelope.addEventListener("dblclick", function (e) {

    e.preventDefault();

});


/* ===========================================
   Prevent Drag
=========================================== */

document.addEventListener("dragstart", function (e) {

    e.preventDefault();

});


/* ===========================================
   Press Space / Enter
=========================================== */

document.addEventListener("keydown", function (event) {

    if (opened) return;

    if (event.code === "Space" || event.code === "Enter") {

        envelope.click();

    }

});


/* ===========================================
   Initial Fade In
=========================================== */

window.addEventListener("load", function () {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity .8s ease";

    requestAnimationFrame(function () {

        document.body.style.opacity = "1";

    });

});
