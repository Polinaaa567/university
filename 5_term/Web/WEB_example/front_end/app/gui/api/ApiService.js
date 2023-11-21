import { TokenFactory } from '../../domain/index.js';


export class ApiService {
    constructor() {
        this.token = TokenFactory.createInstance();
    }
   
    // Авторизация 
    async getTokenData(username, password) {
        let response = await fetch(`http://localhost:8080/app/api/authentication?username=${username}&password=${password}`, {method: 'GET'});
        let tokenData = await response.json();
        this.token.fixToken(tokenData);
    
        // return content;
    }

    // Список задач
    async calc(A, B) {            
        let response = await fetch(`http://localhost:8080/app/api/calculation?a=${A}&b=${B}`, {method: 'GET', headers: {'Authorization': `Bearer ${this.token.getToken()}`}});
        let content = await response.text();

        return content;
    }
}