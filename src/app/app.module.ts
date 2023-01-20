import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TechstackComponent } from './pages/techstack/techstack.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AuthGuard } from './guards/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TechstackComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent,
  NavbarComponent]
})
export class AppModule { }
