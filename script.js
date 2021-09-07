const searchForm = document.querySelector("#search-form"),
    SearchInput = document.querySelector("#search-input"),
    //
    speechBtnDiv = document.querySelector("#speech-btn"),
    micBtn = document.querySelector(".btn .fas"),
    instruction = document.querySelector(".instruction");


const spechSynthesis = window.speechSynthesis;

//Check for browser Support
if (spechSynthesis ) {
    console.log("Speech synthesis supported");

    micBtn.addEventListener("click", speak)
   
    function speak(e) {
        e.preventDefault();
        const inputValue =  SearchInput.value;
        const speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US"
        speech.text = inputValue;
        speech.volume = "1";
        speech.rate = "1";
        speech.pitch = "1";
        speech.voice = spechSynthesis.speak(speech);
        
    }

} else {
    console.log("Speech synthesis not supported");
    speechBtnDiv.style.visibility = "hidden";
}


// Check for browser support
if (speechSynthesis) {
  console.log("Speech Synthesis Supported");

  micBtn.addEventListener("click", speak);

  function speak(e) {
    e.preventDefault();
    const inputValue = input.value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = inputValue;
    speech.volume = "1";
    speech.rate = "1";
    speech.pitch = "1";
    speech.voice = speechSynthesis.speak(speech);
  }
} else {
  console.log("Speech Synthesis Not Supported");
  speechBtnDiv.style.visibility = "hidden";
}
