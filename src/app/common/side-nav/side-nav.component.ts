import { Component } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { Category } from '../../Category';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  selectedCategory!: Category;
  category!: string;
  sideNavStatus : boolean = false;
  
  constructor(private toDoService: TodoServiceService) {}

  addCategory(value: string) {
    let categoryName:string;
      if (value && value.trim() != "") {
        categoryName = value;
      } else {
        categoryName = "Untitled Task";
      }
      let category = {
        id: 0,
        name: categoryName,
        icon: "fa-solid fa-list-ul",
      };
      this.toDoService.addCategory(category);
  }        

  chooseCategory(category: Category){
    this.selectedCategory = category;
  }

  toggleSideNav() {
    this.sideNavStatus = true;
  }

  openSideNav(sideNavOpen : boolean) {
    this.sideNavStatus = sideNavOpen;
  }

}
