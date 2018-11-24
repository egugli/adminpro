import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

// Rutas
import {APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


//Servicioa
import { ServiceModule } from './services/service.module';
//import { IncrementadorComponent } from './components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

//    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
