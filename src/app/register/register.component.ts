import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    model: any = {} // form model
    message: string = "" // message display on screen
    showMessage: boolean = false // show message after submit form
    
    constructor(private authService: AuthService) {}

    register() {
        if(this.authService.createUser(this.model.username, this.model.password)) {
            this.message = "User created successfully";
            this.showMessage = true;
        } else {
            this.message = "There is something wrong, please try again"
            this.showMessage = true;
        }
    }
}