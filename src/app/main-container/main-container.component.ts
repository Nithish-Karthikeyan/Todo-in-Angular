import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task';
import * as moment from 'moment';
import { Category } from '../Category';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit { 
  tasks: Task[] =[];
  currentDate: any;

  @Input()
  category!: Category;

  addTask(value: string) {
    if (value && value.trim() !== "") {
      let newTask = {
        id: 1,
        name: value,
        categoryIds: [1],
        note: "none",
        isImportant: false,
        isCompleted: false,
      };
      this.tasks.push(newTask);
      console.log(this.tasks);
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
  }
}
