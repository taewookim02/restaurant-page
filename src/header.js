// Insert into #content element the below html code

// select #content element
const content = document.querySelector("#content");

// create header element
const header = document.createElement("header");
header.classList.add("header");

// create logo element
const logo = document.createElement("div");
logo.classList.add("header__logo");

// create logo image element
const logoImg = document.createElement("img");
logoImg.classList.add("header__logo--img");
logoImg.setAttribute("src", "../src/image/logo.png");
logoImg.setAttribute("alt", "pikapoke logo image");

// create nav element
const nav = document.createElement("nav");
nav.classList.add("nav");

// create nav button element
const navButton = document.createElement("button");
navButton.classList.add("nav__button");
navButton.classList.add("active");
navButton.setAttribute("type", "button");
navButton.textContent = "Home";

// create nav button element
const navButton2 = document.createElement("button");
navButton2.classList.add("nav__button");
navButton2.setAttribute("type", "button");
navButton2.textContent = "Menu";

// create nav button element
const navButton3 = document.createElement("button");
navButton3.classList.add("nav__button");
navButton3.setAttribute("type", "button");
navButton3.textContent = "About";

// append logo image to logo element
logo.appendChild(logoImg);

// append nav button to nav element
nav.appendChild(navButton);
nav.appendChild(navButton2);
nav.appendChild(navButton3);

// append logo element to header element
header.appendChild(logo);

// append nav element to header element
header.appendChild(nav);

// append header element to content element
content.appendChild(header);
