import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import * as moment from 'moment';
import { Category } from '../../Category';
import { TodoServiceService } from '../../todo-service.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit { 
  tasks: Task[] =[];
  currentDate!: string;
  task !: string;

  @Input()
  category!: Category;

  constructor(private todoService:TodoServiceService){}

  addTask(value: string) {
    if (value && value.trim() !== "") {
      let newTask = {
        id: 0,
        name: value,
        categoryIds: [this.category.id],
        note: "none",
        isImportant: false,
        isCompleted: false,
      };
      this.todoService.addTask(newTask);
      this.renderTasks();
    }
  }

  markImportant(taskId:number) {
    this.tasks.forEach(task => { 
      if(task.id === taskId) {
        if (task.isImportant == false) {
          task.isImportant = true;
        } else {
          task.isImportant = false;
        }
      }
    });
  }

  completedTask(taskId:number) {
    this.tasks.forEach(task => { 
      if(task.id === taskId) {
        if (task.isCompleted == false) {
          task.isCompleted = true;
        } else {
          task.isCompleted= false;
        }
      }
    });
  }

  ngOnInit() {
    this.currentDate = moment().format("dddd , MMMM D");
    this.renderTasks();
  }

  renderTasks() {
    this.todoService.getTasks().subscribe((existingTasks) => {
      this.tasks = existingTasks as Task[];
    });
  }
}
