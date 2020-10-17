import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { HowwedoComponent } from './components/howwedo/howwedo.component';
import { CasestudiesComponent } from './components/casestudies/casestudies.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DialogueFormComponent } from './components/dialogue-form/dialogue-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatwedoComponent,
    HowwedoComponent,
    CasestudiesComponent,
    BlogComponent,
    ContactusComponent,
    AboutusComponent,
    DialogueFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{useClass: HashLocationStrategy, provide: LocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
