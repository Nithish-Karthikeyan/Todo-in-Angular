import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({                  
  declarations: [
    CategoryContainerComponent,
    RightContainerComponent,
    MainContainerComponent,
    SideNavComponent
  ],
  imports: [BrowserModule, FormsModule],
  exports: [
    CategoryContainerComponent,
    RightContainerComponent,
    MainContainerComponent,
    SideNavComponent
  ]
})
export class CommonModule { }