import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Task } from 'src/app/Task';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.scss']
})
export class RightContainerComponent implements OnChanges {
  @Input() task !: Task;
  @Output() hideTaskMenu = new EventEmitter<boolean>();
  @Output() importantStatus = new EventEmitter<Task>();
  @Output() taskStatus = new EventEmitter<Task>();
  note !: string;
  existingTask !: Task;

  constructor(private todoService : TodoServiceService) {}

  closeTaskMenu(showRightContainer: boolean) {
    this.hideTaskMenu.emit(showRightContainer)
  }

  addNote(note: string) {
      if (note && note.trim() !== "") {
        this.task.note = note;
      }
      this.todoService.addTask(this.task);
  }

  ngOnChanges() {
    this.renderTask();
  }

  renderTask() {
    this.todoService.getTaskById(this.task.id).subscribe((savedTask)=> {
      this.existingTask = savedTask as Task;
    });
  }

  markImportant(task: Task) {
    this.importantStatus.emit(task);
    this.renderTask();
  }

  completedStatusOfTask(task: Task) {
    this.taskStatus.emit(task);
    this.renderTask();
  }
}  
