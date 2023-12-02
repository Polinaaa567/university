export class ApiService {
  // данные коротко
  async fetchImportantData() {
    let response = await fetch(`http://localhost:3000/importantdata`, {
      method: "GET",
    });

    let content = await response.json();
    return content;
  }

  // все данные об одной статье
  async fetchSpecificData(id) {
    let response = await fetch(
      `http://localhost:3000/dataspecificarticle/${id}`,
      { method: "GET" }
    );
    let content = await response.json();
    return content;
  }

  // Удаление статьи
  async fetchDeletedArticle(id) {
    let response = await fetch(`http://localhost:3000/deletedata/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    });

    let content = await response.json();
    return content;
  }

  // добавление новых записей
  async fetchInsertArticle(title, authors, body, tags) {
    let response = await fetch(
      `http://localhost:3000/insertdata/${title}/${JSON.stringify(authors)}/${body}/${JSON.stringify(tags)}`,
      {
        method: "GET",
      }
    );

    let content = await response.json();
    return content;
  }
  // для топ 5
  async fetchTopFive() {
    let response = await fetch(`http://localhost:3000/topfive`, {
      method: "GET",
    });

    let content = await response.json();
    return content;
  } 

  // для календаря
  async fetchDateDiff(begin, end) {
    console.log(begin, end);
    let response = await fetch(
      `http://localhost:3000/datediff/${begin}/${end}`,
      { method: "GET" }
    );
    let content = await response.json();
    return content;
  }
}
