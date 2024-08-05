import {API_BASE_URL} from "../../share/service/url-common.js";


export class AuthenticationService {

     async signIn(email, password) {
        const response = await fetch(`${API_BASE_URL}/users/sign-in?email=${email}&password=${password}`,
            {method: "GET", headers: {"Content-Type": "application/json", 'Accept': 'application/json'}, credentials: 'include'});

        if (!response.ok) {throw new Error('Authentication returned error.');}
        return response.json();

    }

    async signUp(names, lastnames, email, telephone, password, repeatPassword) {

         if (password === repeatPassword) {
             const requestBody = {
                 name: {
                     firstName: names,
                     lastName: lastnames
                 },
                 emailAddress: {
                     address: email
                 },
                 phoneNumber: {
                     countryCode: "+51",
                     number: telephone
                 },
                 password: password,
                 roles: [
                     "ROLE_USER"
                 ]
             }
             const response = await fetch(`${API_BASE_URL}/users/sign-up`,
                 {method: "POST",
                     headers: {"Content-Type": "application/json", 'Accept': 'application/json'},
                     credentials: 'include',
                     body:  JSON.stringify(requestBody)
                 });
             if (!response.ok) {throw new Error('Authentication returned error.');}
             return response.json();
         }
         else {throw new Error('Password do not match');}



     }
}
