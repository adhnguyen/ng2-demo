"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.createUser = function (username, password) {
        var newUser = { username: username, password: password }; // Create a new user object
        users.push(newUser); // Push new user object to array of users
        return true;
    };
    AuthService.prototype.login = function (username, password) {
        var matchedUser = users.filter(function (user) {
            return user.username == username && user.password == password;
        }); // Find if there is any matched users
        if (matchedUser.length == 0) {
            return false;
        }
        else {
            localStorage.setItem('currentUser', JSON.stringify(matchedUser[0]));
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
var users = [{ username: 'test', password: '12345' }]; // Array of users as a fake database
//# sourceMappingURL=auth.service.js.map