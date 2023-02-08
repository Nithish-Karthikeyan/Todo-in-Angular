import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TodoSettingComponent } from './todo-setting/todo-setting.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    TopNavComponent,
    TodoSettingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [TopNavComponent, TodoSettingComponent]
})
export class TodoModule { }
