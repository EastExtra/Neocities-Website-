// Select the message and button elements
const messageElement = document.getElementById('personalMessage');

// Check local storage for the flag
if (localStorage.getItem('isCam')) {
    messageElement.textContent = 'I love you, Cam';
}

// Optional: You could include a manual "identify" action
document.addEventListener("DOMContentLoaded", () => {
    const identifyButton = document.createElement("button");
    identifyButton.textContent = "I am Cam";
    document.body.appendChild(identifyButton);

    identifyButton.addEventListener('click', () => {
        localStorage.setItem('isCam', 'true');
        messageElement.textContent = 'I love you, Cam';
        identifyButton.style.display = 'none';
    });
});