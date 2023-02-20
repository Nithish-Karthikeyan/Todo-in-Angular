import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TopNavComponent } from './todo/top-nav/top-nav.component';
import { SettingsRoutingModule } from './settings/settings-routing.module';
import { TodoGuard } from './todo.guard';

const routes: Routes = [
  {
    path: 'login',
    component: TopNavComponent
  },
  {
    path: 'todo',
    component: TopNavComponent,
    //canActivate: [TodoGuard]
  },
    {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), SettingsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
