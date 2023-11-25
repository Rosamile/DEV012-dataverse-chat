export const renderCards = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("character");
  console.log(data);
  data.forEach((element) => {
    const list = document.createElement("li");
    list.setAttribute("itemscope", "");
    list.setAttribute("itemtype", "card");
    list.classList.add("cards");
    list.setAttribute("id", element.id);
    list.innerHTML = `
<img src=${element.imageUrl} alt="${element.id}">
<a href="#" itemprop="name">${element.name}</a>
`;
    ul.appendChild(list);
  });
  console.log(ul);
  return ul;
};
