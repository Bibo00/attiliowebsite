// Creazione degli elementi del menu
const nav = document.createElement('nav');
const navbar = document.createElement('div');
navbar.classList.add('navbar');
const container = document.createElement('div');
container.classList.add('container', 'nav-container');
const checkbox = document.createElement('input');
checkbox.classList.add('checkbox');
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('id', 'checkbox');
const hamburgerLines = document.createElement('div');
hamburgerLines.classList.add('hamburger-lines');
for (let index = 1; index < 4; index++) {
  const line = document.createElement('span');
  line.classList.add('line', 'line' + index);
  hamburgerLines.appendChild(line);
}
const logo = document.createElement('div');
logo.classList.add('logo');
const img = document.createElement('img');
img.setAttribute('src', './logo.png');
const menuItems = document.createElement('div');
menuItems.classList.add('menu-items');
const numMenuItems = 4;
for (let index = 0; index < numMenuItems; index++) {
  const link = document.createElement('li');
  const anchor = document.createElement('a');
  switch(index){
    case 0:
      anchor.setAttribute('href', 'index.html');
      anchor.textContent = 'Home';
      break;
    case 1:
      anchor.setAttribute('href', 'menu.html');
      anchor.textContent = 'Risorante';
      break;
    case 2:
      anchor.setAttribute('href', '#');
      anchor.textContent = 'Recensioni';
      break;
    case 3:
      anchor.setAttribute('href', '#');
      anchor.textContent = 'Chi siamo?';
      break;
  }
  link.appendChild(anchor);
  menuItems.appendChild(link);
}
logo.appendChild(img);
container.appendChild(checkbox);
container.appendChild(hamburgerLines);
container.appendChild(logo);
container.appendChild(menuItems);
navbar.appendChild(container);
nav.appendChild(navbar);

const firstChild = document.body.firstChild;
document.body.insertBefore(nav, firstChild);

