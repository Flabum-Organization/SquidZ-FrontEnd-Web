import {API_BASE_URL} from "../../share/service/url-common.js";


export class AuthenticationService {

     async signIn(email, password) {
        const response = await fetch(`${API_BASE_URL}/users/sign-in?email=${email}&password=${password}`,
            {method: "GET", headers: {"Content-Type": "application/json", 'Accept': 'application/json'}, credentials: 'include'});

        if (!response.ok) {throw new Error('Authentication returned error.');}
        return response.json();

    }

}