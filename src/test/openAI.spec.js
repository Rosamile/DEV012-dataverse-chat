
import { describe } from "node:test";
import { getCompletion } from "../lib/API.js";
import { expect } from "@jest/globals";



const OpenIAResponse = jest.fn().mockResolvedValueOnce({choices:[{message:"casa"}]});

global.fetch = jest.fn(()=> Promises.resolve({
  json:OpenIAResponse
}));

describe('Endpoint de openIA', ()=>
{
  it('La API es llamada con la información correcta',()=>{

    const messages=[{role:'user', content:'casa'}];

  getCompletion("123456", messages);

  expect(global, fetch).toBeCalledWith("https://api.openai.com/v1/chat/completions", expect{
    method:'POST',
    headers: {
        'Authorization':'Bearer 123456',
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        'model':'gpt-3.5-turbo',
        messages,
    })
  })
});
});