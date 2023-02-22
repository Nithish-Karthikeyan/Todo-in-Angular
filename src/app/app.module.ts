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
import { TodoInterceptor } from './todo.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule,  NgxUiLoaderConfig, } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = 
{
  fgsColor: '#0b56d3',
  fgsPosition: "center-center",
  fgsSize: 100,
  fgsType: "three-strings",
  gap: 24,
  logoPosition: "center-center",
  logoSize: 200,
  logoUrl: "assets/Logo.png",
  hasProgressBar: false,
  overlayColor: "rgb(253,251,251)",
  text: "To Do",
  textColor: "#2564CF",
  textPosition: "center-center",
  minTime: 100
}


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        LoginPageComponent,
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
        MatProgressSpinnerModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderRouterModule.forRoot({exclude: ["/settings"]}) 
    ]
})
export class AppModule { }
