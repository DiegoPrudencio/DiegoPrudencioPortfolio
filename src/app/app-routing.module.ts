import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TechstackComponent } from './pages/techstack/techstack.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthGuard } from './guards/auth-guard.service';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'techstack', component: TechstackComponent},
  {path: 'projects', component: ProjectsComponent}, 
  {path: 'contact', component: ContactComponent},
  {path: '', component: ContactComponent, canActivate: [AuthGuard]}, 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
