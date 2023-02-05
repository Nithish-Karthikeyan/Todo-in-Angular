import { Component } from '@angular/core';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss']
})
export class CategoryContainerComponent {

    categories: Category = [{id:1, name :'My Day', icon:"fa-regular fa-sun"}, 
                  {id:2, name:'Important', icon:"fa-regular fa-star"}, 
                  {id:3, name:'Planned', icon:"fa-regular fa-calendar"}, 
                  {id:4, name:'Assigned To Me', icon:"fa-regular fa-user"}, 
                  {id:5, name:'Tasks', icon:"fa-solid fa-house"}]

    addCategory(value: string) {
      let categoryName:string;
        if (value && value.trim() != "") {
          categoryName = value;
        } else {
          categoryName = "Untitled Task";
        }
        let category = {
          id: 6,
          name: categoryName,
          icon: "fa-solid fa-list-ul",
        };
        this.categories.push(category);
    }              

}

type Category = Array<{
  id: number, 
  name: string, 
  icon: string
}>;
