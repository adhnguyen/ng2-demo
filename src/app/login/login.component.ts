import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    model: any = {};
    errorMessage: string = "";
    showMessage: boolean = false;
    returnUrl: string;

    constructor(private authService: AuthService,
                private router: Router) {}

    login() {
        if (this.authService.login(this.model.username, this.model.password)) {
            this.router.navigate(['/home']);
        } else {
            this.errorMessage = "Wrong username or password"
            this.showMessage = true
        }
    }
}