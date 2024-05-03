// Creazione del footer


const footer = document.createElement("footer");
footer.classList.add("footer");

// Creazione del container
const containerF = document.createElement("div");
containerF.classList.add("containerFooter");

// Creazione della riga
const row = document.createElement("div");
row.classList.add("row");

// Creazione delle colonne
const footerCols = [
  { title: "Chiamaci", links: [{ text: "about us", href: "tel: 3271188807" }] },
  { title: "Mail", links: [{ text: "attilio.diocane.it", href: "#" }] },
  { title: "Servizi", links: [{ text: "Spiaggia", href: "#" }, { text: "Ristorante", href: "#" }] },
  { title: "follow us", icons: ["fa-facebook-f", "fa-twitter", "fa-instagram", "fa-linkedin-in"] }
];

footerCols.forEach(colData => {
  const col = document.createElement("div");
  col.classList.add("footer-col");

  const title = document.createElement("h4");
  title.textContent = colData.title;

  const ul = document.createElement("ul");
  if (colData.links) {
    colData.links.forEach(linkData => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = linkData.href;
      a.textContent = linkData.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
  } else if (colData.icons) {
    colData.icons.forEach(iconClass => {
      const a = document.createElement("a");
      const i = document.createElement("i");
      i.classList.add("fab", iconClass);
      a.appendChild(i);
      a.href = "#"; // Aggiungi l'href desiderato
      col.appendChild(a);
    });
  }

  col.appendChild(title);
  col.appendChild(ul);
  row.appendChild(col);
});

containerF.appendChild(row);
footer.appendChild(containerF);
console.log("try");


document.addEventListener("DOMContentLoaded", function(){
    document.body.appendChild(footer);
})