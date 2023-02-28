import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from 'src/app/todo-service.service';

import { MainContainerComponent } from './main-container.component';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;
  let datePipe : DatePipe;

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
    expect(formattedDate).toEqual("Tuesday, February 28")
  });
  
});
