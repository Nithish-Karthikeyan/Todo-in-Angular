import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoGuard } from '../todo.guard';
import { GeneralComponent } from './general/general.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoSettingComponent } from './todo-setting/todo-setting.component';

const routes: Routes = [
  {
    path:'settings',
    canActivateChild: [TodoGuard],
    children: [
      {
        path: '',
        component:TodoSettingComponent,
      },
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
