// ======================================================
// liv-os
// Boot Screen v2
// ======================================================

const progress = document.getElementById("progress");
const logs = document.getElementById("logs");
const systemReady = document.getElementById("systemReady");
const enterButton = document.getElementById("enterButton");

const logList = [
    "✓ README.md",
    "✓ CHANGELOG.md",
    "✓ Ruben.exe",
    "✓ warm-last-hug-transfer-protocol",
    "✓ One last package"
];

let percent = 0;
let currentLog = 0;
let bootFinished = false;

// ======================================================
// Progress
// ======================================================

const boot = setInterval(() => {

    percent++;

    progress.style.width = percent + "%";

    if (percent % 20 === 0 && currentLog < logList.length) {

        const p = document.createElement("p");

        p.textContent = logList[currentLog];

        logs.appendChild(p);

        currentLog++;

    }

    if (percent >= 100) {

        clearInterval(boot);

        setTimeout(() => {

            const complete = document.createElement("p");

            complete.textContent = "";

            logs.appendChild(complete);

            systemReady.innerHTML = `
                <p>✓ No critical errors found.</p>
                <p>System Ready.</p>
            `;

        }, 400);

        setTimeout(() => {

            enterButton.style.display = "block";

            bootFinished = true;

        }, 1000);

    }

}, 35);

// ======================================================
// Continue
// ======================================================

function continueBoot() {

    if (!bootFinished) return;

    document.body.style.transition = "opacity .8s ease";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "welcome.html";

    }, 800);

}

// ======================================================
// Mouse
// ======================================================

enterButton.addEventListener("click", continueBoot);

// ======================================================
// Keyboard
// ======================================================

document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        continueBoot();

    }

});

// ======================================================
// Click Anywhere
// ======================================================

document.addEventListener("click", function(){

    if(bootFinished){

        continueBoot();

    }

});