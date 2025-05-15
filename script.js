async function sendMessage() {
  const input = document.getElementById("chat-input");
  const log = document.getElementById("chat-log");
  const userText = input.value.trim();
  if (!userText) return;

  log.innerHTML += `<div><strong>🧠 Vous :</strong> ${userText}</div>`;
  input.value = "";
  log.scrollTop = log.scrollHeight;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer VOTRE_CLE_API_OPENAI"  // Remplacez par votre clé côté serveur
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: userText }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || "Réponse indisponible.";

    log.innerHTML += `<div><strong>🤖 NeuraX :</strong> ${botReply}</div>`;
    log.scrollTop = log.scrollHeight;

    // Synthèse vocale
    speak(botReply);
  } catch (error) {
    log.innerHTML += `<div style="color:red;">Erreur neuronale 🧨 : ${error.message}</div>`;
  }
}

