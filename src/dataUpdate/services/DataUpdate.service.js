import { API_BASE_URL } from "../../share/service/url-common.js";

export class DataUpdateService {

    async getUser() {
        const response = await fetch(`${API_BASE_URL}/users/get-user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Error al obtener los datos del usuario.');
        }
        return response.json();
    }

    async updateUser(userData) {
        const response = await fetch(`${API_BASE_URL}/users/update-user-data`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(userData)
        });

        return response;
    }
}
