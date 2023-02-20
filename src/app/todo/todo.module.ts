import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    TopNavComponent,
  ],
  imports: [CommonModule],
  exports: [
    TopNavComponent    
  ]
})
export class TodoModule { }
