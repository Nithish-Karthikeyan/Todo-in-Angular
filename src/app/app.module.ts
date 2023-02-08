import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { TodoModule } from './todo/todo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { CategoryContainerComponent } from './category-container/category-container.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        MainContainerComponent,
        RightContainerComponent,
        CategoryContainerComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TodoModule,
    ]
})
export class AppModule { }
