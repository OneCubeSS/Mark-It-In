import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { APP_BASE_HREF } from '@angular/common';

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
    AppRoutingModule
  ],
  // providers: [{useClass: HashLocationStrategy, provide: LocationStrategy}],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
})
export class AppModule { }
