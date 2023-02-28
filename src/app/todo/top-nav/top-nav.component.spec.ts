import { query } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CommonModule } from 'src/app/common/common.module';
import { SettingsRoutingModule } from 'src/app/settings/settings-routing.module';
import { TodoServiceService } from 'src/app/todo-service.service';

import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavComponent ],
      imports: [
        SettingsRoutingModule, CommonModule, HttpClientModule
      ],
      providers: [
        TodoServiceService,
        Router
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
