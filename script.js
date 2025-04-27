function appendMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  
  const avatar = document.createElement('span');
  avatar.textContent = sender === 'user' ? '👤' : '🤖';
  
  messageDiv.appendChild(avatar);
  messageDiv.append(` ${text}`);
  
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight;
}
