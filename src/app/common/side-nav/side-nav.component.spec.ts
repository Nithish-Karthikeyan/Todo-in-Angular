import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoServiceService } from 'src/app/todo-service.service';
import { CommonModule } from '../common.module';
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavComponent ],
      providers: [TodoServiceService],
      imports: [HttpClientModule,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should add Category',() => {
  //   const categoryName: string = "Angular";
  //   component.addCategory(categoryName);

  // })
});
