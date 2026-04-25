function showSection(section) {

    let content = document.getElementById("content");

    if (section === "greetings") {
        content.innerHTML = "👋 Hello students! How are you today?";
    }

    else if (section === "vocabulary") {
        content.innerHTML = "📚 Let's learn new words!";
    }

    else if (section === "games") {
        content.innerHTML = "🎮 Time for a fun game!";
    }

    else if (section === "review") {
        content.innerHTML = "📝 Let's review what we learned!";
    }
}
