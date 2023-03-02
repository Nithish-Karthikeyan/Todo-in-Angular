import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Category } from 'src/app/Category';
import { Task } from 'src/app/Task';
import { TodoServiceService } from 'src/app/todo-service.service';

import { MainContainerComponent } from './main-container.component';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;
  let datePipe : DatePipe;
  let task: Task = {
      id: 1,
      name: "Do Testing",
      categoryIds: [2,1,5],  
      note: "",
      isImportant: true,
      isCompleted: false,
    }
  let testCategory: Category = {
      id: 1,
      name: "My Day",
      icon: "fa-solid fa-sun"
    }

  beforeEach(() => {
      datePipe = new DatePipe('en-US');
      TestBed.configureTestingModule({
      declarations: [ MainContainerComponent ],
      providers:[TodoServiceService,DatePipe],
      imports: [HttpClientModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create date Instance', ()=> {
    expect(datePipe).toBeTruthy();
  });

  it('should create date in required format', ()=> {
    const currentDate = Date.now();
    const formattedDate = datePipe.transform(currentDate, 'EEEE, LLLL dd');
    expect(formattedDate).toEqual("Wednesday, March 01")
  });

  it('toggle important status of task',() => {
    component.category = testCategory; 
    component.markImportant(task);
    if(task.isImportant) {
      expect(component.selectedTask.categoryIds).toEqual([2,1,5]);
    } else {
      expect(component.selectedTask.categoryIds).toEqual([1,5])
    }
  });

  it('toggle completed status of task',() => {
    component.category = testCategory; 
    component.completedTask(task);
    expect(component.selectedTask.isCompleted).toEqual(true);
  });

});
