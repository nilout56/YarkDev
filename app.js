const message = new SpeechSynthesisUtterance();
function onVoicesChange() {
    const voices = speechSynthesis.getVoices();
    voices.find(voice => voice.lang === 'th-TH');
    message.voice = thVoice;

}

function onclick(event) {
    message.text = (event.target).getAttribute('atl');
    SpeechSynthesis.speak(message);
}

function run() {
    speechSynthesis.addEventListener('voiceschanged',onVoicesChange);
    const imgElems = Array.from(document.querySelectorAll('img'));
    imgElems.forEach(imgElems => imgElems.addEventListener('click',onclick));


}

run();