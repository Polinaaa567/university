export class ApiService {
  // Список задач
  async fetchMongoDB() {
    let response = await fetch(`http://localhost:3000/articles`, {method: "GET"});
    let content = await response.json();

    return content;
  }
}
