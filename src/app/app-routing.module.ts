import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { PostAddComponent } from './components/blog-create/post-add/post-add.component';
import { PostDetailComponent } from './components/blog-create/post-detail/post-detail.component';
import { PostEditComponent } from './components/blog-create/post-edit/post-edit.component';
import { BlogDataComponent } from './components/blog/blog-data/blog-data.component';
import { BlogComponent } from './components/blog/blog.component';
import { CasestudiesComponent } from './components/casestudies/casestudies.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  // { path: 'whatwedo', component: HomeComponent },
  // { path: 'howwedo', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'casestudies', component: CasestudiesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/post-data/:id', component: BlogDataComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'blogposts', component: BlogCreateComponent },
  { path: 'blogposts/details/:id', component: PostDetailComponent },
  { path: 'blogposts/add', component: PostAddComponent },
  { path: 'blogposts/edit/:id', component: PostEditComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
