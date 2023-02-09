import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TodoSettingComponent } from './todo-setting/todo-setting.component';

@NgModule({
  declarations: [
    TopNavComponent,
    TodoSettingComponent,
  ],
  imports: [],
  exports: [
    TopNavComponent, 
    TodoSettingComponent,
  ]
})
export class TodoModule { }
