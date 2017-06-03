import { Component, Input } from '@angular/core';

import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user.model';

@Component({
    selector:'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private authService: AuthService) {}
    
    logout() {
        this.authService.logout();
    }
}