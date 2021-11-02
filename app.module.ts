import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,BrowserAnimationsModule,SplitterModule,TableModule,ToastModule,MessagesModule,MessageModule,
    FormsModule,InputTextModule,RippleModule,ButtonModule,CardModule, AppRoutingModule,HttpClientModule,DialogModule
  ],
  providers: [ServiceService, HttpClientModule,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
