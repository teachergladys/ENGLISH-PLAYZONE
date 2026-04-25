function playAudio(id) {

    // stop all audio first
    let audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    // play selected audio
    let selected = document.getElementById(id);
    selected.play();

    // change content text
    let content = document.getElementById("content");

    if (id === "greetings") {
        content.innerHTML = "👋 Hello students!"; “ Good morning!”; How are you?”; 
    } else if (id === "warmup") {
        content.innerHTML = "🎵 Let's sing a song!";
    } else if (id === "review") {
        content.innerHTML = "📚 Let's review!";
    } else if (id === "learning") {
        content.innerHTML = "🧠 Time to learn!";
    } else if (id === "exit") {
        content.innerHTML = "👋 Goodbye!";
    }
}
