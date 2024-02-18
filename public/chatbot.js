const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const form = document.getElementById('chat-form');
const loader = document.getElementById('loader');

async function sendMessage() {
const userMessage = userInput.value.trim();

if (userMessage === '') {
return; // Do nothing if the input is empty
}

try {
loader.style.display = 'block'; // Show the loader

const response = await fetch('/chat', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ userInput: userMessage }),
});

const data = await response.json();
const botMessage = data.response;

// Add chat message to the chat history
chatHistory.innerHTML += `<div class="user-message">${userMessage}</div>`;
chatHistory.innerHTML += `<div class="bot-message">${botMessage}</div>`;

// Scroll to the bottom of the chat history
chatHistory.scrollTop = chatHistory.scrollHeight;
} catch (error) {
console.error('Error:', error);
// Handle errors gracefully, e.g., display an error message to the user
} finally {
loader.style.display = 'none'; // Hide the loader after the message is sent
}
}

form.addEventListener('submit', (event) => {
event.preventDefault(); // Prevent form submission
sendMessage();
});