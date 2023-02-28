import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoServiceService } from 'src/app/todo-service.service';

import { RightContainerComponent } from './right-container.component';

describe('RightContainerComponent', () => {
  let component: RightContainerComponent;
  let fixture: ComponentFixture<RightContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightContainerComponent ],
      providers: [TodoServiceService],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
