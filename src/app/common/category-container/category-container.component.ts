import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';
import { Category } from '../../Category';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss']
})
export class CategoryContainerComponent {

    @Output() selectedCategory = new EventEmitter<Category>();
    @Input() newCategory!:string
    
    categories: Category[] = [];

    highlightSelectedCategory !: Category ;

    constructor(private toDoService: TodoServiceService) {}
    
    ngOnChanges() {
      this.renderCategory();
    }

    renderCategory() {
      this.toDoService.getCategory().subscribe((existingCategories) => { this.categories = existingCategories as Category[];
        if(this.categories.length <= 5) {
          this.selectCategory(this.categories[0]);
        } else {
          this.selectCategory(this.categories[this.categories.length - 1]);
        }
      });
    }
    
    selectCategory(category: Category) {
      this.highlightSelectedCategory = category;
      this.selectedCategory.emit(category);
    }
}
