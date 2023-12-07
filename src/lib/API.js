
function getCompletion(prompt, name) {
  const apiKEY = localStorage.getItem("APIKEY");

  const resIA = fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKEY,
    },
    body: JSON.stringify({
      temperature: 0,
      max_tokens: 60,
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Tu nombre es ${name}`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  }).then((res) => res.json());
  return resIA;
}

console.log(localStorage)
export default getCompletion;
