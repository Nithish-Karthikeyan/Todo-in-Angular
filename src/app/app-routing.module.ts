import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoSettingComponent } from './todo/todo-setting/todo-setting.component';

const routes: Routes = [
  {
    path:'setting', component:TodoSettingComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
