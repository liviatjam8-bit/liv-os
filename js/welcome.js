// ======================================================
// liv-os
// Welcome Screen v2
// ======================================================

const opening = document.getElementById("opening");
const content = document.querySelector(".content");

const text = "Opening letter...";

let index = 0;

// ======================================================
// Hide content first
// ======================================================

content.style.opacity = "0";

// ======================================================
// Typing Effect
// ======================================================

function typeOpening() {

    if (index < text.length) {

        opening.textContent += text.charAt(index);

        index++;

        setTimeout(typeOpening, 70);

    } else {

        setTimeout(() => {

            content.style.opacity = "1";
            content.style.transform = "translateY(0)";

        }, 300);

    }

}

typeOpening();

// ======================================================
// Smooth transition
// ======================================================

const button = document.querySelector(".continue-btn");

button.addEventListener("click", function (e) {

    e.preventDefault();

    document.body.style.transition = "opacity .8s ease";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "envelope.html";

    }, 800);

});