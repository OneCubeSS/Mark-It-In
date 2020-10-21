import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { MatContenteditableModule } from 'mat-contenteditable';
import { MatDialogModule } from '@angular/material/dialog';
import { PostAddComponent } from './components/blog-create/post-add/post-add.component';
import { PostDetailComponent } from './components/blog-create/post-detail/post-detail.component';
import { PostEditComponent } from './components/blog-create/post-edit/post-edit.component';
import { BlogDataComponent } from './components/blog/blog-data/blog-data.component';

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
    AdminLoginComponent,
    BlogCreateComponent,
    PostAddComponent,
    PostDetailComponent,
    PostEditComponent,
    BlogDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatContenteditableModule,
    MatCardModule
  ],
  providers: [
    {
      useClass: HashLocationStrategy, 
      provide: LocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
