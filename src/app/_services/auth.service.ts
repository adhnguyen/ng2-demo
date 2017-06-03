import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    createUser(username: string, password: string) {
        const newUser = { username, password }; // Create a new user object
        users.push(newUser); // Push new user object to array of users
        return true;
    }

    login(username: string, password: string) {
        const matchedUser = users.filter((user) => {
            return user.username == username && user.password == password;
        }); // Find if there is any matched users

        if (matchedUser.length == 0 ) { // No matched user
            return false;
        } else {
            localStorage.setItem('currentUser', JSON.stringify(matchedUser[0]));
            return true;
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}

let users = [{ username: 'test', password: '12345' }] // Array of users as a fake database