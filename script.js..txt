const words = ["Apple", "Elephant", "Sunshine", "Guitar", "Computer", "Mountain"];
let score = 0;

const grid = document.getElementById('word-grid');
const scoreDisplay = document.getElementById('score');

// Function to make the computer speak
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for learners
    window.speechSynthesis.speak(utterance);
}

// Generate the game cards
words.forEach(word => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = word;
    
    card.onclick = () => {
        speak(word);
        score += 10;
        scoreDisplay.innerText = score;
        card.style.borderColor = "#2ecc71"; // Turn green when clicked
    };
    
    grid.appendChild(card);
});
