
import { API_BASE_URL } from "./url-common.js";

export class SignOutService {
    async signOut() {
        const response = await fetch(`${API_BASE_URL}/users/sign-out`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Error al cerrar sesión.');
        }

        return response;
    }
}
