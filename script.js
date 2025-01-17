function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message !== '') {
        addMessageToChat('user', message);
        userInput.value = '';
        setTimeout(() => {
            addMessageToChat('bot', getBotResponse(message));
        }, 1000);
    }
}

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerHTML = `<span>${message}</span>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    // Simple bot responses
    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'hi': 'Hello! How can I help you?',
        'how are you': 'I am just a bot, but I am here to help you!',
        'bye': 'Goodbye! Have a great day!',
    };

    const lowerCaseMessage = message.toLowerCase();
    return responses[lowerCaseMessage] || 'Sorry, I did not understand that. Can you please rephrase?';
}