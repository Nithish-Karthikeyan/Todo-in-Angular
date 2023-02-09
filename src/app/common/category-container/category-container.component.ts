import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';
import { Category } from '../../Category';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss']
})
export class CategoryContainerComponent implements OnInit {

  @Output() selectedCategory = new EventEmitter<Category>();

    categories: Category[] = [];
    highlightSelectedCategory: string = "";
    category!: string;

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
        this.ngOnInit();
    }        
    
    ngOnInit() {
      this.toDoService.getCategory().subscribe((existingCategories) => { this.categories = existingCategories as Category[];
        if(this.categories.length <= 5) {
          this.selectCategory(this.categories[0]);
        } else {
          this.selectCategory(this.categories[this.categories.length - 1]);
        }
      });
    }
    
    selectCategory(category: Category) {
      this.selectedCategory.emit(category);
      this.highlightSelectedCategory = "selected-menu";
    }
}
