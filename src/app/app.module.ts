import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 

import { routing } from './app.routing';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { AppComponent }  from './app.component';

import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';
import { HomeComponent }  from './home/home.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    routing 
  ],
  declarations: [ 
    AppComponent, 
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  providers: [ 
    AuthGuard, 
    AuthService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
