import { Component } from '@angular/core';
import { Category } from '../Category';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  selectedCategory!: Category;
  
  chooseCategory(category: Category){
    this.selectedCategory = category;
  }

}
