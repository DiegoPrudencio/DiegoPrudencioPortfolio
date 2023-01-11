import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TechstackComponent } from './pages/techstack/techstack.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  // {path: '/', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'techstack', component: TechstackComponent},
  {path: 'projects', component: ProjectsComponent}, 
  {path: 'contact', component: ContactComponent}, 
  // {path: 'menu/caixaGeral/caixa', component: CaixaComponent}, 
  // {path: 'menu/caixaGeral/caixa/cadastroDeTransacao', component: CadastroDeTransacaoComponent},
  // {path: 'menu/caixaGeral/caixa/receita', component: ReceitaComponent}, 
  // {path: 'menu/caixaGeral/caixa/despesa', component: DespesaComponent}, 
  // {path: 'menu/configuracoes', component: ConfigComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
