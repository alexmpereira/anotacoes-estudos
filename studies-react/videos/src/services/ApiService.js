const api = 'http://localhost:3002/api/react-video/';

export const ApiService = {
    get(endpoint){
        return fetch(`${api}${endpoint}`)
            .then(response => response.json());
    }
}