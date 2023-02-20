import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { TodoModule } from './todo/todo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from './common/common.module';
import { SettingsModule } from './settings/settings.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoaderComponent } from './loader/loader.component';
import { TodoInterceptor } from './todo.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        LoginPageComponent,
        LoaderComponent,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass : TodoInterceptor,
        multi : true
    }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TodoModule,
        CommonModule,
        SettingsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule
    ]
})
export class AppModule { }
