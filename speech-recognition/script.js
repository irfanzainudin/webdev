// was following the tutorial by Andela (Chuks @developia_) at https://www.youtube.com/watch?v=AeHazb0Mq04

let p = document.getElementById("paragraph");
let speakButton = document.getElementById("speak-btn");
let buttonCont = document.getElementById("button-container");
// const sound = document.getElementById("sound");

window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
recognition = new SpeechRecognition();
recognition.lang = 'ar-SA';
recognition.interimResult = true;

speakButton.onclick = () => {
    // sound.play();
    dictate();
}

const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ')
        console.log(speechToText)
        p.innerText = speechToText;

        speak();
    }
}

const speak = () => {
    const utterThis = new SpeechSynthesisUtterance("شكرا هذا جميل");
    utterThis.lang = 'ar-SA';
    synth.speak(utterThis);
}