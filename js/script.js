const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const button = document.getElementById("continueBtn");

function typeText(element, text, speed = 50){

    return new Promise(resolve=>{

        let i=0;

        element.classList.add("cursor");

        const interval=setInterval(()=>{

            element.innerHTML += text.charAt(i);

            i++;

            if(i>=text.length){

                clearInterval(interval);

                element.classList.remove("cursor");

                resolve();

            }

        },speed);

    });

}

async function start(){

    await typeText(line1,"Dear Ruben Sugianto,",60);

    await new Promise(r=>setTimeout(r,700));

    await typeText(line2,"Before you go...",60);

    await new Promise(r=>setTimeout(r,700));

    await typeText(line3,"Can you guess what's waiting inside? 👀",45);

    await new Promise(r=>setTimeout(r,900));

    button.style.display="inline-block";

}

start();
