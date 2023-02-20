import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoSettingComponent } from '../settings/todo-setting/todo-setting.component';
import { GeneralComponent } from './general/general.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [ 
    TodoSettingComponent, 
    GeneralComponent, 
    ProfileComponent 
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
  ],
  exports: [
    TodoSettingComponent, 
    GeneralComponent, 
    ProfileComponent]
})
export class SettingsModule { }
