import { Header } from "../components/Header.js";
export const Example = () => {
  const headerComponent = Header("Example");
  const p = document.createElement("p");
  p.innerHTML = "hola mundo!!";
  p.innerHTML = headerComponent;
  return p;
};

export default Example;