import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SettingsRoutingModule } from '../settings-routing.module';

import { TodoSettingComponent } from './todo-setting.component';

describe('TodoSettingComponent', () => {
  let component: TodoSettingComponent;
  let fixture: ComponentFixture<TodoSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSettingComponent ],
      imports : [RouterTestingModule]
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
