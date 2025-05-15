function activateNeurons() {
  const total = 10;
  for (let i = 0; i < total; i++) {
    neurons.push({ id: `Neuron-${i+1}`, status: 'inactif' });
  }
  updateStats();
  let index = 0;
  const interval = setInterval(() => {
    if (index >= neurons.length) {
      clearInterval(interval);
      localStorage.setItem('albertai_logs', JSON.stringify(neurons));
      logToConsole("✅ Tous les neurones sont activés et enregistrés.");
      updateStats();
      return;
    }
    const n = neurons[index];
    n.status = 'activé';
    // Nouveau message de l'éveil neuronal
    const msg = "Les connexions neuronales se forment...";
    logToConsole(msg);
    const utterance = new SpeechSynthesisUtterance(msg);
    utterance.lang = "fr-FR";
    speechSynthesis.speak(utterance);
    index++;
    updateStats();
  }, 1000);
}
