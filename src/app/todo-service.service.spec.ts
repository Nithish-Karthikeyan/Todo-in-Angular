import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Category } from './Category';
import { TodoServiceService } from './todo-service.service';

fdescribe('TodoServiceService', () => {
  let service: TodoServiceService;
  let httpClient: HttpClient;
  let categories = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoServiceService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
