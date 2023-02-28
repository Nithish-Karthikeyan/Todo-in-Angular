import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { Category } from '../../Category';
import { TodoServiceService } from '../../todo-service.service';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent { 
  tasks: Task[] = [];
  completedTasks : Task[] = [];
  currentDate : string = '';
  taskName !: string;
  selectedTask!:Task;
  showRightContainer : boolean = false;
  resizeContainer: boolean = false;
  isTaskMenuHidden !: boolean;
  highlightTask : Task ={ 
    id: 0, 
    name: "",
    categoryIds: [0], 
    note: "",
    isImportant: false,
    isCompleted: false}

  @Input()
  category !: Category;
  @Input() isSideNavHidden:boolean = false; 
  @Output() sideNav = new EventEmitter<boolean>();

  constructor(private todoService:TodoServiceService, private datePipe: DatePipe){}

  addTask(value: string) {
    let makeImportant: boolean;
    if (value && value.trim() !== "") {
      if (this.category.id == 2) {
        makeImportant = true;
      } else {
        makeImportant = false;
      } 
      let newTask = {
        id: 0,
        name: value,
        categoryIds: [this.category.id,5],
        note: "",
        isImportant: makeImportant,
        isCompleted: false,
      };
      this.todoService.addTask(newTask);
      this.renderTasks();
    }
  }

  markImportant(task: Task) {
    if (task.isImportant == false) {
      task.isImportant = true;
      task.categoryIds.splice(0, 0, 2);
    } else {
      task.isImportant = false;
      task.categoryIds.splice(0, 1);
    }
    this.todoService.addTask(task);
    this.renderTasks();
    this.selectedTask = task;
  }

  completedTask(task:Task) {
    if (task.isCompleted == false) {
      task.isCompleted = true;
    } else {
      task.isCompleted= false;
    }
    this.todoService.addTask(task);
    this.renderTasks();
    this.selectedTask = task;
  }

  ngOnChanges() {
    let todayDate = Date.now();
    this.currentDate = this.datePipe.transform(todayDate, 'EEEE, LLLL dd') || '';
    this.renderTasks();
    this.closeTaskMenu(this.resizeContainer);
  }

  renderTasks() {
    this.todoService.getTasks(this.category.id).subscribe((existingTasks) => {
      let completeTasks : Task[] = [];
      let incompleteTasks : Task[] = [];
      for(let task of existingTasks as Task[]) {
        if(task.isCompleted){
          if(this.category.id != 2) {
            completeTasks.push(task);
          }
        } else {
          incompleteTasks.push(task);
        } 
      }
      this.tasks = incompleteTasks;
      this.completedTasks = completeTasks;
    });
  }

  openTaskMenu(taskId : number) {
    this.todoService.getTaskById(taskId).subscribe((existingTask)=> {
      this.selectedTask = existingTask as Task;
    this.highlightTask = existingTask as Task});
    this.showRightContainer = true;
    this.resizeContainer= true;
  }

  closeTaskMenu(hideMenu: boolean){
    this.showRightContainer = hideMenu;
    this.resizeContainer= false;
    this.isTaskMenuHidden = hideMenu;
  }

  openSideNav(isSideNavClosed: boolean) {
    this.isSideNavHidden = false;
    this.sideNav.emit(isSideNavClosed);
  }
}