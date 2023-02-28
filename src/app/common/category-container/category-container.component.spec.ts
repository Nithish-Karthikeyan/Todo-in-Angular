import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoServiceService } from 'src/app/todo-service.service';

import { CategoryContainerComponent } from './category-container.component';

describe('CategoryContainerComponent', () => {
  let component: CategoryContainerComponent;
  let fixture: ComponentFixture<CategoryContainerComponent>;

  beforeEach(() => {
    let mockData = [
      {
        id: 1,
        name: "My Day",
        icon: "fa-solid fa-sun"
      },
      {
        id: 2,
        name: "Important",
        icon: "fa-regular fa-star"
      },
      {
        id: 3,
        name: "Planned",
        icon: "fa-regular fa-calendar"
      },
      {  
       id: 4,
       name: "Assigned to me",
       icon: "fa-solid fa-user"
      },
      {
        id: 5,
        name: "Tasks",
        icon: "fa-solid fa-house"
      }
    ];

    const mockTodoService = {
      getCategory : () => {
        return of(mockData);
      }
    };
    TestBed.configureTestingModule({
      declarations: [ CategoryContainerComponent ],
      providers:[{provide: TodoServiceService, useValue: mockTodoService}],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryContainerComponent);
    component = fixture.componentInstance;
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain default Categories', ()=> {
    const content = fixture.nativeElement.querySelector('ul').querySelectorAll('li');
    expect(content.length).toEqual(5);
    expect(content[0].children[1].innerText).toEqual("My Day");
    expect(content[1].children[1].innerText).toEqual("Important");
    expect(content[2].children[1].innerText).toEqual("Planned");
    expect(content[3].children[1].innerText).toEqual("Assigned to me");
    expect(content[4].children[1].innerText).toEqual("Tasks");
  });

});