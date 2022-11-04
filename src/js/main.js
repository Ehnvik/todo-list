import { Item } from "./models/input";

// <-----Created static elements----->

//header section
const header = document.createElement("header");
const h1 = document.createElement("h1");
const inputContainer = document.createElement("div");
const input = document.createElement("input");
const inputButton = document.createElement("button");

//main section
const main = document.createElement("main");
const ul = document.createElement("ul");

//footer section
const footer = document.createElement("footer");

// <-----show static elements----->

//header show
document.body.appendChild(header);
header.appendChild(h1);
h1.innerHTML = "Todo List";
header.appendChild(inputContainer);
inputContainer.appendChild(input);
inputContainer.appendChild(inputButton);
inputButton.innerHTML = "Spara";

//main show
document.body.appendChild(main);
main.appendChild(ul);

//footer show
document.body.appendChild(footer);

// <-----style static elements----->

//header style
header.classList.add("header");
h1.classList.add("header__h1");
inputContainer.classList.add("header__input-container");
input.classList.add("header__input-container__input");
inputButton.classList.add("header__input-container__button");

//main style
main.classList.add("main");
ul.classList.add("main__container");

//footer style
footer.classList.add("footer");
