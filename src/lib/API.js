
 
 function getCompletion(){
  fetch("https://api.openai.com/v1/chat/completions",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("password"),
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo" ,
      messages: [
      {
        role: "user",
        content:"Hola soy el rey",
      },
    ],
  }),
  }).then (res=>res.json());
}

/*button.addEventListener("click", async () => {
  if (!prompt.value) return;
  const response = await getCompletion(prompt.value);
  output.innerHTML = response.choice[0].messages.content;
});*/
