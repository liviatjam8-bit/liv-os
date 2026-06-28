const logs = [

"✓ README.md",

"✓ CHANGELOG.md",

"✓ Ruben.exe",

"✓ warm-last-hug-transfer-protocol",

"✓ One last package",

"",

"No critical errors found."

];

const progress=document.getElementById("progress");
const logBox=document.getElementById("logs");
const ready=document.getElementById("systemReady");
const button=document.getElementById("enterButton");

let width=0;

const loading=setInterval(()=>{

width++;

progress.style.width=width+"%";

if(width>=100){

clearInterval(loading);

showLogs();

}

},18);

function showLogs(){

let i=0;

const interval=setInterval(()=>{

logBox.innerHTML+=logs[i]+"<br>";

i++;

if(i>=logs.length){

clearInterval(interval);

setTimeout(()=>{

ready.innerHTML="System Ready.";

setTimeout(()=>{

button.style.display="inline-block";

},500);

},500);

}

},450);

}

button.onclick=()=>{

window.location.href="welcome.html";

}
