import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-setting',
  templateUrl: './todo-setting.component.html',
  styleUrls: ['./todo-setting.component.scss']
})
export class TodoSettingComponent {
  constructor(private router : Router, private route : ActivatedRoute){}
  
  openMainMenu() {
    this.router.navigate(['todo']);
  }

  openGeneralSettings() {
    this.router.navigate(['general'],{relativeTo:this.route});
  }

  openProfileSettings() {
    this.router.navigate(['profile'],{relativeTo:this.route});
  }
}
