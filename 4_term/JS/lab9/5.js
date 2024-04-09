// добавление стиля для одной ссылки
let link = document.querySelectorAll("a");
for (let links of link) {
  let href = links.getAttribute("href");

  if (!href) continue;

  if (!href.includes("://")) continue;

  if (href.startsWith("http://internal.com")) continue;

  links.style.color = "orange";
}
