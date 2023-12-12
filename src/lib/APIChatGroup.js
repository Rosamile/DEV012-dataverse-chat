export let historyChatGrupal = [];

export const clearHistoryChatGrupal = () => {
  historyChatGrupal = [];
};

export const upDateChat = (message) => {
  historyChatGrupal.push(message);
};

function getCompletionChatGroup(userText, name, APIKEY) {
  console.log(name);
  if (historyChatGrupal.length === 0) {
    const nameFormat = name.toString();
    // for (const element of name) {
    historyChatGrupal.push({
      role: "system",
      content: `Eres un personaje de star wars, concretamente ${name} responde todas las preguntas asumiendo este rol`,
    });
    //  }
  } else {
    historyChatGrupal.push({
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
      messages: historyChatGrupal,
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Apikey incorrecta", error));
  return resIA;
}
export default getCompletionChatGroup;
