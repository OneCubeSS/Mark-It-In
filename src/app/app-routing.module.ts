import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogComponent } from './components/blog/blog.component';
import { CasestudiesComponent } from './components/casestudies/casestudies.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'whatwedo', component: HomeComponent },
  { path: 'howwedo', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'casestudies', component: CasestudiesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'blogposts', component: BlogCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
