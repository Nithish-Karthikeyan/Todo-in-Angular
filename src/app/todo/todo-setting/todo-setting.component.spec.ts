import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSettingComponent } from './todo-setting.component';

describe('TodoSettingComponent', () => {
  let component: TodoSettingComponent;
  let fixture: ComponentFixture<TodoSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
