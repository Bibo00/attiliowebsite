// Creazione del footer
const footer = document.createElement("footer");
footer.classList.add("footer");

// Creazione del container
const wrapper = document.createElement("div");
wrapper.classList.add("container");

// Creazione della riga
const row = document.createElement("div");
row.classList.add("row");

// Dati delle colonne del footer
const footerCols = [
  { title: "Chiamaci", links: [{ text: "about us", href: "tel: 3271188807", icon: "call-outline" }] },
  { title: "Mail", links: [{ text: "attilio.diocane.it", href: "#", icon: "mail-outline" }] },
  { title: "Servizi", links: [{ text: "Spiaggia", href: "#" }, { text: "Ristorante", href: "#" }] },
  { title: "follow us", icons: ["fa-facebook-f", "fa-twitter", "fa-instagram", "fa-linkedin-in"] }
];

// Creazione delle colonne del footer
footerCols.forEach(colData => {
  const col = document.createElement("div");
  col.classList.add("footer-col");

  const title = document.createElement("h4");
  title.textContent = colData.title;
  col.appendChild(title);
  const ul = document.createElement("ul");
  if (colData.links) {
    colData.links.forEach(linkData => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = linkData.href;
      if(linkData.icon){
        a.innerHTML = `<ion-icon name="${linkData.icon}" style="color: white; margin-right: 10px;"></ion-icon>`;
      }
      a.innerHTML += `${linkData.text}`;
      
      li.appendChild(a);
      ul.appendChild(li);
      
    });
    col.appendChild(ul);
  } else if (colData.icons) {
    const socialDiv = document.createElement('div');
    socialDiv.classList.add('social-links');
    colData.icons.forEach(iconClass => {
      const a = document.createElement("a");
      const i = document.createElement("i");
      i.classList.add("fab", iconClass);
      a.appendChild(i);
      socialDiv.appendChild(a);
      
    });
    col.appendChild(socialDiv);
  }
  row.appendChild(col);
});

// Aggiunta della riga al container e del container al footer
wrapper.appendChild(row);
footer.appendChild(wrapper);

const scriptDiv = document.getElementsByTagName('script');
document.body.appendChild(footer);
console.log('ciao');
    document.body.insertBefore(footer, scriptDiv[0]);
