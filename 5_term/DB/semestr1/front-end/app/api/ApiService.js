export class ApiService {
  // название коллекций
  async fetchCollection() {
    let response = await fetch(`http://localhost:3000/allcollection`, {
      method: "GET",
    });

    let content = await response.json();
    return content;
  }

  // все данные в коллекции
  async fetchAllData(collection) {
    let response = await fetch(`http://localhost:3000/alldata/${collection}`, {
      method: "GET",
    });
    let content = await response.json();
    return content;
  }

  // Удаление
  async fetchDeletedData(collection, id) {
    let response = await fetch(
      `http://localhost:3000/deletedata/${collection}/${id}`,
      {
        method: "DELETE",
        headers: { Accept: "application/json" },
      }
    );

    let content = await response.json();
    return content;
  }

  // добавление новых записей
  async fetchInsertData(collection, data) {
    let response = await fetch(
      `http://localhost:3000/insertdata/${collection}`,
      {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    let content = await response.json();
    return content;
  }

  // Изменение данных
  async fetchUpdateData(collection, id, data) {
    let response = await fetch(
      `http://localhost:3000/updatedata/${collection}/${id}`,
      {
        method: "POST",
        headers: { Accept: "application/json",  "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    let content = await response.json();
    return content;
  }
}
