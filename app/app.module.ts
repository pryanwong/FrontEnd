import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgsRevealModule} from 'ng2-scrollreveal';
import { AppComponent }        from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';
import { NavBarNoLoginComponent } from './navbar_nologin.component'
import { NavBarLoggedInComponent} from './navbar_login.component'
import { routing } from './app.routes';
import { WindowRef } from './WindowRef';

@NgModule({
  imports:      [ BrowserModule, routing, NgsRevealModule.forRoot() ],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, FooterComponent, NavBarNoLoginComponent, NavBarLoggedInComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WindowRef ]

})
export class AppModule { }
