import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-setting',
  templateUrl: './todo-setting.component.html',
  styleUrls: ['./todo-setting.component.scss']
})
export class TodoSettingComponent {
  constructor(private router : Router){}
  
  openMainMenu() {
    this.router.navigate(['']);
  }
}
