let historyChat = [];

export const clearHistoryChat = () => (historyChat = []);
export const upDateChat = (message) => {
  historyChat.push(message);
};

function getCompletion(userText, name, APIKEY) {
  if (historyChat.length === 0) {
    historyChat.push({
      role: "system",
      content: `Eres un personaje de star wars, concretamente ${name} responde todas las preguntas asumiendo este rol`,
    });
  } else {
    historyChat.push({
      role: "user",
      content: userText,
    });
  }
  const resIA = fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + APIKEY,
    },
    body: JSON.stringify({
      temperature: 0,
      max_tokens: 60,
      model: "gpt-3.5-turbo",
      messages: historyChat,
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Apikey incorrecta", error));
  return resIA;
}
export default getCompletion;
