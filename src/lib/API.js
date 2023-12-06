
const prompt = sectionchatG.querySelector("#writeHere");

async function getCompletion(prompt) {
  const rest = awaitfetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + API_KEY,
    },
    body: JSON.stringify({ model: "gpt-3.5-turbo" }),
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return await rest.json();
}

const button = sectionchatG.querySelector("#buttonEnviarChatG");
const output = sectionchatG.querySelector("#textUser");

button.addEventListener("click", async () => {
  if (!prompt.value) return;
  const response = await getCompletion(prompt.value);
  output.innerHTML = response.choice[0].messages.content;
});*/
