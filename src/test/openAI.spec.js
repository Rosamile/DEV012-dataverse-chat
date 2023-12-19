/* eslint-disable no-undef */
import getCompletion from "../lib/API.js";

const OpenIAResponse = jest
  .fn()
  .mockResolvedValueOnce({ choices: [{ message: "casa" }] });

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: OpenIAResponse,
  })
);

describe("Endpoint de openIA", () => {
  it("La API es llamada con la información correcta", () => {
    const messages = [{ role: "user", content: "casa" }];

    const apikey = 123456;
    getCompletion(apikey, messages);

    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apikey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          temperature: 0,
          max_tokens: 60,
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "Eres un personaje de star wars, concretamente ${name} responde todas las preguntas asumiendo este rol",
            },
            {
              role: "user",
              content: messages,
            },
          ],
        }),
      }
    );
  });
});
