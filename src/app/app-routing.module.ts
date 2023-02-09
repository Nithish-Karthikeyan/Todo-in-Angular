import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { TodoSettingComponent } from './todo/todo-setting/todo-setting.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavComponent
  },
  {
    path:'setting', component:TodoSettingComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
