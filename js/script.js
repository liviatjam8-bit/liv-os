const title = document.getElementById("title");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const button = document.getElementById("continueBtn");
const transition = document.getElementById("transition");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function type(element, text, speed = 60) {

    element.classList.add("cursor");

    for (let i = 0; i < text.length; i++) {

        element.innerHTML += text.charAt(i);

        await sleep(speed);

    }

    element.classList.remove("cursor");

}

async function start() {

    await type(title, "Dear Ruben Sugianto,", 70);

    await sleep(700);

    await type(line1, "Before you go...", 60);

    await sleep(700);

    await type(line2, "Can you guess what's waiting inside? 👀", 45);

    await sleep(900);

    button.style.display = "inline-block";

}

start();

button.onclick = function (event) {

    event.preventDefault();

    transition.classList.add("show");

    setTimeout(function () {

        window.location.href = "letter.html";

    }, 1200);

};
