function getCompletionChatGroup(usersText, name, APIKEY) {
  
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
      "messages": [
        {
          "role": "system",
          "content": `Eres ${name} personaje de star wars responde las preguntas asumiendo ese rol.`
        },
        {
          "role": "user",
          "content": usersText,
        }
      ]
    })
  })
    .then((res) => res.json())
    .catch((error) => ("Apikey incorrecta", error));

  return resIA;
}

export default getCompletionChatGroup;

